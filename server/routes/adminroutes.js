const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admincontroller'); // Update the path to the controller

router.post('/addemployee', adminController.addEmployee);
router.delete('/deleteemployee/:id', adminController.deleteEmployee); // Add this line

module.exports = router;
