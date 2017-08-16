import express from 'express';
import UserModel from './models/user';

let router = express.Router();
export default router;

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

router.get('/', function(req, res) {
  const name = req.query.name;
  let query = {};
  if(name) query = { name: name }

  UserModel.find(query).exec()
    .then(function(users) {
      res.send(users);
    })
    .catch(function(err) {
      console.log(`Failed to list users. ${err}`);
      res.sendStatus(500);
    });
});

router.post('/', function(req, res) {
  const user_name = req.body.name;

  UserModel.create({ name: user_name })
    .then(function() {
      console.log(`Create user ${user_name}`);
      res.sendStatus(200);
    })
    .catch(function(err) {
      console.log(`Failed to create user ${user_name}. ${err}`);
      res.sendStatus(500);
    });
});
