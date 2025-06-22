import './App.css';
import { Chatbot } from './components/Chatbot/Chatbot';

function App() {
  console.log(import.meta.env.VITE_SOME_KEY);
  return (
    <div className="main-container">
      <Chatbot />
    </div>
  );
}

export default App;
