var connection = require('../database/server.js');
 
function Login() {
  this.get = function(res) {
    connection.acquire(function(err, con) {
      con.query('select * from user', function(err, result) {
        con.release();
        res.send(result);
      });
    });
  };

}

module.exports = new Login();