let mysql = require('mysql')

let pool =  mysql.createPool({
  host : 'localhost',
  user : 'root',
  password: '123',
  database: 'jm',
  port: 3306,
  multipleStatements: true
});

function query(sql, cb){
  pool.getConnection((err, conn) => {
    if(err){
      console.log('err:', err.message)
    }else{
			conn.query(sql, (qerr, vals, fields) => {
				cb && cb(vals)
			})
    }
  })
}

function update(){}

function remove(){}

module.exports = {
  query,
  update,
  remove
}
