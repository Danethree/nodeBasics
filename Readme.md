# Básico do Node JS


1) Estrutura:

- Primeiro deve-se criar a rota da aplicação.

Exemplo: 

```js
//http://localhost8081/

app.get('/', (req, res) => {
    res.send('Welcome!')
})

// http://localhost8081/sobre

app.get('/sobre',(req,res) => {
    res.send ('My about page')
})

````



- Depois deve-se abrir o servidor. Neste exemplo vou usar a porta 8081:

```js

app.listen(8081)

````



