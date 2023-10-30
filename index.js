require('dotenv').config();
require('./src/configs/db.config');
const express = require('express');
const app = express();
const usuariosRouter = require('./src/routes/usuarios.route')

app.use(express.json())
app.use('/usuarios', usuariosRouter)

const PORT = process.env.PORT;
app.listen(PORT, () =>{
    console.log("API en escucha en el puerto "+PORT)
})