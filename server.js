const express=require('express');
const app=express();
const db=require('./db');
require('dotenv').config();



const bodyParser = require('body-parser');
app.use(bodyParser.json());

const PORT=process.env.PORT || 7070;

app.get('/',function(req,res){
    res.send('Do you want to retrieve the current weather')
})



const  MenuItemRoutes=require('./routes/menuItemRoutes');
app.use('/menu',MenuItemRoutes);

const personRoutes =require('./routes/personRoutes');
app.use('/person',personRoutes);



app.listen(7070, () => {
    console.log("✅ Server started on http://localhost:7070");
});


