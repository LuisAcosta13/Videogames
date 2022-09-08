const { Router } = require('express');
const axios = require('axios')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();


require('dotenv').config();
const { API_KEY } = process.env;

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/videogames', async(req, res) => {
    
    try{
        const games = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`)
        if(games){
            res.status(200).json(games.data.results)
        } else {
            res.send('Los juegos no peden mostrarse')
        }
    } catch(e){
    res.status(400).send('Hubo un error en la consulta')
    }   
})

router.get('/genres', async(req, res) => {
    try{
        const genres = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`)
        if(genres){
            res.status(200).json(genres.data.results)
        } else {
            res.send('No existen los géneros')
        }
    } catch(e){
        res.status(404).send('Hubo un error en la consulta')
    }
})

router.get('/videogames/:id', async(req, res) => {
    const { id } = req.params
   
    try{
        const game = await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`)
        if(game){
            const gameById = game.data
            res.status(200).json(gameById)
        } else {
            res.send('El juego no existe')
        }
    } catch(e){
        res.status(400).send('Hubo un error al solicitar la información por params')
    }
})

router.get('/search', async(req, res) => {
    const { game } = req.query
    
    try{
        const games = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&search=${game}`)
        if(games){
            const gameByName = games.data.results
            //const gameByName = games.data.results.filter(g => g.name.toLowerCase().includes(name))
            res.status(200).json(gameByName)
        } else {
            res.send('No existe ninguna coincidencia')
        }
    } catch(e){
        res.status(400).send('Hubo un error al solicitar la información por query')
    }
})



module.exports = router;
