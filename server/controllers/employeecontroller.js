const Employee = require('../models/employee');

exports.applyLeave = async (req, res) => {
  try {
    const leaveData = req.body;
    const newLeaveApplication = new Employee(leaveData);
    await newLeaveApplication.save();
    res.status(201).json(newLeaveApplication);
  } catch (error) {
    console.error('Error applying leave:', error);
    res.status(500).json({ message: 'Error applying leave', error: error.toString() });
  }
};
