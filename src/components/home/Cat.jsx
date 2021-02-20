import React from 'react';
import useMouse from '../utility/useMouse.jsx';
const Cat = ({ name }) => {
  const { count, handleCount, resetCount } = useMouse();

  return (
    <div className="dog-container">
      <div onMouseOver={handleCount}>
        <img src="/images/cat.jpeg" alt="cat" />
      </div>

      <div className="dog-title-button">
        <h4>
          {' '}
          Number of Cat Hovered ({name}) : {count}
        </h4>
        <button onClick={resetCount}>Reset</button>
      </div>
    </div>
  );
};

export default Cat;
