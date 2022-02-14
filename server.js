const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config()

//<%--
// .env file should we made for token and connection
//JWT_ACESS_TOKEN = <token>
//MONGO_CONNECTION = <mongo_url>
//--%>

mongoose.connect(process.env.MONGO_CONNECTION,(error,db) => {
    if (error) {console.log('unable to connect to Mongo')}
    else {console.log('connection established')}
})

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors())
app.use('/api/auth', require("./routes/auth"))
app.use('/api/register', require("./routes/auth/register"))

if(process.env.NODE_ENV==='production'){
    const path = require('path');
    app.get('/',(req, res)=>{
        app.use(express.static(path.resolve(__dirname,'frontend','build')))
        res.sendFile(path.resolve(__dirname,'frontend','build','index.html'))
    })
}

app.listen(port,() => console.log("listening on port " + port));