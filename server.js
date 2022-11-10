const express = require('express')
const cors = require('cors')
const index = require('.//src/models/index')
const bodyparser = require('body-parser')
// const dotenv = require('dotenv')
// dotenv.config();
const app = express()
// app.options("*",cors())
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*"); // update to match 
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//     });
app.use(cors());

// app.use(express.static('client')); //serving client side from express
const corsOptions = {
    origin: true,
    methods: ['GET', 'PUT', 'POST', 'HEAD', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Accept', 'Origin', 'Access-Control-Allow-Origin'],
    credentials: true,
  }

//middleware
// app.use(cors(corsOptions))
app.use(express.json())


app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())

//routers
const apiRoutes = require('./src/routes/userRouter')
app.use('/api',apiRoutes)



const PORT = 7008


app.listen(PORT, () => {
    console.log(`Server is running port ${PORT}`)
  })