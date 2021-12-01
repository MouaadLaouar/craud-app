const express = require('express');
const app = express();
const mongoose = require('mongoose');
const UserModel = require('./models/User');
const cors = require('cors');
app.use(express.json());
app.use(cors());


mongoose.connect('mongodb+srv://mouaad:mouaad123@cluster0.mw6ck.mongodb.net/imed?retryWrites=true&w=majority').then((result) => console.log('connected to the data base'))

app.get('/user', (req, res) => {
    UserModel.find( (err, result) => {
        if(err) {
            res.json(err)
        } else {
            res.json(result)
        }
    })
});

const id = '61a61e1a2512c01449c23af6'

app.get('/oneuser', (req, res) => {
    UserModel.findById(id, (err, result) => {
        if(err) {
            res.json(err)
        } else {
            res.json(result)
        }
    })
})

app.post('/userpost', async (req, res) => {
    const user = req.body;
    const newuser = new UserModel(user);
    await newuser.save();

    res.json(user);

})



app.listen(process.env.PORT || 3001 , () => {
    console.log('working in port 3001');
});