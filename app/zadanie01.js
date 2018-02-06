//Twój kod
const express = require('express');
const app = express();

app.get('/', (req, res ) => {
    res.send('Type in url aum and two numbers: ex. sum/2/5');
});

app.get('/sum/:number1/:number2', (req, res ) => {
    let x = Number(req.params.number1);
    let y = Number(req.params.number2);
    let sum = x + y;
    res.send(`Suma wynosi: ${sum}`);
});

app.listen(3000, () => {
    console.log("Server działa na 3000");
})