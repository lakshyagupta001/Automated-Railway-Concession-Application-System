// Import required modules
const mongoose = require('mongoose');

// Define the Archive Schema
const archiveSchema =  mongoose.Schema({
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
    ref: 'Student',
    required: true
  },
  approvalDate: {
    type: Date,
    required: true,
    default: Date.now
  },

});

const archive = mongoose.model('archive', archiveSchema);

module.exports = archive;
