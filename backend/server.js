const cors = require('cors');

require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 5000;

// SETUP MONGO

const uri = process.env.MONGO_URL;
console.log(uri);

mongoose.connect(uri, {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true});
const connection = mongoose.connection;
connection.once('open' , ()=>{
  console.log("Opened connection with Database!!");
});


app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
  res.send("<h1>Hello!</h1>");
})

app.listen(port, ()=>{
  console.log(`listening on port ${port}`);
})