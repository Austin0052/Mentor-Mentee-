import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import KYC from './Components/KYC';
import UserP from './Components/UserProfile';
import Layout from './Components/shared/Layout';
import Booking from './Components/Booking';
import LoginForm from './Components/LoginForm';
import SignUpForm from './Components/SignUpForm';
import MenteeProfile from './Components/MenteeProfile';
import Dashboard from './Components/Dashboard';
import LobbyScreen from './Components/VideoCall/Screens/Lobby';
import RoomPage from './Components/VideoCall/Screens/Room';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/KYC" element={<KYC />} />
          <Route path="/booking" element={<Booking />} />
        </Route>
        <Route path="/UserProfile" element={<UserP />} />
        <Route path="/Login" element={<LoginForm />} />
        <Route path="/SignUpform" element={<SignUpForm />} />
        <Route path="/mentee" element={<MenteeProfile />} />
        <Route path="/lobby" element={<LobbyScreen />} />
        <Route path="/room/:roomId" element={<RoomPage />} />
      </Routes>
    </Router>
  );
};

export default App;
