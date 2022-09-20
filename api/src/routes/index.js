const { Router } = require('express');
const axios = require('axios')
const { Videogame, Genre } = require('../db.js')
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
            var games
            if(!req.query.page){
                games = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`)
            } else {
                const { page } = req.query
                games = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=${page}`)
            }  
            const apiGames = games.data.results
            const gamesDB = Videogame.findAll({ include: { model: Genre, attributes: ['name'], through: {attributes: []}} })
            const allGames = apiGames.concat(gamesDB)

            if(allGames){
                res.status(202).json(allGames)
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
        
        //const gamesDB = Videogame.findAll({ where: include: { model: Genre, attributes: ['name'], through: [] /*puede ser {attributes: []}*/ } })
        
        //const allGames = apiGames.concat(gamesDB)

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

    const genreDB = Genre.findAll({ where: { name: genre} })

    newGame.addGenre(genreDB)

    res.send('Tu juego ha sido creado con éxito')
})



module.exports = router;
