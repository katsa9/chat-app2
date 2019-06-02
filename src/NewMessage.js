import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NewMessage extends Component {

  state = {
    messageText: ""
  }

  isDisabled = () => {
    return this.state.messageText === "";
  };

  handleInputChange = event => {
    this.setState(currState => ({
      messageText: event.target.value
    }));
  }

  render () {
    return (
      <div>
        <form className="input-group" onSubmit={this.props.onAddMessage}>
          <input 
            type="text" 
            className="form-control" 
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