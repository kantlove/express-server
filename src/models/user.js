import mongoose from '../db';

const schema = new mongoose.Schema({
  name: String
});

schema.index({ name: 'text' });

export default mongoose.model('User', schema);
