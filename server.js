const express = require('express')
const cors = require('cors')
const index = require('.//src/models/index')
const bodyparser = require('body-parser')
const dotenv = require("dotenv");
dotenv.config();
const app = express()

app.use(cors());

const corsOptions = {
    origin: true,
    methods: ['GET', 'PUT', 'POST', 'HEAD', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Accept', 'Origin', 'Access-Control-Allow-Origin'],
    credentials: true,
  }
app.use(express.json())

app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())

const apiRoutes = require('./src/routes/userRouter')
app.use('/api',apiRoutes)

const PORT = process.env.PORT || 7001

app.listen(PORT, () => {
    console.log(`Server is running port ${PORT}`)
  })