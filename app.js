const express = require('express');
const app = express();
const morgan = require('morgan');
const {
    success,
    error
} = require('./assets/functions');
const members = [{
    id: 1,
    name: 'tham'
}, {
    id: 2,
    name: 'John'
}, {
    id: 3,
    name: 'Anass'
}];

app.use(morgan('dev'));

// http://localhost:8000/api/v1/members/2 => John
app.get('/api/v1/members/:id', (req, res) => res.send(success(members[req.params.id - 1])))

// http://localhost:8000/api/v1/members
// http://localhost:8000/api/v1/members?max=2
app.get('/api/v1/members', (req, res) => {
    if (req.query.max !== undefined && req.query.max > 0)
        res.send(success(members.slice(0, req.query.max)));
    else if (req.query.max !== undefined)
        res.send(error('error valeur max'));
    else res.send(success(members));
})

// http://localhost:8000/api
app.get('/api', (req, res) => res.send('Root API'));

// http://localhost:8000/api/v1
app.get('/api/v1', (req, res) => res.send('Voici la version 1'));

app.use((req, res, next) => console.log('URL : ' + req.url));

app.listen('8000', () => console.log('Démarré sur port 8000'));