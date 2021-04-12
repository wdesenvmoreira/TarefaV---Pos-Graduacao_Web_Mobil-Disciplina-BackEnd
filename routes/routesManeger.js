let express = require('express');
let router = express.Router();
const routerHome = require('./routerHome');
const routerComentario = require('./routerComentario');
const routerComentarios = require('./routerPostjs');
const auth = require('./auth')



const routeres = (app)=>{

    app.use('/', routerHome);
    app.use('/comentario', routerComentario);
    app.use('/postar', routerComentarios);
    app.get('*', (req, res)=>{
        res.render('404');
    })
    app.use("/auth", auth);
}

module.exports = routeres;