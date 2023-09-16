const express = require('express')
const cors = require('cors')
require('dotenv').config()
const app = express()
const mongoose = require('mongoose')
const port = process.env.PORT || 5000;


// middleware
app.use(cors());
app.use(express.json());

// database connect

mongoose.connect(process.env.DATABASE)
.then(()=>{
   console.log('database connection is successful') 
})


// routes
// app.use('/api/v1/')


app.get('/',(req,res)=>{
    res.send('mongoose  server  is running')
    
})






app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });