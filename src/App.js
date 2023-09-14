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
        <B value={this.state.value} />
        <C
          increment={this.incrementValue}
          decrement={this.decrementValue}
        />
      </>
    );
  }
}

class B extends Component {
  render() {
    return (
      <>
        <p>Value from A: {this.props.value}</p>
      </>
    );
  }
}

class C extends Component {
  render() {
    return (
      <>
        <button onClick={this.props.increment}>Increment</button>
        <button onClick={this.props.decrement}>Decrement</button>
      </>
    );
  }
}

export default A;
