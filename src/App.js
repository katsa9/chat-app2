import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChatWindow from './ChatWindow.js';

/*
This exercise will help you practice many of your newly aquired React skills.

The instructions are included in the `instructions.md` file.
*/

const users = [{ username: 'Amy' }, { username: 'John' }];

// const messages = [
//   { username: 'Amy', text: 'Hi, Jon!' },
//   { username: 'Amy', text: 'How are you?' },
//   { username: 'John', text: 'Hi, Amy! Good, you?' },
// ];

class App extends Component {
  state = {
    messages: [
      { username: 'Amy', text: 'Hi, Jon!' },
      { username: 'Amy', text: 'How are you?' },
      { username: 'John', text: 'Hi, Amy! Good, you?' },
    ]
  }

  onNewMessage = newMessage => {  
    this.setState(currState => ({
      messages: [...currState.messages, newMessage]
    }))
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>

        <div className="container">
          {users.map(usr => (
            <ChatWindow 
              owner={usr.username}
              onNewMessage={this.onNewMessage}
              messages={this.state.messages}/>
          ))}
         </div>
      </div>
    );
  }
}

export default App;
