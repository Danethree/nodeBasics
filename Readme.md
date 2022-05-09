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



2) Depois deve-se abrir o servidor. Neste exemplo vou usar a porta 8081:

```js

app.listen(8081)

````

**ATENÇÃO:**  O ``` app.listen ``` precisa ser chamado sempre por último na aplicação.



# Rotas com params

1) Estrutura:

    - A estrutura da rota é:  

    ```js
    
    '/algumacoisa/:nome/:idade' 
    
    ```
    Nesse exemplo acima, o nome e idade são **_params_** que são puxados 
    na requisição e são visualizados como resposta través de ```res.send() ```.
    
    - Exemplo do código:

```js 
           app.get('/ola/:cargo/:nome/:cor',function(req, res) 
           {

            res.send( `<h1> Olá, ${req.params.nome}</h1> <p> Voce eh ${req.params.cargo}
            e sua cor favorita eh ${req.params.cor} </p> 
            `)

           })

```

 Nesse exemplo de cima temos um ```req.send``` que envia os dados 
 de um html com os params sendo identificados por ```"req.params"```.
 Para acessar um params expecífico, como por exemplo, nome, indicamos 
 com um ```"."```após o ```req.params``` e o valor que deseja mostrar em tela, como por exemplo :

 ``` js 
    req.params.nome
 ``` 


  - Envio de arquivos 

  Para enviar um arquivo, ao invés de usar ```req.send``` use ```'req.sentFile'``` da seguinte forma:

  ```js 
  app.get('/', (req, res) => {
    res.sendFile(__dirname + '/htmlp/index.html')
})
````

```'__dirname'```: Diretório raiz onde o arquivo está localizado <br/> <br/>
````/htmlp/index.html````: Local onde se encontra o arquivo **_index.html_** recém criado. 



