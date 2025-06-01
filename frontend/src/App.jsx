import { BrowserRouter, Routes, Route } from 'react-router';
import { ToastContainer } from 'react-toastify';
import ChatUserList from './components/ChatUserList';

export default function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<ChatUserList />} />
      </Routes>
    </BrowserRouter>
  );
}
