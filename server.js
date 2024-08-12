const express = require('express')
const axios = require('axios');
const { default: axios } = require('axios');
const res = require('express/lib/response');
cepRegex = /^[0-9]{5}-?[09]{3}$/;
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/consulta-cep/:cep', async (req, res) =>{
    const cep = req.params.cep;

    try{
        const response = await axios.get (`https://viacep.com.br/ws/${cep}/json/`);
        res.json(response.data);
        
    } catch (error){
        console.error('Erro ao fazer requisição:'. error);
        res.status(500).send('Erro ao consultar CEP');
    }
});

app.get('/', (req, res) => {
    res.send('ABCDE');
});

app.listen(port, () => {
    console.log(`servidor rodando em http://localhost:${port}`);
});