// implement your API here
const express = require('express');
const Users = require('./data/db.js')
const server = express();

//routes to endpoint

//GET all users
server.get('/api/users', function(req, res){
    Users.find()
        .then(usersData =>{
            res.status(200).json({usersData})
        })
        .catch(err=>{
            console.log('get users error',err)
            res.status(500).json({errorMessage: 'so sorry! there was an error'})
        })
});

// GET user by id
server.get('/api/users/:id', function(req, res){

})

const port = 8000;
server.listen(port, ()=>console.log(`\n ** api on port: ${port} ** \n`));