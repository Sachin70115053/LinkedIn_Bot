const mongoose = require('mongoose')

const connectDatabase = async ()=> {
    
    await mongoose.connect('mongodb://localhost:27017/EvyAi')
.then(()=>{
    console.log("Connected to mongodb")
})
.catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});

}

module.exports = connectDatabase;
