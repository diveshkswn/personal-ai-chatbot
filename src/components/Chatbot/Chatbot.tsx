import { useCallback, useEffect, useRef, useState } from 'react';
import { Chat } from '../Chat/Chat';
// const Chat = lazy(() => import('../Chat/Chat').then(module => ({ default: module.Chat })));
import { AIIcon, KeyBoardDown, RobotIcon } from '../Icons';
import { ChatInput } from '../Input/Input';
import './Chatbot.css';
import { generateGemeniAiResponse, type ChatHistoryProps } from '../../utils/google-gemini';

export const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const chatBodyRef = useRef<HTMLDivElement | null>(null);
  const [chatHistory, setChatHistory] = useState<ChatHistoryProps[]>([
    { role: 'model', parts: [{ text: 'Hello How can I help you' }] },
  ]);

  useEffect(() => {
    if (window.innerWidth < 700 && !isOpen) {
      setTimeout(() => {
        setIsOpen(true);
      }, 600);
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (chatBodyRef.current) {
        chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
      }
    }, 100);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chatBodyRef.current, chatHistory]);

  const renderChatHistory = (value: ChatHistoryProps, index: number): React.ReactNode => {
    return <Chat key={index} text={value.parts[0].text} isBot={value.role === 'model'} />;
  };

  const handleNewChat = useCallback(
    async (newQuery: string) => {
      setChatHistory(preState => {
        return [...preState, { role: 'user', parts: [{ text: newQuery }] }];
      });
      setChatHistory(preState => {
        return [...preState, { role: 'model', parts: [{ text: 'I am thinking...' }] }];
      });
      const aiResponse = await generateGemeniAiResponse({
        text: newQuery,
        currentHistory: [...chatHistory.slice(1, chatHistory.length)], //Removing Hello How can I help you chat
      });
      setChatHistory(preState => {
        return [
          ...preState.slice(0, preState.length - 1), //Removing think chat
          {
            role: 'model',
            parts: [{ text: aiResponse?.candidates[0].content.parts[0].text || '' }],
          },
        ];
      });
      // setTimeout(async () => {
      //   setChatHistory(preState => {
      //     return [...preState, { role: 'model', parts: [{ text: 'I am thinking...' }] }];
      //   });
      //   const aiResponse = await generateGemeniAiResponse({
      //     text: newQuery,
      //     currentHistory: [...chatHistory.slice(1, chatHistory.length)], //Removing Hello How can I help you chat
      //   });
      //   console.log(chatHistory);
      //   setChatHistory(preState => {
      //     return [
      //       ...preState.slice(0, preState.length - 1), //Removing think chat
      //       {
      //         role: 'model',
      //         parts: [{ text: aiResponse?.candidates[0].content.parts[0].text || '' }],
      //       },
      //     ];
      //   });
      // }, 300);
      // setTimeout(() => {
      //   // Scroll to the bottom when the component mounts
      //   if (chatBodyRef.current) {
      //     chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight + 1000;
      //   }
      // }, 800);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [chatBodyRef.current, chatHistory],
  );

  return (
    <div className="chat-container">
      <div className={`chatbot-container ${isOpen && 'open'}`}>
        <div className="chatbot-content">
          <div className="chat-header">
            <AIIcon />
            <span className="title">
              AI Chatbot
              <span className="author">
                By{' '}
                <a href="https://www.linkedin.com/in/divesh-keswani-a347b1112/" target="_blank">
                  Divesh Keswani
                </a>
              </span>
            </span>

            <span
              onClick={() => {
                setIsOpen(false);
              }}
            >
              <KeyBoardDown />
            </span>
          </div>
          <div className="chat-body" ref={chatBodyRef}>
            {chatHistory.map(renderChatHistory)}
          </div>
          <div className="chat-footer">
            <ChatInput handleNewChat={handleNewChat} />
          </div>
        </div>
      </div>

      <button
        className={`chatbot-button ${isOpen && 'open'}`}
        onClick={() => {
          setIsOpen(true);
        }}
      >
        <RobotIcon />
      </button>
    </div>
  );
};
