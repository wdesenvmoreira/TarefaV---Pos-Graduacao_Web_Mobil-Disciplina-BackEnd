let express = require('express');
let router = express.Router();


   router.get('/', (req, res)=>{
       res.render('comentarios');
   });
   router.post('/', (req, res)=>{
    res.render('comentarios');
});



module.exports = router;