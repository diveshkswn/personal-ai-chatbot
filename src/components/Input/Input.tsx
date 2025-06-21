import { useState } from 'react';
import './Input.css';
interface ChatInputProps {
  handleNewChat: (newQuery: string) => void;
}
export const ChatInput: React.FC<ChatInputProps> = ({ handleNewChat }) => {
  const [inputValue, setInputValue] = useState('');

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleNewChat(inputValue);
    setInputValue('');
  };
  return (
    <div className="chat-input-container">
      <form onSubmit={handleFormSubmit}>
        <input
          value={inputValue}
          type="text"
          name="chatInput"
          id="chatInput"
          aria-label="Enter new Chat"
          placeholder="Tell me something about React.js"
          onChange={e => {
            setInputValue(e.target.value);
          }}
        />
        <button type="submit" aria-label="Click to submit your query" disabled={!inputValue}>
          <span className="material-symbols-outlined">arrow_upward</span>
        </button>
      </form>
    </div>
  );
};
