const express = require('express')

const port = 2000;
const app = express()
app.get('/', async (req, res) => {
    res.send('Welcome to my server , Waleed yaka')//
})

app.listen(port, () => console.log('Listning to Port', port))