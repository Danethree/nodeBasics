const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Welcome!')
})

app.get('/sobre',(req,res) => {
    res.send ('My about page')
})



app.listen(8081)