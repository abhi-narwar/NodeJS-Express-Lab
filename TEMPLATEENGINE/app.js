const express = require('express');
const path = require('path');

const app = express();
const PORT = 4000;

// set view engine
app.set('view engine', 'ejs');

// ROUTES 

// Home route
app.get('/', (req, res) => {
    res.send(`
        <h1>Welcome to the Home Page</h1>
        <p>This is the home page of our Express application.</p>
    `);
});

// About route
app.get('/about', (req, res) => {
    res.send(`
        <h1>About Page</h1>
        <p>This is the about page of our Express application.</p>
    `);
});

// Send HTML file
const filePath = path.join(__dirname, 'index.html');

app.get('/abc', (req, res) => {
    res.sendFile(filePath);
});

// Render EJS pages
app.get('/products', (req, res) => {
    res.render('hello');
});

app.get('/payment', (req, res) => {
    res.render('payment');
});

// Todos route
const todos = ['game', 'coding', 'dance'];

app.get('/todos', (req, res) => {
    res.render('todos', { todos });
});

// SERVER 
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
