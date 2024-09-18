
const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
  destination: {
    type: String,
    required: true
  },
  className: {
    type: String,
    enum: ['First', 'Second'],
    required: true
  },
  duration: {
    type: String,
    enum: ['Monthly', 'Quarterly'],
    required: true
  },
  line: {
    type: String,
    enum: ['Harbour', 'Western', 'Central'],
    required: true
  },
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student'
  }
});




module.exports = mongoose.model('Form', formSchema);
