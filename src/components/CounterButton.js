import React, {PureComponent} from "react";

class CounterButton extends PureComponent {
  constructor() {
    super();
    this.state = {
      count: 0
    }
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log(nextProps, nextState);
    if (this.state.count !== nextState.count) {
      return true;
    } else {
      return false;
    }
  }

  updateCount = () => {
    // this.setState({count: this.state.count + 1});
    this.setState(state => {
      return {count: this.state.count + 1}
    });
  }

  render() {
    console.log('Rendering CounterButton');
    return (
      <button color={this.props.color} onClick={this.updateCount}>
        Count: {this.state.count}
      </button>
    )
  }
}

export default CounterButton;