import "babel-polyfill"; // enable Promise
import express from 'express';
import bodyParser from 'body-parser';
import users from './users';

const app = express();

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get('/', function(req, res) {
  console.log('Request received');
  res.send('Hello World!');
});

app.use('/users', users);

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});
