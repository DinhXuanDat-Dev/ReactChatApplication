import { BrowserRouter,Routes, Route } from 'react-router-dom';
import './App.css';
import ChatRoom from './Components/ChatRoom';
import Login from './Components/Login';
import Logout from './Components/Logout';
import AuthProvider from './Context/AuthProvider';


function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route name="login" element={<Login/>} path="/login"></Route>
          <Route name="chatroom" element={<ChatRoom/>} path="/"></Route>
          <Route name="logout" element={<Logout/>} path="/logout"></Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
