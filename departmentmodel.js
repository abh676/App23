const mongoose = require('mongoose');


const departmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  departmentHead: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User',  
    required: true
  },
  parentDepartment: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Department', 
    default: null
  },
  employees: [{
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User' 
  }],
 
  description: {
    type: String,
    default: ''
  },
  status: {
    type: String, 
    enum: ['active', 'inactive'], 
    default: 'active'
  }
});

module.exports = mongoose.model('Department', departmentSchema);
