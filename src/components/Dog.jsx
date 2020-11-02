import React, { Component } from "react";

class Dog extends Component {
  render() {
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

export default Dog;
