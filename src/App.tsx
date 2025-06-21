import './App.css';
import { Chatbot } from './components/Chatbot/Chatbot';

function App() {
  console.log(import.meta.env.VITE_SOME_KEY);
  return (
    <div className="main-container">
      <h1>My ChatBot</h1>
      <h3>Click on the ChatBot button to continue</h3>
      <Chatbot />
    </div>
  );
}

export default App;
