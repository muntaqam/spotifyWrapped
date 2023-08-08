import React from 'react';
import Login from './components/Login';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        {/* other routes */}
      </Routes>
    </Router>
  );
}

export default App;
