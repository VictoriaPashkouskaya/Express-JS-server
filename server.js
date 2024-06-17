const express = require('express');
const app = express();
const puerto = 3000;

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(puerto, () => {
    console.log(`Servidor levantado en el puerto ${puerto}`);
});
