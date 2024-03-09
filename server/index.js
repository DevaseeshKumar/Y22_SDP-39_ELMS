const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose'); // Import mongoose module
const app = express();
const PORT = process.env.PORT || 5000;
const path = require('path');
const db = require('./config/db');
const AdminModel = require('./models/admin'); // Import AdminModel
const EmployeeModel = require('./models/employee'); // Import EmployeeModel

app.use(express.json());
app.use(cors());

// Endpoint to handle POST requests for applying leave
app.post('/applyleave', (req, res) => {
  // Validate request body
  const { ID, name, department, mobilenumber, mail, leaveStartDate, leaveEndDate, reasonForLeave } = req.body;
  if (!ID || !name || !department || !mobilenumber || !mail || !leaveStartDate || !leaveEndDate || !reasonForLeave) {
    return res.status(400).json({ error: "All fields are required" });
  }

  // Attempt to insert data into the database
  EmployeeModel.create(req.body) // Using EmployeeModel to apply leave
    .then(result => {
      console.log("Leave Applied Successfully");
      res.json({ message: "Leave Applied Successfully" });
    })
    .catch(err => {
      console.log("Error Applying Leave: ", err);
      res.status(500).json({ error: "Error Applying Leave", message: err.message });
    });
});

// Endpoint to handle POST requests for adding employees
app.post('/addemployee', (req, res) => {
  // Validate request body
  const { ID, name, department, mobilenumber, mail } = req.body;
  if (!ID || !name || !department || !mobilenumber || !mail) {
    return res.status(400).json({ error: "All fields are required" });
  }

  // Attempt to insert data into the database
  AdminModel.create(req.body) // Using AdminModel to add employee
    .then(result => {
      console.log("Employee Added Successfully");
      res.json({ message: "Employee Added Successfully" });
    })
    .catch(err => {
      console.log("Error Adding Employee: ", err);
      res.status(500).json({ error: "Error Adding Employee", message: err.message });
    });
});

// Endpoint to handle DELETE requests for deleting an employee
app.delete('/deleteemployee/:employeeId', (req, res) => {
  const employeeId = req.params.employeeId;

  // Check if the provided ID is a valid ObjectId
  if (!mongoose.isValidObjectId(employeeId)) {
    return res.status(400).json({ error: "Invalid employee ID" });
  }

  // Attempt to delete the document using the provided ID
  AdminModel.findByIdAndDelete(employeeId) // Using AdminModel to delete employee
    .then(result => {
      if (!result) {
        return res.status(404).json({ error: "Employee not found" });
      }
      console.log("Employee Deleted Successfully");
      res.json({ message: "Employee Deleted Successfully" });
    })
    .catch(err => {
      console.log("Error Deleting Employee: ", err);
      res.status(500).json({ error: "Error Deleting Employee", message: err.message });
    });
});


// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Catch-all route for handling 404 errors
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

// Database connection
db.once('open', () => {
  console.log('Database connection is open.');
});

// Database connection error handling
db.on('error', (err) => {
  console.error('Connection error:', err);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
