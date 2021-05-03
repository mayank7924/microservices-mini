const express = require('express')
const {randomBytes} = require('crypto')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
app.use(bodyParser.json())
app.use(cors())

const posts = {}

app.get('/posts', (req, res) => {
    res.json(posts)
})

app.post('/post', (req, res) => {
    const id = randomBytes(4).toString('hex')
    const {title} = req.body
    posts[id] = {
        id,
        title
    }
    res.status(201).send({
        message: 'new post created'
    })
})

app.listen(4000, ()=>{
    console.log('posts service is up on port 4000')
})