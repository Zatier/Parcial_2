const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose');
const app = express()
const port = 5000

// middleware
app.use(express.json());

//Get request
app.get('/', (req, res) => res.send('You are on the homepage'))

//Post
app.post('/post', async function(req, res){
    const task = new Task(req.body);
    await task.save();
    res.redirect('/');
});


//Delete
app.delete('/delete', function(req, res){
    console.log(request.body);    //Json object
    response.send(request.body);   <h1>Delete:true</h1>
  });

//Put
app.put('/put/:id', function(req, res){
    console.log(request.body);    //Json object
    response.send(request.body);   //Echo
  });

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))