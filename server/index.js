import 'dotenv/config'
import express from 'express'
const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.listen(port, (err) => {
  if (err) console.log("!!!ERROR:", err)
  console.log(`Example app listening on port ${port}`)
})