import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChatMessage from './ChatMessage';

class ChatConversation extends Component {
  static propTypes = {
    chatMessages: PropTypes.array.isRequired,
    participants: PropTypes.array.isRequired,
  }


  render() {

    const firstParticipant = this.props.participants[0];

    const getFlag = (msge) => {
      if (msge.sender !== firstParticipant) {
        return false;
      } else {
        return true;
      }
    }

    const chatMessages = this.props.chatMessages.map((msge, key) => {

      let local = getFlag(msge);

      return <ChatMessage local={local} sender={msge.sender} body={msge.body} time={msge.timeStamp} key={key} />
    });

    return (
      <div>
        {chatMessages}
      </div>
    );
  }
}

export default ChatConversation;
