const express = require('express');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 3000;
const APP_NAME = process.env.APP_NAME || 'API Web';
const APP_ENV = process.env.APP_ENV || 'desarrollo';

//RUTA PRINCIPAL
app.get('/',(req,res)=>{
    res.status(200).json({
        mensaje: 'Api funcionando',
        aplicacion: APP_NAME,
        entorno: APP_ENV
    });
});

//VERIFICAR ENTORNO
app.get('/api/entorno', (req, res)=>{
    res.status(200).json({
        aplicacion:APP_NAME,
        entorno: APP_ENV,
        puerto: PORT,
        descripcion: 'ruta para verificar el entorno',
    });
});

//simular proyecto
app.get('/api/proyecto', (req, res)=>{
    res.status(200).json({
        aplicacion: APP_NAME,
        modulo: 'Arquitectura web',
        tema: 'Control de inversiones y entornos',
        teclonologia: ['node.js', 'Express', 'Dotenv', 'Git', 'GitHub'],
    });
});

app.use((req, res)=>{
    res.status(404).json({
        mensaje:'Ruta no encontrada',
        ruta: req.originalUrl
    });
});

app.listen(PORT,()=>{
    console.log(`${APP_NAME} ejecutandose en http:localhost: ${PORT}`)
    console.log(`Entorno actual: ${APP_ENV}`);
});