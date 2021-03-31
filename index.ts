import express from 'express';
import path from 'path';

import allData from './data/all.json';
import creatureData from './data/creatures.json';
import oreData from './data/ore.json';
import powerData from './data/power.json';
import recipeData from './data/recipes.json';

const app = express();
const port = process.env.PORT || 3000;


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
})

app.get('/all', (req, res) => {

});

app.get('/creatures', (req, res) => {
    
});

app.get('/ore', (req, res) => {
    res.send(oreData);
});

app.get('/power', (req, res) => {
    res.send(powerData);
});

app.get('/recipes', (req, res) => {
    
});

app.listen(port, () => {
    console.log(`Running on http://localhost:${port}`);
})