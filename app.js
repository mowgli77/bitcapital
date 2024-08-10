const express = require('express');
const config = require('config');
const path = require('path');

const app = express();

app.use(express.json({ extended: true }));

if (process.env.NODE_ENV === 'production') {
    app.use('/', express.static(path.join(__dirname, 'client', 'build')));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    });
}

const PORT = config.get('port') || 4000

async function start() {
    try {
        app.listen(PORT, () => console.log(`Server has been started on port ${PORT}`));
    } catch (e) {
        console.log('Server error', e.message);
        process.exit(1);
    }
}

start();
