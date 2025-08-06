const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

// Middleware (optional, but good practice)
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
