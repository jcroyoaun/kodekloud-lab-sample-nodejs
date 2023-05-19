const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send(`
        <body style="background-color: #0000FF;">
            <h1>Congrats! you completed the lab</h1>
        </body>
    `)
})

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})
