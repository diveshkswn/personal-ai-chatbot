import { RobotIcon } from '../Icons';
import './Chat.css';
import ReactMarkDown from 'react-markdown';
import remarkGfm from 'remark-gfm';
interface ChatProps {
  text: string;
  isBot?: boolean;
}

export const Chat: React.FC<ChatProps> = ({ isBot, text }) => {
  return (
    <>
      <div className="chat-field">
        {isBot && (
          <span>
            <RobotIcon />
          </span>
        )}
        <div className={`chat ${isBot && 'bot'}`}>
          <ReactMarkDown remarkPlugins={[remarkGfm]}>{text}</ReactMarkDown>
        </div>
      </div>
    </>
  );
};
