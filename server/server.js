require('rootpath')();
var express = require('express');
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');
var expressJwt = require('express-jwt');
var config = require('config.json');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Daily Grind Server is alive!'));

// use JWT auth to secure the api, the token can be passed in the authorization header or querystring
app.use(expressJwt({
    secret: config.secret,
    getToken: function (req) {
        if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
            return req.headers.authorization.split(' ')[1];
        } else if (req.query && req.query.token) {
            return req.query.token;
        }
        return null;
    }
}).unless({ path: ['/users/authenticate', '/users/register', '/admins/authenticate', '/socket.io/'] }));

// routes
app.use('/users', require('./controllers/users.controller'));
app.use('/items', require('./controllers/items.controller'));
app.use('/orders', require('./controllers/orders.controller'));
app.use('/admins', require('./controllers/admins.controller'));
app.use('/locations', require('./controllers/locations.controller'));

// start server
var port = process.env.NODE_ENV === 'production' ? 80 : 4000;
var server = app.listen(port, function () {
    console.log('Server listening on port ' + port);
});

// socket connection
let socketIO = require('socket.io');
let io = socketIO.listen(server);

app.set('socketio', io);

io.on('connection', (socket) => {
    console.log('Admin connected');
});