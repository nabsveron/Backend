const express = require('express');
const app = express();
const PORT = 5000;

app.get('/', (req, res) => {
    res.send('Welcome to my backend server');
});


// Http methods GET, POST, PUT, DELETE, PATCH
app.get('/about', (req,res) => {
    res.send('This is my about page')
});

app.get('/contact', (req,res) => {
    res.send('This is my contact page')
});


//Route parameters

app.get('/users/:id', (req, res) => {
    const userid = req.params.id;
    res.send('User ID is: ' + userid);
} )

//Query parameters
app.get('/search', (req,res) => {
    const query = req.query.q;
    res.send('You searched for: ' + query) 
})

//JSON response 
app.get('/products', (req,res) => {
    const products = [
        {id: 1, name: 'product 1', price: 100 },
        {id: 2, name: 'product 2', price: 200 },
        {id: 3, name: 'product 3', price: 300 }
    ];
    res.json(products)
})




app.listen(PORT, () =>{
    console.log("server is running on port " + PORT);
})


