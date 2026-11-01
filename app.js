
const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve the Travlr website files from the public folder.
app.use(express.static(path.join(__dirname, 'public')));

// Start the Express web server.
app.listen(PORT, () => {
  console.log(`Travlr website running at http://localhost:${PORT}`);
});
