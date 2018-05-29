import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChatMessage from './ChatMessage';

class ChatConversation extends Component {
  static propTypes = {
    chatMessages: PropTypes.array.isRequired,
    one: PropTypes.string.isRequired,
    two: PropTypes.string.isRequired,
  }

  render() {

    const chatMessages = this.props.chatMessages.map((message, key) => {
      return <ChatMessage sender={message.sender} body={message.body} time={message.timestamp} key={key} />
    });

    return (
      <div>
        {chatMessages}
      </div>
    );
  }
}

export default ChatConversation;
