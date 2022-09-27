const { Router } = require('express');
const axios = require('axios')
const { Videogame, Genre } = require('../db.js')
const { Op } = require('sequelize')
require('dotenv').config();
const { API_KEY } = process.env;
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/videogames', async (req, res) => {

    try {
        if (!req.query.name) {
            var games1 = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=${1}`)
            var games2 = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=${2}`)
            var games3 = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=${3}`)
            var games4 = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=${4}`)
            var games5 = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=${5}`)
            const gamesTotal = games1.data.results.concat(games2.data.results, games3.data.results, games4.data.results,games5.data.results)
            const gamesDB = await Videogame.findAll({ include: { model: Genre, attributes: ['name'], through: {attributes: []}} })
            const allGames = gamesTotal.concat(gamesDB)
            
            if(allGames){
                res.status(200).json(allGames)
            }
        } else {
            const { name } = req.query
            const games = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&search=${encodeURI(name)}`)
            const apiGames = games.data.results
            const gamesDB = await Videogame.findAll({ include: { model: Genre, attributes: ['name'], through: {attributes: []}} })
            const allGames = apiGames.concat(gamesDB)
    
            if (allGames) {
                allGames.length = 15
                res.status(200).json(allGames)
            }
        }
    } catch (e) {
        res.status(400).send('Hubo un error en la consulta')
    }
})

router.get('/videogames/:id', async (req, res) => {
    const { id } = req.params

    try {
        if (id.length < 10) {
            const game = await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`)
            const gameById = game.data
            res.status(200).json(gameById)
        } else {
            const gameDB = await Videogame.findByPk(id)
            res.json(gameDB)
        }
    } catch (e) {
        res.status(400).send('Hubo un error al solicitar la información por params')
    }
})

router.get('/genres', async (req, res) => {
    try {
        const genres = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`)
        var names = []
        genres.data.results.map(g => names.push(g.name))
        
        names.forEach(n => {Genre.findOrCreate({where:{name: n}})})

        const GenreDB = await Genre.findAll()
        res.status(200).send(GenreDB)
    } catch (e) {
        res.status(404).send('Hubo un error en la consulta')
    }
})

router.post('/videogames', async (req, res) => {
    
    try{
        const { name, description_raw, released, rating, platforms, genre } = req.body
        const newGame = await Videogame.create({ name, description_raw, released, rating, platforms, genre })
        const genreDB = await Genre.findAll({ where: { name: genre} })
    
        newGame.addGenre(genreDB)
        res.send('Tu juego ha sido creado con éxito')
    } catch(e){
        console.log('Hubo un inconveniente con la creción del videojuego')
        console.log(e)
    }
})



module.exports = router;
