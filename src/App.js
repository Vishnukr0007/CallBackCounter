import React, { useState, useCallback } from 'react';
import Button from './Button';
import Counter from './Counter';

function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const handleIncrement = useCallback(() => {
    setCount1((prevCount1) => prevCount1 + 1);
  }, []); 

  const handleDecrement = useCallback(() => {
    setCount2((prevCount2) => prevCount2 - 1);
  }, []); 

  return (
    <div className='sh'>
      <Counter text="counter1" count={count1} />
      <Button handle={handleIncrement}>increment</Button>
      <Counter text="counter2" count={count2} />
      <Button handle={handleDecrement}>decrement</Button>
    </div>
  );
}

export default React.memo(App);
