import mongoose from 'mongoose';

const url = "mongodb://...";

mongoose.Promise = global.Promise; // use ES6 native promise

const options = {
  user: 'username',
  pass: 'password',
  server: { 
    reconnectTries: 5,
    socketOptions: { keepAlive: 120 }
  },
  replset: { keepAlive: 120 }
}

mongoose.connect(url, options, function(err, _) {
  if(err) {
    console.log(`Failed to connect to the database. ${err}`);
  }
  else {
    console.log('Successfully connect to the database');
  }
});

export default mongoose;