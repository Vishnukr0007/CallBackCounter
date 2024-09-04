import React from 'react';

function Counter({ text, count }) {
  console.log('rendering');

  return (
    <div>
      {text} : {count}
    </div>
  );
}

export default React.memo(Counter);
