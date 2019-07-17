const mongoose = require('mongoose');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));

mongoose.connect('mongodb://127.0.0.1:27017/Cuda', {
    useNewUrlParser: true, 
    useCreateIndex: true, 
    useFindAndModify: false
})
.then(() => {
    console.log('Database connection works well');
})
.catch((error) => {
    console.log('FAIL : ' + error);
})