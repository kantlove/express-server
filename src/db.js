import mongoose from 'mongoose';

const url = "mongodb://cluster0-shard-00-00-jm1og.mongodb.net:27017,cluster0-shard-00-01-jm1og.mongodb.net:27017,cluster0-shard-00-02-jm1og.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin";

mongoose.Promise = global.Promise; // use ES6 native promise

const options = {
  user: 'minhthai',
  pass: '123',
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
