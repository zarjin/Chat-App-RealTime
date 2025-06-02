import { useState } from 'react';
import { Link } from 'react-router';
import { IoChatbubbleEllipses, IoLogOut } from 'react-icons/io5';
import { FaEdit } from 'react-icons/fa';
import ChatRoom from './ChatRoom';

export default function ChatUserList() {
  const [chatOpen, setChatOpen] = useState(false);

  const handleChat = () => {
    setChatOpen(!chatOpen);
  };

  return (
    <div className="w-full h-screen flex bg-gradient-to-r from-blue-50 to-blue-100">
      {/* Sidebar */}
      <div className="Navbar w-24 h-screen bg-gradient-to-b from-[#0f76d5] to-[#155fa0] flex flex-col items-center justify-between py-8 shadow-lg">
        <div className="Chats flex flex-col items-center space-y-2">
          <div
            onClick={handleChat}
            className={`cursor-pointer bg-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-md transition-all duration-200 ${
              chatOpen ? 'ring-4 ring-blue-300' : ''
            }`}
            title="Chats"
          >
            <IoChatbubbleEllipses size={32} color="#0f76d5" />
          </div>
          <p className="text-white text-xs font-semibold tracking-wide">
            Chats
          </p>
        </div>

        <div className="flex flex-col items-center space-y-8">
          <Link to="/profile" className="ProfileLink">
            <div className="Profile flex flex-col items-center space-y-2">
              <div className="cursor-pointer bg-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-md">
                <img
                  src=""
                  alt=""
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <p className="text-white text-xs font-semibold tracking-wide">
                Profile
              </p>
            </div>
          </Link>

          <div className="logout flex flex-col items-center space-y-2">
            <div className="cursor-pointer bg-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-md hover:bg-red-100 transition-all duration-200">
              <IoLogOut size={28} color="#0f76d5" />
            </div>
            <p className="text-white text-xs font-semibold tracking-wide">
              Logout
            </p>
          </div>
        </div>
      </div>

      {/* User List */}
      {chatOpen && (
        <div className="UserList w-72 h-screen bg-[#23272f] p-6 flex flex-col shadow-xl">
          <div className="Navbar w-full h-16 flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-white tracking-wide">
              Chats
            </h1>
            <button className="p-2 rounded-full hover:bg-[#0f76d5] transition-all duration-200">
              <FaEdit size={22} color="#ffffff" />
            </button>
          </div>

          <div className="space-y-4">
            <div className="User cursor-pointer flex items-center space-x-4 p-3 rounded-xl hover:bg-[#2d323c] transition-all duration-200">
              <div className="userProfile w-12 h-12 rounded-full bg-gradient-to-br from-[#0f76d5] to-[#155fa0] flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <div className="userName text-lg text-white font-semibold">
                Zarjin Islam
              </div>
            </div>
            {/* Add more users here */}
          </div>
        </div>
      )}

      {/* Chat Room */}
      <div className="flex-1 flex">
        <ChatRoom />
      </div>
    </div>
  );
}
