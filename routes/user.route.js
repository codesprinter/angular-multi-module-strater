const express = require('express');
const app = express();
const userRoutes = express.Router();


// Defined user route
userRoutes.route('/').get(function (req, res) {
    res.send([
        { firstName:'Alex', 
          lastName: 'Garcia', 
          userName: 'alex',
          age: 38,
          sex: 'Male'
        },
        {
          firstName:'Brad', 
          lastName: 'Hunjala', 
          userName: 'brad',
          age: 38,
          sex: 'Male'
        }]);
});


module.exports = userRoutes;