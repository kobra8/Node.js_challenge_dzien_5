const express = require('express');
const app = express();

// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });

app.use(express.static('./public/przykladStatyczne'))

app.get('/contact', (req, res) => {
    res.send("Zapraszm do kontaktu: kobra@zlasu.pl");
});

app.get('/manual/route', (req, res) => {
    res.send('To jest odpowiedź zwrócona nie z pliku, a z manualnie ustalonej ścieżki.');
});

app.get('/hello/:myname', (req,res ) => {
    const name = req.params.myname;
    res.send(`Witaj, ${name}`);
})

app.listen(3000, () => {
    console.log('Serwer działa na porcie 3000');
});
