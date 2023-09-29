import React, { useState } from 'react';
import EmojiPickerComponent from './EmojiPicker';

const App = () => {
  const [selectedEmoji, setSelectedEmoji] = useState(null);

  const handleEmojiSelect = (emojiObject) => {
    setSelectedEmoji(emojiObject);
  };

  return (
    <div>
      <h1>React Emoji Picker</h1>
      <input type="text" value={selectedEmoji ? selectedEmoji.emoji : ''} readOnly />
      <EmojiPickerComponent onEmojiSelect={handleEmojiSelect} />
    </div>
  );
};

export default App;