
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Elms from './components/Elms';
import About from './components/About';
import Login from './components/Login';
import Signup from './components/Signup';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Admin from './components/Admin';
import Hr from './components/Hr';
import Employee from './components/Employee';
import AddEmployee from './components/AddEmployee';
import DeleteEmployee from './components/DeleteEmployee';
import Leave from './components/Leave';
import LeaveHistory from './components/LeaveHistory';
import EmployeeFeedback from './components/EmployeeFeedback';
import EditLeave from './components/EditLeave';
import ManageLeave from './components/ManageLeave';
import LeaveBalances from './components/LeaveBalances';
import AdminSettings from './components/AdminSettings';

function App() {
  return (
    <div className="App">
   <Navbar/>
    <Routes>
    <Route path="/home" element={<Home />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/login" element={<Login />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/elms" element={<Elms />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/hr" element={<Hr />} />
      <Route path="/employee" element={<Employee />} />
      <Route path="/applyleave" element={<Leave />} />
      <Route path="/leavehistory" element={<LeaveHistory />} />
      <Route path="/employeefeedback" element={<EmployeeFeedback />} />
      <Route path="/addemployee" element={<AddEmployee/>} />
      <Route path="/deleteemployee" element={<DeleteEmployee/>} />
      <Route path="/editleave" element={<EditLeave />} />
      <Route path="/manageleave" element={<ManageLeave/>} />
      <Route path="/leavebalances" element={<LeaveBalances/>} />
      <Route path="/settings" element={<AdminSettings/>} />
    </Routes>
    </div>
  );
};

export default App;
