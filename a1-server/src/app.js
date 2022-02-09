import express from 'express';
import DB from './db.js';
import path from 'path';

const app = express();
const __dirname = path.resolve();
app.use(express.static(__dirname + '/public'));
const PORT = 5000;

app.get('/', (req, res) => {
    res.send('Test');
});

app.get('/punks', (req, res) => {
    const protocol = req.protocol;
    const host = req.hostname;
    const url = req.originalUrl;
    const port = PORT;
    DB.forEach((obj) =>{
        if (!obj["img"].startsWith(`${protocol}://${host}:${port}`)){
            obj["img"] = `${protocol}://${host}:${port}` + obj["img"]
        }
        console.log(obj["img"]);
    })

    // for (let obj in DB){
    //     console.log(obj);
    //     // obj["img"] = `${protocol}://${host}:${port}` + obj["img"]
    //     console.log(obj["img"]);
    // }    


    const fullUrl = `${protocol}://${host}:${port}${url}`
    // console.log(fullUrl);
    // console.log(req.path);
    res.send(JSON.stringify(DB))
})

app.get('/punks/:id', (req, res) => {
    const key = "CryptoPunk #" + req.params.id;
    const punk = DB.find((item) => item.title == key);
    if (punk){
        res.send(JSON.stringify(punk));
    } else {
        res.status(404).send('Unable to find requested resource');       
    }

})
app.listen(PORT, () => console.log('Yes'));
