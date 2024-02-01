const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    res.send("This is the data that is send by server to the client side.")
})

const port = 8000

app.listen(port, ()=>{
    console.log(`App is listening on port ${port}`);
})