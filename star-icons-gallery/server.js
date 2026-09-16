const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static assets (CSS, images, icons)
app.use(express.static(path.join(__dirname, 'public')));

// API endpoint to list all available icon files
app.get('/api/icons', (req, res) => {
  const iconsDir = path.join(__dirname, 'public', 'icons');
  if (fs.existsSync(iconsDir)) {
    const files = fs.readdirSync(iconsDir).filter(f => f.endsWith('.png') || f.endsWith('.svg'));
    return res.json({ count: files.length, icons: files });
  }
  res.json({ count: 0, icons: [] });
});

// Serve the dedicated showcase gallery
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Star icons gallery running at: http://localhost:${PORT}`);
});
