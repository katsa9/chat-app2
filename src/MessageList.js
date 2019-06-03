import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MessageList extends Component {

  render () {
    const { ownerName, messages } = this.props;
    return (
      <ul className="message-list">
        {messages.map((message, index) => (
          <li
            key={index}
            className={
              message.username === ownerName ? 'message sender' : 'message recipient'
            }
          >
            <p>{`${message.username}: ${message.text}`}</p>
          </li>
        ))}
      </ul>
    );
  }
}

PropTypes.propTypes = {
  ownerName: PropTypes.string.isRequired,
  messages: PropTypes.array.isRequired
}

export default MessageList;