import "babel-polyfill"; // enable Promise
import express from 'express';
import users from './users';


const app = express();

app.get('/', function(req, res) {
  console.log('Request received');
  res.send('Hello World!');
});

app.use('/users', users);

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});