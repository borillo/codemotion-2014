var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    res.render('login', { title: 'Express' });
});

router.post('/', function (req, res) {
    var username = req.body.username,
        password = req.body.password;

    if (username === 'admin' && password === '1234') {
        res.render('home', { title: 'Express' });
    }
    else {
        res.render('login', { title: 'Express' });
    }
});

module.exports = router;
