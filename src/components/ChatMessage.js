import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Timestamp from './Timestamp';

class ChatMessage extends Component {
  static propTypes = {
    sender: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    time: PropTypes.instanceOf(Timestamp).isRequired,
  }

  render() {

    const sender = this.props.sender;
    const body = this.props.body;
    const timestamp = <Timestamp time={this.props.time} />;

    return (
      <div>
        <div className='sender'>
          {sender}
        </div>

        <div className='body'>
          {body}
        </div>

        <div className='timestamp'>
        </div>
          {timestamp}
      </div>
    );
  }
}

export default ChatMessage;
