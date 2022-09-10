const { Router } = require('express');
const axios = require('axios')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();


require('dotenv').config();
const { API_KEY } = process.env;

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/videogames', async(req, res, next) => {
    
    try{
        if(!req.query.name){
            const games = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`)
            if(games){
                res.status(200).json(games.data.results)
            }
        } else {
        next()
        }
    } catch(e){
    res.status(400).send('Hubo un error en la consulta')
    }   
})

router.get('/videogames', async(req, res) => {
    const { name } = req.query
    
    try{
        const games = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&search=${encodeURI(name)}`)
        if(games){
            const response = games.data.results
            response.length = 15 
            res.status(200).json(response)
        }
    } catch(e){
        res.status(400).send('Hubo un error al solicitar la información por query')
    }
})

router.get('/videogames/:id', async(req, res) => {
    const { id } = req.params
   
    try{
        const game = await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`)
        if(game){
            const gameById = game.data
            res.status(200).json(gameById)
        }
    } catch(e){
        res.status(400).send('Hubo un error al solicitar la información por params')
    }
})

router.get('/genres', async(req, res) => {
    try{
        const genres = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`)
        if(genres){
            res.status(200).json(genres.data.results)
        }
    } catch(e){
        res.status(404).send('Hubo un error en la consulta')
    }
})


// router.post('/videogames', async(req, res) => {

// })



module.exports = router;
