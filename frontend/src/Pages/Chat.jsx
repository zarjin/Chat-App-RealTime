import React from 'react';
import ChatUserList from '../components/ChatUserList';

export default function Chat() {
  return (
    <div className="w-full h-screen flex items-center justify-end">
      <ChatUserList />
    </div>
  );
}
