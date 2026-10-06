const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('<h1>🚀 Version 1.0 — Running on DeployStack AI!</h1>');
});

app.listen(port, () => console.log(`Server running on port ${port}`));
