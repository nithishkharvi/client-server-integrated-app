const express = require('express');
const path = require('path');
const homeRouter = require('./home'); // Import the new module

const app = express();
const port = process.env.PORT || 3000;

app.use('/home', homeRouter);

// Serve Angular files in production
if (process.env.NODE_ENV === 'production') {
    console.log('Running in production mode');
    app.use(express.static(path.join(__dirname, 'public')));

    // Catch-all route to serve the Angular app
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'public', 'index.html'));
    });
} else {
    console.log('Running in development mode');
    // Development setup: Proxy API requests to the Angular development server
    const { createProxyMiddleware } = require('http-proxy-middleware');

    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://localhost:4200', // Angular dev server
            changeOrigin: true,
        })
    );
}

// Define backend API routes
app.get('/api/healthcheck', (req, res) => {
    res.json({ status: 'Healthy' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
