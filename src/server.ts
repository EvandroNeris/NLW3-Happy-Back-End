import express from 'express';

const app = express();


app.get('/users', (req, res) => {
  res.status(200).json({ message: 'teste' });
});

app.listen(3333);
