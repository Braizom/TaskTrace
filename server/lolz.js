const express = require('express');
const app = express();
const port = 8081;

// Respond to requests to the homepage
app.get('/', (req, res) => {
    console.log('Request Object:', req);
    console.log('Response Object:', res);
    // Your code goes here
    res.send('Hello World!');
});

// Handle other paths with a 404 Not Found response
app.use((req, res) => {
    res.status(404).send('404 Not Found');
});

// Start the server
app.listen(port, () => {
    console.log(`Express app listening at http://localhost:${port}`);
});
