import app from './app.js';


const port: number = 8080;


const server = app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

// Error handling for server setup
server.on('error', (err) => {
  console.error('Server error:', err);
});

