import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MessageList extends Component {
  state = {
    messages: [
      { username: 'Amy', text: 'Hi, Jon!' },
      { username: 'Amy', text: 'How are you?' },
      { username: 'John', text: 'Hi, Amy! Good, you?' },
    ]
  }

  render () {
    const { user } = this.props;
    const { msgs } = this.state;
    return (
      <ul className="message-list">
        {msgs.map((message, index) => (
          <li
            key={index}
            className={
              message.username === user ? 'message sender' : 'message recipient'
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
  ownerName: PropTypes.string.isRequired
}

export default MessageList;