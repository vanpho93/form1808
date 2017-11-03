const express = require('express');
const parser = require('body-parser').json();
const app = express();
app.set('view engine', 'ejs');
app.set('views', './views');

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type,X-Requested-With');
    next();
});

app.post('/signin', parser, (req, res) => {
    console.log(req.body);
    res.send('OK')
});

app.listen(3000, () => console.log('Server started!'));
