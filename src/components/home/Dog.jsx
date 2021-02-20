import React, { memo } from 'react';
import useMouse from '../utility/useMouse';

import DogImage from '../../img/backgraund2.jpg';

const Dog = () => {
  const { count, handleCount, resetCount } = useMouse();

  //TODO

  return (
    <div className="dog-container">
      <img src={DogImage} alt="Dog" onClick={handleCount} />
      <div className="dog-title-button">
        <span>
          <h4>Number of Dog Clicked : {count}</h4>
        </span>
        <button onClick={handleCount}>addCOUNT</button>
        <button onClick={resetCount}>Reset</button>
      </div>
    </div>
  );
};

export default memo(Dog);
