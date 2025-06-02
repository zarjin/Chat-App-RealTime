import React from 'react';

export default function Profile() {
  return (
    <div className="w-full h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black flex items-center justify-center">
      <div className="bg-white/90 p-8 rounded-2xl shadow-2xl max-w-sm w-full flex flex-col items-center">
        <div className="relative mb-6">
          <img
            src="https://via.placeholder.com/150"
            alt="Profile"
            className="rounded-full w-36 h-36 object-cover border-4 border-blue-500 shadow-lg"
          />
          <span className="absolute bottom-2 right-2 bg-green-400 border-2 border-white rounded-full w-5 h-5 block"></span>
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-1">John Doe</h2>
        <p className="text-gray-500 mb-4">johndoe@email.com</p>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-blue-700 transition">
          Edit Profile
        </button>
      </div>
    </div>
  );
}
