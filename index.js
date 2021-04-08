const express = require('express');
const app = express();

const mongoose = require('mongoose');
const db_acess = require('./setup/bd').mongoURL;
console.log('db_acess: ', db_acess);

// const conectar = async () =>{
//     await mongoose.connect(db_acess, {useNewUrlParser: true, useUnifiedTopology: true })

// return mongoose.connection;
// }
// conectar().then(()=> console.log('Conexão à base de dados realizada com sucesso. '))
// .catch(err => console.log('Erro de conexão: ',err));

 mongoose
 .connect(db_acess, {useNewUrlParser: true, useUnifiedTopology: true })
 .then(()=> console.log('Conexão à base de dados realizada com sucesso. '))
 .catch(err => console.log('Erro de conexão: ',err));

//mongoose.connect(db_acess,{useNewUrlParser: true, useUnifiedTopology: true });
 //mongoose.connection;

 
const bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());

const auth = require('./routes/auth');
app.use("/auth", auth);

const port = 3030;

app.listen(port, () =>{ console.log(`Executando na porta ${port}`)});