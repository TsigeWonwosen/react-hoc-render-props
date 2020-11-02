import React, { Component } from "react";
import withMouse from "./withMouse";
class Cat extends Component {
  render() {
    const { count, handleCount, resetCount } = this.props;
    return (
      <div className='dog-container'>
        <img src='/images/cat.jpeg' alt='cat' onMouseEnter={handleCount} />

        <div className='dog-title-button'>
          <h4> Number of Cat Hovered : {count}</h4>
          <button onClick={resetCount}>Reset</button>
        </div>
      </div>
    );
  }
}

export default withMouse(Cat, 10);
