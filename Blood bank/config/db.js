const mongoose = require('mongoose')

const connectDB = async() =>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log(`Connected to mongodb database ${mongoose.connection.host}`)
    } catch (error) {
        console.log(`Mongodb error ${error}`)
    }
}

module.exports = connectDB;