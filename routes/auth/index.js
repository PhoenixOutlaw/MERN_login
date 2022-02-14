const express = require('express')
require('dotenv').config()
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')
const userschema = require('../../models/userschema');
const route = express.Router();


route.post('/login',(req, res) =>{
    const re = req.body;
   userschema.find({email:re.email},async (err, data) =>{
     if(!data.length) res.send(false)
     else{
       if(await bcrypt.compare(re.password,data[0].password)){
         const token = jwt.sign({_id:data[0]._id},process.env.JWT_ACESS_TOKEN)
         res.send(token)
       }
       else res.send(false)
     }
   })
})

route.post('/verify',(req, res) =>{
  const re = req.body;
  jwt.verify(re.token,process.env.JWT_ACESS_TOKEN,(er,token)=>{
    if(er)res.send("forbidden")
    else {
      userschema.findById({_id:token._id},(error,data)=>{
        if(error)res.send(error)
        else res.send(true)
      })
    }
  })
})


module.exports = route;