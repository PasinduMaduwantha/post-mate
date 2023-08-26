import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './page/Home/home';

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/user-home">
          <UserHome /> */}
        {/* </Route> */}
        <Route path="/" element={<Home/>}>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
