const express = require('express');
const app = express();

// Home route
app.get('/', (req, res) => {
    res.send('Home Page!');
});

// About route
app.get('/about', (req, res) => {
    res.send('About Page!');
});

// Dynamic product route
app.get('/products/:x', (req, res) => {
    console.log(req.params);
    res.send('ok');
});

// Simple GET route
app.get('/getData', (req, res) => {
    res.send('this is get data route');
});

// Movie data
const movie = [
    {
        name: 'avanger',
        rating: 8.5
    },
    {
        name: 'pushpa',
        rating: 9.5
    },
    {
        name: 'bahubali',
        rating: 9.7
    },
    {
        name: 'ironman',
        rating: 8.9
    }
];

// Get movie by query parameter
app.get('/getMovies', (req, res) => {
    console.log(req.query);

    const name = req.query.name;
    const data = movie.find(item => item.name === name);

    if (data) {
        res.json(data);
    } else {
        res.json({ message: 'movie not found' });
    }
});

app.get('/cat', (req,res) => {
    res.send("Meeoowe 1");
})

app.get('/cat', (req,res) => {
    res.send("Meeoowe 2");
})


// IN EXPRESS 4 VERSION :-

// app.get('*', (req,res)=>{
//     res.send("404 Page Not Found!");
// })


app.get(/.*/, (req,res)=>{
    res.send("404 Page Not Found!");
})


// Server start
app.listen(5000, () => {
    console.log('Server is running on http://localhost:5000');
});
