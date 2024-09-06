import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import KYC from './Components/KYC';
import UserProfile from './Components/UserProfile';
import Layout from './Components/shared/Layout';
import Booking from './Components/Booking';
import LoginSignup from './Components/LoginForm';
import SignUpForm from './Components/SignUpForm';
======= mentee
import MenteeProfile from './Components/MenteeProfile';
import Dashboard from './Components/Dashboard';
import LobbyScreen from './Components/VideoCall/Screens/Lobby';
import RoomPage from './Components/VideoCall/Screens/Room';


const App = () => {
=======
====== mentor
=======
import MenteeProfile from './Components/MenteeProfile';
====== main

const App = () => {
 

======= main
  return (
    <Router>
        <Routes>
        <Route path="/" element={<Layout/>}>
======= mentee
          <Route path='/' element={<Dashboard/>} />
          <Route path="/KYC" element={<KYC/>} />
=======
          {/* <Route index element={<Dashboard/>} /> */}
          <Route path="/KYC" element={<KYC/>} />
          
======= main
          <Route path="/booking" element={<Booking/>} />
        </Route>
        <Route path="/UserProfile" element={<UserProfile/>} />
        <Route path="/Loginform" element={<LoginSignup/>} />
        <Route path="/SignUpform" element={<SignUpForm/>} />
======= mentee
        <Route path="/mentee" element={<MenteeProfile/>} />
        <Route path="/lobby" element={<LobbyScreen />} />
        <Route path="/room/:roomId" element={<RoomPage />} />
=======
====== mentor
=======
        <Route path="/mentee" element={<MenteeProfile/>} />

====== main

======= main
        </Routes>

    </Router>
  );
};

export default App;
