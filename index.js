const express = require('express')
const app = express()
const port = 3000
var cors = require('cors')

app.use(cors())

app.get('/', function (req, res) {
    res.send('Hello World')
  })
  
app.get('/sound/:name', (req, res) => {
    const { name } = req.params
    if(name == "dog"){
        res.json({'sound' : '멍멍'})
    }

    else if(name == "cat"){
        res.json({'sound' : '야옹'})
    }

    else if(name == "anil"){
        res.json({'sound' : '여보세요?'})
    }

    else {
        res.json({'sound' : '알 수 없음'})
    }
    
})

app.listen(port)