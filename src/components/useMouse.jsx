import { useState } from 'react';
const useMouse = () => {
  const [count, setCount] = useState(10);
  const handleCount = () => {
    setCount((prvState) => prvState + 1);
  };
  const resetCount = () => {
    setCount(0);
  };

  return { count, handleCount, resetCount };
};
export default useMouse;
