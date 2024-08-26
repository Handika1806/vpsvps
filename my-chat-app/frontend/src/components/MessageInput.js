import React, { useState } from 'react';

const MessageInput = ({ sendMessage }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type your message here..."
        required
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default MessageInput;
