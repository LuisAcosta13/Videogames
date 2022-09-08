const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();

require('dotenv').config();
const { API_KEY } = process.env;

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/videogames', async(req, res) => {
    await fetch(`https://api.rawg.io/api/games?key=${API_KEY}`)
    .then(res => res.json())
    .then(json => {
        const games = json.results.filter(g => g.id <= 100);
    })

    try{  
        res.status(200).json(games)
        
    } catch(e){
    res.status(400).send('Los juegos no fueron encontrados')
    }   
})

router.get('/videogames/:name', (req, res) => {
    const { name } = req.params
    try{
        fetch(`https://api.rawg.io/api/games?key=${API_KEY}`)
        .then(data => data.json())
        .then(data => { console.log(data.results)
        const games = data.results.filter(g => g.name === name );
        res.status(200).json(games)
    })
} catch(e){
    res.status(400).send('Juego no encontrado')
}
})

router.get('/videogame/:id', async(req, res) => {
    const { id } = req.params
    await fetch(`https://api.rawg.io/api/games?key=${API_KEY}/${id}`)
    .then(res => res.json())
    .then(json => {
        const game = json
    })
    try{
        res.status(200).json(game)
    } catch(e){
        res.status(400).send('Juego no encontrado')
    }
    
})

module.exports = router;
