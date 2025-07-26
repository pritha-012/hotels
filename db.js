const mongoose=require('mongoose');
require('dotenv').config();
//const mongoURL='mongodb://localhost:27017/hotels';
//const mongoURL=process.env.MONGODB_URL_LOCAL;



console.log('MongoDB URL:', process.env.MONGODB_URL);


//const mongoURL= 'mongodb+srv://prithadas976:XqNpyIsCO2RgUjBN@cluster0.dmpunww.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
const mongoURL=process.env.MONGODB_URL;


mongoose.set('debug', true);


mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
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

