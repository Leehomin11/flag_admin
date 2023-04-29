const express = require('express')
var cors = require('cors')
const app = express()
const port = 4000

app.use(cors())

app.get('/', (req, res) => {
    res.json('Hello World!')
})

app.get('/admin', (req, res) => {
    res.json('MXG{YOU_ARE_DIE}')
})

app.get('/f', (req, res) => {
    res.json('fuck you man!')
})

app.get('/user/:id', (req, res) => {
    const { id } = req.params

    if(id == 'GUCCUDAS'){
        res.json('MXG{Y0U_4RE_GUCCUD4S_4DM1N}')
    }
    else if(id == 'admin'){
        res.json('Welcome admin!')
    }
    else if(id != 'GUCCUDAS'){
        res.json({'USER id':id})
    }


})
app.get('/flag', (req, res) => {
    res.json('Bad GATE 404')
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
