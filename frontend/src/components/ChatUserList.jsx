import { useState } from 'react';
import { IoChatbubbleEllipses, IoLogOut } from 'react-icons/io5';
import { FaEdit } from 'react-icons/fa';

export default function ChatUserList() {
  const [chatOpen, setChatOpen] = useState(false);

  const handleChat = () => {
    setChatOpen(!chatOpen);
  };

  return (
    <div className="w-full h-screen flex">
      <div className="Navbar w-20 h-screen bg-[#0f76d5] flex flex-col items-center justify-between py-8">
        <div className="Chats flex flex-col items-center space-y-1">
          <div
            onClick={handleChat}
            className="cursor-pointer bg-white w-12 h-12 rounded-full flex items-center justify-center"
          >
            <IoChatbubbleEllipses size={32} color="#0f76d5" />
          </div>
          <p className="text-white text-sm">Chats</p>
        </div>

        <div className="flex flex-col items-center space-y-6">
          <div className="Profile flex flex-col items-center space-y-1">
            <div className="cursor-pointer bg-white w-12 h-12 rounded-full"></div>
            <p className="text-white text-sm">Profile</p>
          </div>

          <div className="logout flex flex-col items-center space-y-1">
            <div className="cursor-pointer bg-white w-12 h-12 rounded-full flex items-center justify-center">
              <IoLogOut size={32} color="#0f76d5" />
            </div>
            <p className="text-white text-sm">Logout</p>
          </div>
        </div>
      </div>

      {chatOpen && (
        <div className="UserList w-64 h-screen bg-[#333333] p-5">
          <div className="Navbar w-full h-16 flex items-center justify-around">
            <h1 className="text-2xl font-medium text-white">Chats</h1>
            <FaEdit size={24} color="#ffffff" />
          </div>

          <div className="User cursor-pointer flex items-center space-x-2.5 mt-5">
            <div className="userProfile w-12 h-12 rounded-full bg-[#0f76d5]"></div>
            <div className="userName text-xl text-white font-semibold">
              Zarjin Islam
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
