var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var foorSchema = new Schema({
  name:{
    type: String,
    required: true
  },
  footDes: {
    type: String,
    default: ''
  },
  createdDate: {
    type: Date,
    default: Date.now
  },
  status: {
    type:[{
      type: String,
      enum: ['available', 'unavailable']
    }],
    default: ['available']
  }
});

foorSchema.path('name').set((input) => {
  return input[0].toUpperCase() + input.slice(1);
});

module.exports = mongoose.model('Food', foorSchema)