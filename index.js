const express = require('express');
const app = express();
const PORT = 5000;

app.get('/', (req, res) => {
    res.send('Welcome to my backend server');
});
app.listen(PORT, () =>{
    console.log("server is running on port " + PORT);
})
