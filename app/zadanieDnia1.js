//Twój kod
const express = require('express');
const app = express();

const routes = [ '/vote/yes', '/vote/no', '/vote/maybe'];

let resultYes = 0;
let resultNo = 0;
let resultMaybe = 0;

app.use(express.static('./public/zadanieDnia'));

routes.forEach(route => {
    app.get(route,(req,res) => {
        if(route === routes[0]) {
            resultYes ++
        }
        else if(route === routes[1]) {
            resultNo ++
        }
        else if(route === routes[2]) {
            resultMaybe ++
        }
        res.send("Dziękujemy za głos")
    })
})

app.get('/votes/check', (req, res) => {
    res.send(`Wyniki ankiety:
    Głosów na YES: ${resultYes}
    Głosów na NO: ${resultNo}
    Głosów na Maybe: ${resultMaybe}
    `)
})

app.listen(3000, ()=> {
    console.log("Serwer działa na porcie 3000");
})