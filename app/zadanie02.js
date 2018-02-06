//Twój kod
const express = require('express');
const app = express();
let nameValue = "";

app.get('/', (req, res) => {
    res.send("Podaj lub sprawdź imię: /name/set/imię, name/show, name/check");
});

app.get('/name/set/:name', (req, res) => {
    nameValue = req.params.name;
    res.send("Imię zapisane.");
})
app.get('/name/show', (req, res) => {
    res.send(`Ustawione imię to: ${nameValue}`);
})
app.get('/name/check', (req, res) => {
    if (nameValue !=="") {
        res.send("Imię wczesniej zostało zapisane!");
    }
    else {
        res.send("Imię jeszcze nie zostało podane.");
    }
})

app.listen(3000, () => {
    console.log("Serwer uruchomiony na porcie 3000");
});