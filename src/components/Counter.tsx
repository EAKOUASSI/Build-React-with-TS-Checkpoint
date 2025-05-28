import React, { Component } from "react";

// 1. Interface pour le state
interface CounterState {
  count: number;
}

// 2. Interface pour les props (vide dans ce cas)
interface CounterProps {}

// 3. Typer la classe avec les interfaces
class Counter extends Component<CounterProps, CounterState> {
  // 4. Initialisation du state avec le type
  state: CounterState = {
    count: 0
  };

  // 5. Typage de la méthode increment
  increment = (): void => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
