import React from 'react';

const MessageList = ({ messages }) => {
  return (
    <div>
      {messages.map((message, index) => (
        <div key={index}>
          <strong>{message.username}: </strong>{message.text}
        </div>
      ))}
    </div>
  );
};

export default MessageList;
