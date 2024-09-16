import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { Buffer } from 'buffer';
import { SocketProvider } from './Components/VideoCall/context/SocketProvider.jsx';

window.Buffer = Buffer;
window.global = window;


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SocketProvider>
    <App />
  </SocketProvider>,
  </React.StrictMode>,
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

