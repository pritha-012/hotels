const mongoose=require('mongoose');
//require('dotenv').config();
const mongoURL='mongodb://localhost:27017/hotels';
//const mongoURL=process.env.MONGODB_URL_LOCAL;
//const mongoURL=process.env.MONGODB_URL;

mongoose.connect(mongoURL, {
    useNewUrlParser:true,
    useUnifiedTopology:true
})
const db=mongoose.connection;
db.on('connected', () => {
    console.log('connected to mongo db server');
});
db.on('error', (err) => {
    console.log('mongodb connection error',err);
});
db.on('disconnected', () => {
    console.log('disconnected to mongo db server');
});
module.exports=db;

