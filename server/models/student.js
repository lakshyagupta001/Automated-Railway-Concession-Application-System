
const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  erp_no: {
    type: Number,
    required: true,
    unique: true
  },
  Password: {
    type: Number,
    required: true
  },
  dob: {
    type: Date,
    
  },
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Other'],
    
  },
  fees_status: {
    type: String,
    enum: ['paid', 'pending','half'],
    default: 'Pending'
  },
  academic_status: {
    type: String,
    enum: ['Eligible', 'Dropout'],
    default: 'Eligible'
  },
  form: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'form'
  },
  archiveForms: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'archive'
  }],
  phone_no: {
    type:String
  },
  email: {
    type: String
  },
  address: {
    type: String
  },
  college_year: {
    type: String,
    enum: ['FE', 'SE', 'TE', 'BE'],
    
  },
  class: {
    type: String,
    enum: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
    
  },
  rollNo: {
    type: String
  },
  aadhar_card_no: {
    type: String,
   
  }
});

// Create the Student model
const student = mongoose.model('Student', studentSchema);

// Export the Student model
module.exports = student;
