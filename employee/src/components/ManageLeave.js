import React from 'react';
import { Typography } from '@mui/material';

const ManageLeave = ({ formData }) => {
  if (!formData) {
    return null; // If formData is not available, don't render anything
  }

  return (
    <div>
      <Typography variant="h4" align="center" gutterBottom>
        Submitted Leave Details
      </Typography>
      <Typography variant="body1">
        Employee Name: {formData.employeeName}
      </Typography>
      <Typography variant="body1">
        Employee ID: {formData.employeeId}
      </Typography>
      <Typography variant="body1">
        Email: {formData.email}
      </Typography>
      <Typography variant="body1">
        Mobile: {formData.mobile}
      </Typography>
      <Typography variant="body1">
        Reason for Leave: {formData.reason}
      </Typography> 
      <Typography variant="body1">
        Leave Dates: {formData.leaveDates}
      </Typography>
      {/* Display other form data as needed */}
    </div>
  );
};

export default ManageLeave;
