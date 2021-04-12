const express = require('express');
const router = express.Router();

const Comentarios = require("../models/comentario");
const Pessoa = require("../models/pessoa")

router.post("/", (req, res)=>{
    Pessoa.findOne({usuario: req.body.usuario})
    .then(
        user =>{
            if (user){
                const newComentario = Comentario({
                    usuario: req.body.usuario,
                    comentario: req.body.comentario
                })
                newComentario
                .save()
                //.then(u => res.redirect('/comentario'))
                //.catch(err => console.log(err));
                

                let comentarios = Comentarios.find({usuario: req.body.usuario})
                
                 res.render('comentarios',comentarios)        
            }else(res.send('Usuario sem comentarios'))
        }
    )
})



module.exports = router;