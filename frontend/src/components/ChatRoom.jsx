import React from 'react';

export default function ChatRoom() {
  return (
    <div className="w-full h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="h-16 bg-gradient-to-r from-[#0f76d5] to-[#1a8ae5] text-white flex items-center px-6 shadow-md">
        <div className="cursor-pointer bg-white w-12 h-12 rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow">
          <img
            src="https://via.placeholder.com/48"
            alt="profile"
            className="w-11 h-11 rounded-full"
          />
        </div>
        <div className="ml-4 font-semibold text-xl tracking-wide">Zarjin</div>
      </div>

      {/* Messages */}
      <div className="flex-1 p-6 overflow-y-auto space-y-4">
        <div className="bg-white p-4 rounded-2xl shadow-sm w-fit max-w-md hover:shadow-md transition-shadow">
          <p className="text-gray-800">Hey there! 👋</p>
        </div>
        <div className="bg-[#0f76d5] text-white p-4 rounded-2xl shadow-sm w-fit max-w-md ml-auto hover:shadow-md transition-shadow">
          <p>Yo! What's good? 😎</p>
        </div>
      </div>

      {/* Message Input */}
      <div className="h-20 bg-white flex items-center px-6 space-x-4 border-t shadow-lg">
        <input
          type="text"
          placeholder="Type a message..."
          className="flex-1 border border-gray-200 rounded-full px-6 py-3 outline-none focus:ring-2 focus:ring-[#0f76d5] focus:border-transparent transition-all"
        />
        <button className="bg-[#0f76d5] hover:bg-[#0d63b3] text-white px-6 py-3 rounded-full font-medium transition-colors duration-200 shadow-sm hover:shadow-md">
          Send
        </button>
      </div>
    </div>
  );
}
