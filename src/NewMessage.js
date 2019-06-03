import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NewMessage extends Component {

  state = {
    message: {
      username: '', 
      text: '' 
    }
  }

  isDisabled = () => {
    return this.state.messageText === "";
  };

  //this could be improved by having only the message text as state. It is only necessary to add the user one level up before it gets added to the state in App.js
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState(currState => ({
      ...currState,
     message: {
      ...currState.message,
       username: this.props.ownerName,
       [name]: value
     }
    }));
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.onAddMessage(this.state.message);
  }

  render () {
    return (
      <div>
        <form className="input-group" onSubmit={this.handleSubmit}>
          <input 
            type="text" 
            className="form-control" 
            name="text"
            placeholder="Enter your message..." 
            onChange={this.handleInputChange}/>
          <div className="input-group-append">
            <button className="btn submit-button" disabled={this.isDisabled()}>
              SEND
                  </button>
          </div>
        </form>
      </div>
    );
  }
}

PropTypes.propTypes = {
  ownerName: PropTypes.string.isRequired,
  onAddMessage: PropTypes.func.isRequired
}
export default NewMessage;