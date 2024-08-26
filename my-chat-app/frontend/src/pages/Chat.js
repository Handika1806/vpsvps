import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import MessageList from '../components/MessageList';
import MessageInput from '../components/MessageInput';

const socket = io('http://localhost:3000');

const Chat = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socket.off('message');
    };
  }, []);

  const sendMessage = (text) => {
    const message = { username: 'User', text };
    socket.emit('sendMessage', message);
  };

  return (
    <div>
      <MessageList messages={messages} />
      <MessageInput sendMessage={sendMessage} />
    </div>
  );
};

export default Chat;