import { MendableInPlace } from "@mendable/search"
import Logo from './logo.svg'
import './App.css';

function App() {
  const style = { darkMode: true, accentColor: "#123456" }
  return (
    <div className="App">
      <img id='logo' src={Logo} alt='logo'></img>
      <p>Discover COREF Insights: Engage in Conversations with our Knowledgeable AI Chatbot</p>
      <div class='wrapper'>
        <MendableInPlace anon_key='3b80e6f0-aa2e-4b41-8835-02d9c4050528' style={style} hintText="Ask about COREF..." />
      </div>

    </div>
  );
}

export default App;
