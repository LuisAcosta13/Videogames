const { Router } = require('express');
const axios = require('axios')
import {Videogame, Genre} from '../db'
const { Op } = require('sequelize')

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();


require('dotenv').config();
const { API_KEY } = process.env;

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/videogames', async (req, res, next) => {

    try {
        if (!req.query.name) {
            const games = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`)

            //const gamesDB = await Videogame.findAll({ include: { model: Genre, attributes: ['name'], through: [] /*puede ser {attributes: []}*/ } })

            //const allGames = games.data.results.concat(gamesDB)

            //if(allGames){
            if (games) {
                //res.status(202).json(allGames)
                res.status(202).json(games.data.results)
            }
        } else {
            next()
        }
    } catch (e) {
        res.status(400).send('Hubo un error en la consulta')
    }
})

router.get('/videogames', async (req, res) => {
    const { name } = req.query

    try {
        const games = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&search=${encodeURI(name)}`)
        
        //const gamesDB = await Videogame.findAll({ where: include: { model: Genre, attributes: ['name'], through: [] /*puede ser {attributes: []}*/ } })
        
        if (games) {
            const response = games.data.results
            response.length = 15
            res.status(200).json(response)
        }
    } catch (e) {
        res.status(400).send('Hubo un error al solicitar la información por query')
    }
})

router.get('/videogames/:id', async (req, res) => {
    const { id } = req.params

    try {
        const game = await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`)
        if (game) {
            const gameById = game.data
            res.status(200).json(gameById)
        }
    } catch (e) {
        res.status(400).send('Hubo un error al solicitar la información por params')
    }
})

router.get('/genres', async (req, res) => {
    try {
        const genres = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`)
        if (genres) {
            res.status(200).json(genres.data.results)
        }
    } catch (e) {
        res.status(404).send('Hubo un error en la consulta')
    }
})

router.post('/videogames', async (req, res) => {
    const { name, description, release, rating, platforms, genre } = req.body

    const newGame = await Videogame.create({ name, description, release, rating, platforms })

    const genreDB = await Genre.findAll({ where: { name: genre} })

    newGame.addGenre(genreDB)

    res.send('Tu juego ha sido creado con éxito')
})



module.exports = router;
