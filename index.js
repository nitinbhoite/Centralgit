const express = require('express')
const app = express()
const port = process.env.PORT || 3000 ;
const config = require('config')
console.log(config);



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
