import mongoose from '../db';

const schema = new mongoose.Schema({
  name: String
});

export default mongoose.model('User', schema);
