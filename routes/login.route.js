const express = require('express');
const app = express();
const loginRoutes = express.Router();
// Defined login route
loginRoutes.route('/').post(function (req, res) {
  console.log(req.body);
  if(req.body.userName === 'user' && req.body.password === '1234'){
        let loginResponse = {
          status: "OK",
          message: "Login successfully.",
          object: {
             userName: req.body.userName,
             token: "abcefg1234"
          }
        }
        res.status(200).json(loginResponse);
  }else{
    res.status(401).json({'login': 'Login failed'});
  }
});


module.exports = loginRoutes;