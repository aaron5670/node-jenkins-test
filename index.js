//importing node framework
const express = require('express');
const app = express();

//Respond with "hello world" for requests that hit our root "/"
app.get('/', function (req, res) {
    res.send('hello world');
});

console.log('test jenkins 3')

//listen to port 3000 by default
app.listen(process.env.PORT || 3000,() => {
        console.log(`Server started on port 3000`);
});

module.exports = app;
