import './messages.module.scss';
import React, { Component, useEffect, useState } from 'react';
import io  from 'socket.io-client';

const socket = io(`http://localhost:3333`);

class Messages extends Component  {
  state = { data: {} }

  componentDidMount() {
    socket.on(`msgToClient`, data => {
      console.log(data);
      this.setState({ data })
    })
  }

  handleClick() {
    console.log(socket);
    console.log('click');
    const apiCall = {
      event: 'msgToServer',
      data: { channel: '12345' },
    };
    socket.emit('msgToServer', { channel: '12345' });
  }
/*
  useEffect(() => {
  ws.onmessage = function (event) {
    const json = JSON.parse(event.data);
    try {
      if ((json.event = "data")) {
        dispatch(getOrderBookData(json.data));
      }
    } catch (err) {
      console.log(err);
    }
  };
  //clean up function
  return () => ws.close();
}, []);
*/
  render () {
    return (
      <div>
        <button onClick={this.handleClick}>
          Activate Lasers
        </button>
        <div></div>
      </div>
    );
  }
}

export default Messages;
