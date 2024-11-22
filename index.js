const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
app.use(cors())

app.get('/', (req, res) => {
  res.send('hello world');
})
app.get('/cat', (req, res) => {
  res.send({'sound': '냐옴'});
})
app.get('/dog', (req, res) => {
  res.send({'sound': '멍멍'});
})
app.get('/sound/:name', (req, res) => {
  const { name } = req.params;
  if (name === "dog") {
    res.json({'sound':'멍멍'})
  }
  if (name === "cat") {
    res.json({'sound': '냐옹'})
  }
  if (name === "pig") {
    res.json({'sound': '꿀꿀'})
  } else {
    res.json({'sound': '알 수 없음'})
  }

  console.log(name);
})
app.get('/user/:id', (req, res) => {
  // const q = req.params;
  // console.log(q.id)
  const q = req.query
  console.log(q.q)
  console.log(q.name)
  console.log(q.age)
  res.send({'user_id': q.id});
})
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});