const express = require('express')
const app = express()
const port = 3000


const totalTime = function (req, res, next) {
  const start = new Date();
  const date = start.getFullYear() + '-' + (start.getMonth() + 1) + '-' + start.getDate();
  const time = start.getHours() + ":" + start.getMinutes() + ":" + start.getSeconds();
  const requestTime = date + ' ' + time;
  console.log(`requestTime:${requestTime}`, req.originalUrl, req.method);
  res.on("finish", () => {
    const end = new Date();
    const totalPass = end - start
    console.log(totalPass + 'ms')
  })
  next();
}


app.use(totalTime)

app.get('/', (req, res) => {
  res.send('列出全部 Todo')
})

app.get('/new', (req, res) => {
  res.send('新增 Todo 頁面')
})

app.get('/:id', (req, res) => {
  res.send('顯示一筆 Todo')
})

app.post('/', (req, res) => {
  res.send('新增一筆  Todo')
})

app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})