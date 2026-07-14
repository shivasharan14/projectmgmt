const express = require('express')

const taskRoute= require('./route/taskroute')

const app = express();

const port= 3000

app.use(express.json())

app.use('/task', taskRoute);

app.get('/', (req, res) => {
    res.send('Hello World!');
});


app.listen(port, () => {
    console.log(`server running on port ${port}`)
})
