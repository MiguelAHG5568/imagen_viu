const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())

app.get('/items', (req,res)=> {
    const data = { 

    }
})