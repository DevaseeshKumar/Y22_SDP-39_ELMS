// routes/employee.js

const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employeecontroller');

// Route for applying leave
router.post('/applyleave', employeeController.applyLeave);

// Route for deleting an employee
router.delete('/deleteemployee/:employeeId', employeeController.deleteEmployee);

module.exports = router;
