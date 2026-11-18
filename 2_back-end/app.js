import express from 'express';
// ZAINSTALOWAĆ CORS!!!!
// npm i cors
import cors from 'cors';

const app = express();
const port = 3000;

// uywamy cors do odblokowania dostępu (całego w tym przykładzie)
app.use(cors());

const users = [
  {id: 1, login: 'jkowalski', pass: '', admin: true},
  {id: 2, login: 'anowak', pass: '', admin: false},
]

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/api/users', (req, res) => {
  res.json(users);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});