import React, { Component, memo } from "react";

class Dog extends Component {
  render() {
    console.log("Dog Component");
    const { count, handleCount, resetCount } = this.props;
    return (
      <div className='dog-container'>
        <img src='/images/dog.jpg' alt='Dog' onClick={handleCount} />
        <div className='dog-title-button'>
          <div>
            <h4>Number of Dog Clicked : {count}</h4>
          </div>
          <button onClick={resetCount}>Reset</button>
        </div>
      </div>
    );
  }
}

export default memo(Dog);
