const express = require('express')
const dotenv = require('dotenv')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
const connectDB = require('./config/db')
dotenv.config()

connectDB();

const PORT = process.env.PORT || 8080;
app.use(express.json())
app.use(cors())
app.use(morgan('dev'));

app.use('/api/v1/test',require('./routes/testRoutes'));
app.use('/api/v1/auth',require('./routes/authRoutes'));
app.use('/api/v1/inventory',require('./routes/inventoryRoutes'));
app.use("/api/v1/analytics", require("./routes/analyticsRoutes"));
app.use("/api/v1/admin", require("./routes/adminRoutes"));

app.listen(PORT,()=>{
    console.log(`Node Sever Running in ${process.env.DEV_MODE} mode on port ${process.env.PORT}`)
})