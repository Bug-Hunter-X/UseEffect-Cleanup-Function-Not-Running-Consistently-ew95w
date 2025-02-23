```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs on every render
    console.log('Effect ran!');
    const cleanup = () => {
      // Cleanup function
      console.log('Cleanup function ran!');
    };
    return cleanup;
  }, [count]); // Add dependency array to control when the effect runs

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default MyComponent;
```