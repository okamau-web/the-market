require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()

mongoose.connect( process.env.DATABASE_URL, {useNewUrlParser:true,useUnifiedTopology: true})
const db = mongoose.connection
db.on('error', (error)=> console.error(error))
db.once('open', ()=> console.log('connected to Mongo Database'))

app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.use(express.json())

const subscribersRouter = require('./routes/subscribers')
 app.use('/cart', subscribersRouter)

const productsRouter = require('./routes/products')
app.use('/products', productsRouter)

 app.listen(3000, ()=> console.log('server started'))
