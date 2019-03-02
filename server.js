let express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors');
    // mongoose = require('mongoose');

    const loginRoutes = require('./routes/login.route');
    const userRoutes = require('./routes/user.route');

    const app = express();
    app.use(bodyParser.json());
    app.use(cors());
    var port = process.env.PORT || 4000;

    app.get('/', function (req, res) {
        res.send('hello world')
    });

    app.use('/api/user/login', loginRoutes);
    app.use('/api/users', userRoutes);

    const server = app.listen(port, function(){
        console.log('Listening on port ' + port);
       });