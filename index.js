// implement your API here
const express = require('express');
const Users = require('./data/db.js')
const server = express();

//middleware to teach express to read JSON
server.use(express.json())


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
    const id = req.params.id
    Users.findById(id)
        .then(user => {
            res.status(200).json({user})
        })
        .catch(err=>{
            console.log('get user error',err)
            res.status(500).json({errorMessage: 'so sorry! there was an error getting user'})
        })
});

//POST a new user
server.post('/api/users', (req, res)=>{
    const userData = req.body;
    Users.insert(userData)
        .then(user=>{
            res.status(201).json(user);
        })
        .catch(err=>{
            console.log('post error',err)
            res.status(500).json({errorMessage: 'so sorry! unable to create user'})
        })
})

//DELETE a user
server.delete(`/api/users/:id`, (req, res)=>{
    const id = req.params.id
    Users.remove(id)
        .then(user=>{
            res.status(201).json(user)
        })
        .catch(err=>{
            console.log('delete error',err)
            res.status(500).json({errorMessage: 'so sorry! unable to delete user'})
        })
})

const port = 8000;
server.listen(port, ()=>console.log(`\n ** api on port: ${port} ** \n`));