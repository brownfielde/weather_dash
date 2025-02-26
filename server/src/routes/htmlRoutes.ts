import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { Router } from 'express';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const router = Router();

// TODO: Define route to serve index.html
app.get('/api/index.html', (req,res) => {
    res.send('GET request to dashboard');
});

app.post('/api/index.html', (req, res) => {
    res.send('POST request to dashboard')
});

export default router;
