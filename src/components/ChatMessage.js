import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Timestamp from './Timestamp';

class ChatMessage extends Component {
  static propTypes = {
    local: PropTypes.bool.isRequired,
    sender: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
  }

  render() {

    const sender = this.props.sender;
    const body = this.props.body;
    const timestamp = <Timestamp time={this.props.time} />;

    let className = 'chat-entry';
      if (this.props.local) {
        className += ' local';
      } else {
        className += ' remote';
      }

    return (
      <div className={className}>
        <div className='entry-bubble'>

          <div className='entry-name'>
            {sender}
          </div>

          {body}

          <div className='entry-time'>
            {timestamp}
          </div>

        </div>
      </div>
    );
  }
}

export default ChatMessage;
