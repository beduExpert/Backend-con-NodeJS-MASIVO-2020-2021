const express = require('express');
const app = express();

app.get('/', (req, res) => res.json({ message: 'Welcome to express' }));

app.listen(3001, () => {
  console.log(`Express on port 3001`);
});