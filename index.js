const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
app.use(bodyParser.urlencoded({extended: true}), express.static('public'));

const FILMS = JSON.parse(fs.readFileSync('top250.json'));

app.get('/', (req, res) =>
{
    res.send('Hello world');
});

app.get('/api/films/readall', (req, res)=>
{
    res.contentType('application/json');
    FILMS.sort((a, b) => a.position > b.position ? 1: -1);
    res.send(JSON.stringify(FILMS));
});

app.get('/api/films/read', (req, res)=>
{
    res.contentType('application/json');
    let film = FILMS.filter((film) => Number(req.query.id) === film.id);
    console.log(film);
    console.log(req.query.id)
    res.send(film ?  JSON.stringify(film[0]) : 'not correct params');
});

app.post('/api/films/create', (req, res)=>
{

});

app.post('/api/films/update', (req, res)=>
{

});

app.post('/api/films/delete', (req, res)=>
{

});

/*
 "id": int / string
 "title": string
 "rating": string // оценка
 "year": int // год выпуска
 "budget": int // бюджет
 "gross": int // сборы
 "poster": string // url постера
 "position": int // позиция в рейтинге
* */


app.listen(3000, ()=>
{
    console.log('Example app listening on port 3000!');
});