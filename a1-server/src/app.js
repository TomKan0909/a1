import express from 'express';
import DB from './db.js';
import path from 'path';

const app = express();
const __dirname = path.resolve();
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.send('Test');
});

app.get('/punks', (req, res) => {
    res.send(JSON.stringify(DB))
})

app.get('/punks/:id', (req, res) => {
    const key = "punk" + req.params.id;
    console.log(DB["punk2890"]);
    if (key in DB) {
        res.send(JSON.stringify(DB[key]));
    } else {
        res.status(404).send('Unable to find requested resource');
    }
})
app.listen(5000, () => console.log('Yes'));
