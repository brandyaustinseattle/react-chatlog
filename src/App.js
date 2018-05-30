import React, { Component } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatConversation from './components/ChatConversation';

class App extends Component {

  render() {
    console.log(chatMessages);

    let unique = [...new Set(chatMessages.map(item => item.sender))];

    const chatConversation = <ChatConversation chatMessages={chatMessages} participants={unique} />;

    return (
      <div className="App">
      
        <header className="App-header">
          <h1 className="App-title">Chat between {unique[0]} and {unique[1]}</h1>
        </header>

        <main className="App-main">
          {chatConversation}
        </main>

      </div>
    );
  }
}

export default App;
