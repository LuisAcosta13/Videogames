const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();

require('dotenv').config();
const { API_KEY } = process.env;

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/videogames', (req, res) => {
    fetch(`https://api.rawg.io/api/games?key=${API_KEY}`)
    .then(data => data.json())
    .then(data => { console.log(data.results)
        const games = data.results.filter(g => g.id <= 100);
        res.send(games)
    })
    
})

router.get('/videogames/:name', (req, res) => {
    const { name } = req.params
    fetch(`https://api.rawg.io/api/games?key=${API_KEY}`)
    .then(data => data.json())
    .then(data => { console.log(data.results)
        const games = data.results.filter(g => g.name === name );
        res.send(games)
    })
})

router.get('/videogame/:id', (req, res) => {
    const { id } = req.params
    fetch(`https://api.rawg.io/api/games?key=${API_KEY}`)
    .then(data => data.json())
    .then(data => { console.log(data.results)
        const games = data.results.filter(g => g.id === id);
        res.send(games)
    })
})

module.exports = router;
