import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0); // a. Start at 0

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment by 1</button> {/* b */}
      <button onClick={() => setCount(count - 1)}>Decrement by 1</button> {/* c */}
      <button onClick={() => setCount(0)}>Reset to 0</button> {/* d */}
    </div>
  );
}
export default Counter;