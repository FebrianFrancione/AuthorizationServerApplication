const mongoose = require('mongoose')

const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        })

        console.log(`MongoDB Conected: ${conn.connection.host}`)
    } catch (err){
        console.error(err)
        process.exit(1)
    }
}
//mongoDb config
module.exports = connectDB