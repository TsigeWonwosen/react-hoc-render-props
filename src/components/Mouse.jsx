import React, { useState } from 'react';
const Count = ({ render }) => {
  const [count, setCount] = useState(0);

  const handleMouse = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  return <>{render(count, handleMouse, resetCount)}</>;
};
export default Count;
