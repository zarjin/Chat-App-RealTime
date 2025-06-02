import { BrowserRouter, Routes, Route } from 'react-router';
import { ToastContainer } from 'react-toastify';
import ChatUserList from './components/ChatUserList';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Profile from './Pages/Profile';

export default function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<ChatUserList />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}
