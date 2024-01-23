const express = require('express');
const app = express();
const pokemon = require('./models/pokemon');
const bodyParser = require('body-parser');

const jsxEngine = require('jsx-view-engine')

app.set('view engine', 'jsx');
app.engine('jsx', jsxEngine());

app.use(bodyParser.urlencoded({ extended: true }));


const port = 3000;


// Welcome route
app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon App!');
  });
  
  // Index route
  app.get('/pokemon', (req, res) => {
    res.render('Index', { pokemon });
  });
  
  // New route
  app.get('/pokemon/new', (req, res) => {
    res.render('New');
  });
  
  // Create route
  app.post('/pokemon', (req, res) => {
    const newPokemon = {
      name: req.body.name,
      img: req.body.img,
    };
    pokemon.push(newPokemon);
  
    // Redirect back to the index page
    res.redirect('/pokemon');
  });
  
  // Show route
  app.get('/pokemon/:id', (req, res) => {
    res.render('Show', { pokemon: pokemon[req.params.id] });
  });
  
  // Start the server
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });