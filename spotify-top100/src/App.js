import React from 'react';
import Login from './components/Login';
import TopSongs from './components/TopSongs';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
      <Route path="/top-songs" element={<TopSongs />} />

        {/* other routes */}
      </Routes>
    </Router>
  );
}

export default App;
