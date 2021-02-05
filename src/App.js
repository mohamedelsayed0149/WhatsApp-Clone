import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import './App.css';

const projectID = '80b19e51-84b0-4900-ba3a-af5765a06ba4';

const App = () => {
  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName='Mohamed-Elsayed'
      userSecret='123456789'
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  );
};

// infinite scroll, logout, more customizations...
export default App;


//for a specific user 
//userName='Mohamed-Elsayed'
//userSecret='123456789'
//renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
//onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}