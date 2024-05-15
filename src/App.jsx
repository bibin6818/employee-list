// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddEmployee from './components/AddEmployee';
import EmployeeList from './components/EmployeeList';
import EditEmployee from './components/EditEmployee';
import DeleteEmployee from './components/DeleteEmployee';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/AddEmployee" element={<AddEmployee />} />
        <Route path="/" element={<EmployeeList />} />
        <Route path="/edit/:id" element={<EditEmployee />} />
        <Route path="/delete/:id" element={<DeleteEmployee />} />
      </Routes>
    </Router>
  );
};

export default App;
