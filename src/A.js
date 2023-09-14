import React, { Component } from 'react';

class A extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }

  incrementValue = () => {
    this.setState((prevState) => ({
      value: prevState.value < 20 ? prevState.value + 3 : 20, 
    }));
  };

  decrementValue = () => {
    this.setState((prevState) => ({
      value: prevState.value > 0 ? prevState.value - 2 : 0, 
    }));
  };

  render() {
    return (
      <>
        <h1>Counter</h1>
        <p>Value: {this.state.value}</p>
        <button onClick={this.incrementValue}>Increment</button>
        <button onClick={this.decrementValue}>Decrement</button>
      </>
    );
  }
}

export default A;
