import express from 'express';
import UserModel from './models/user';

let router = express.Router();
export default router;

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

// define the home page route
router.get('/', function(req, res) {
  const query = UserModel.find({});
  query.exec(function(err, users) {
    if(err) res.sendStatus(500);
    res.send(users);
  });
});
