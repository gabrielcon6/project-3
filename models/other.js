const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const otherSchema = new Schema({
  type: { type: String },
  title: { type: String },
  startDate: { type: Date },
  endDate: { type: Date },
  description: { type: String },
  creator: { type: mongoose.Types.ObjectId, required: true, ref: 'User' }
},
{
  timestamps: true
});

module.exports = mongoose.model('Other', otherSchema);