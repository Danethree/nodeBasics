const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Welcome!')
})

app.get('/sobre',(req,res) => {
    res.send ('My about page')
})

app.get('/ola/:cargo/:nome/:cor',function(req, res) {

    res.send( `<h1> Olá, ${req.params.nome}</h1> <p> Voce eh ${req.params.cargo}
    e sua cor favorita eh ${req.params.cor} </p> 
    `)

})


app.listen(8081)