import React, { Component } from 'react';
import MessageList from './MessageList.js';
import NewMessage from './NewMessage';

class ChatWindow extends Component {

  render () {
    return (
      <div className="chat-window">
        <h2>Super Awesome Chat</h2>
        <div className="name sender">{this.props.owner}</div>
        <MessageList
          ownerName={this.props.owner}
          messages={this.props.messages}
        />
        <NewMessage
          ownerName={this.props.owner}
          onAddMessage={this.props.onNewMessage}
        />
      </div>
    );
  }
}

export default ChatWindow;
