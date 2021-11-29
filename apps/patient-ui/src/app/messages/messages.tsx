import './messages.module.scss';
import React, { Component } from 'react';
import { w3cwebsocket as W3CWebSocket } from 'websocket';

const client = new W3CWebSocket('ws://localhost:3333');

class Messages extends Component {
  componentWillMount() {
    client.onopen = () => {
      client.send('string');
      console.log('WebSocket Client Connected');
    };
    client.onmessage = (message: any) => {
      console.log(message);
    };
  }

  render() {
    return (
      <div>
        Practical Intro To WebSockets.
      </div>
    );
  }
}

export default Messages;
