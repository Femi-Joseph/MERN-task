const express = require('express');
const notes = require('./data/notes');

const app = express();

const dotenv = require('dotenv');
const PORT = process.env.PORT || 5000;

dotenv.config();

app.get('/', (req, res) => {
  res.send('API is running');
});
app.get('/api/notes', (req, res) => res.json(notes));

app.get('/api/notes/:id', (req, res) => {
  const note = notes.find((n) => n._id === req.params.id);
  console.log(req.params);
  res.send(note);
});

app.listen(PORT, () => console.log(`Server started on PORT ${PORT} `));
