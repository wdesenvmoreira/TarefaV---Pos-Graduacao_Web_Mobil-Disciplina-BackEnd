const express = require('express');
const router = express.Router();
const Pessoa = require("../models/pessoa");

router.get("/", (req, res)=>{

   
}) 
router.post("/logar", (req, res)=>{
    console.log('Acessou!', req.body.usuario);
    Pessoa.findOne({usuario: req.body.usuario})
    .then(
        user =>{
            if (user){
                return res.status(400).json({usuarioError: "Usuario já existe no sistema"});
            }else{console.log('usuario inexistente. ');
                // Usuario não existe, Cadastrar. 
                const newUsuario = Pessoa({
                    usuario: req.body.usuario,
                    senha: req.body.senha
                })

            newUsuario
            .save()
            .then(u => res.json(u))
            .catch(err => console.log(err));
            }
        }
    )
    .catch(err =>console.log(err));
   
}) 
module.exports = router;