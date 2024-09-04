import React from 'react';

function Button({ handle, children }) {
  console.log('rendering', children);

  return (
    <button onClick={handle}>
      {children}
    </button>
  );
}

export default React.memo(Button);
