var express = require('express')
var mySqlDao = require('./dao/mysql')
var app = express()

app.use(express.static(__dirname + '/'));

app.get('/portal/init', (req, res) => {
  mySqlDao.query('select a.* from menu a', (vals) => {
    
    result(res, vals)
  })
})

app.listen(9999, () => {
  console.log('=== server started! ===')
})


function result(res, data){
  res.end(JSON.stringify({
    statusCode: 200,
    message: '操作成功',
    success: true,
    name: 200,
    data: data || {}
  }))
}




