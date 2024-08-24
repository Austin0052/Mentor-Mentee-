import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import KYC from './Components/KYC';
import UserProfile from './Components/UserProfile';
import Layout from './Components/shared/Layout';
import Booking from './Components/Booking';
import LoginSignup from './Components/LoginForm';
import SignUpForm from './Components/SignUpForm';
import MenteeProfile from './Components/MenteeProfile';

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
        <Route path="/Loginform" element={<LoginSignup/>} />
        <Route path="/SignUpform" element={<SignUpForm/>} />
        <Route path="/mentee" element={<MenteeProfile/>} />


        </Routes>

    </Router>
  );
};

export default App;
