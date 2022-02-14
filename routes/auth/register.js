const express = require('express')
require('dotenv').config()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const route = express.Router();
const mongoose = require('mongoose')
const user = require('../../models/userschema')

route.post('/',async (req, res) => {
    const re = req.body;
    const hashpass = await bcrypt.hash(re.password,10)
    user.find({email:re.email},(error,e) => {
        if (!e.length) {
          user.create({password:hashpass,email:re.email},(error,data) => {
                if (error) res.send(error)
                else{
                    const token = jwt.sign({_id:data._id},process.env.JWT_ACESS_TOKEN)
                    res.send(token)
                }
            })            
        }
        else res.send("failure")
    })
    
})
route.post('/verify',async (req, res) => {
    const re = req.body;
    res.send(await bcrypt.compare(re.password,"$2b$10$MZasxF40iQYsxGfV2PbE2OniixahsiM077Mjg91flaGvc2yLKD9a"))

})


module.exports = route;