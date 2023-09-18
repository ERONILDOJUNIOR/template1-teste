const express = require('express');
const app = express();

// Configure o middleware para servir arquivos estáticos (incluindo CSS)
app.use(express.static('public'));

// Resto do seu código...

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
  });

app.listen(8000, '127.0.0.1', () => {
  console.log('Servidor executando em http://127.0.0.1:8000/');
});




