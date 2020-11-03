import React, { Component, memo } from "react";
import withMouse from "./withMouse";
class Cat extends Component {
  render() {
    console.log("Cat Component");

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

export default memo(withMouse(Cat, 10));
