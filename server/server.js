// server.js
import express from 'express';

const app = express();

app.use(express.json());

const allowedOrigin = 'http://localhost:5500';

// Preflight handler
app.options('/data', (req, res) => {
    res.set({
        'Access-Control-Allow-Origin': allowedOrigin,
        'Access-Control-Allow-Methods': 'GET, POST',
        'Access-Control-Allow-Headers': 'Content-Type, X-Demo'
    });
    res.sendStatus(204);
});

// Simple request (no preflight)
app.get('/data', (req, res) => {
    res.set('Access-Control-Allow-Origin', allowedOrigin);
    res.json({
        message: 'Simple GET – no preflight required'
    });
});

// Non-simple request (requires preflight)
app.post('/data', (req, res) => {
    res.set('Access-Control-Allow-Origin', allowedOrigin);
    res.json({
        received: req.body,
        message: 'POST accepted after preflight'
    });
});

app.listen(9000, () => {
    console.log('API running on http://localhost:9000');
});