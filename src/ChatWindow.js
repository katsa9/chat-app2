import React from 'react';
import MessageList from './MessageList.js';
import NewMessage from './NewMessage';

const ChatWindow = props => {

  onNewMessage = newMessage => {  //this can't be here, Chatwindow needs to not be function and contain the messages state
    this.setState(currState => ({
      messages: [...currState.messages, newMessage]
    }))
  };

  return (
    <div className="chat-window">
      <h2>Super Awesome Chat</h2>
      <div className="name sender">{props.owner.username}</div>
      <MessageList 
        ownerName={props.owner.username}
      />
      <NewMessage 
      ownerName={props.owner.username}
      onAddMessage={this.onNewMessage}
      />
    </div>
  );
}

export default ChatWindow;
