import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import KYC from './Components/KYC';
import UserProfile from './Components/UserProfile';
import Layout from './Components/shared/Layout';
import Booking from './Components/Booking';

const App = () => {
 

  return (
    <Router>
        <Routes>
        <Route path="/" element={<Layout/>}>
          {/* <Route index element={<Dashboard/>} /> */}
          <Route path="/KYC" element={<KYC/>} />
          
          <Route path="/booking" element={<Booking/>} />
        </Route>
        <Route path="/UserProfile" element={<UserProfile/>} />
        </Routes>

    </Router>
  );
};

export default App;
