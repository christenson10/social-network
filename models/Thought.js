const { Schema, model } = require('mongoose');

const thoughtSchema = new Schema({
  thoughtName: {
    type: String
  },
  createdBy: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  size: {
    type: String,
    default: 'Large'
  },
  toppings: []
});

const Thought = model('Thought', ThoughtSchema);

module.exports = Thoughts;