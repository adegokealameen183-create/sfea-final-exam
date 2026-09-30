import { useState, useEffect } from "react";

// Q24b: Reusable Component 1 - For Display
// This makes code organized, not everything in one component
function CounterDisplay({ count }) {
  // Q23: Dynamic Styling
  const style = {
    color: count === 0 ? "gray" : "green",
    backgroundColor: count === 0 ? "#e5e7eb" : "#d1fae5",
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center",
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "15px",
  };

  return (
    <div style={style}>
      {/* Q22a & Q22b: Conditional Rendering */}
      {count === 0
        ? "No activities completed"
        : `Activities completed: ${count}`}
    </div>
  );
}

// Q24b: Reusable Component 2 - For Buttons
function CounterButtons({ onIncrease, onDecrease }) {
  return (
    <div>
      <button onClick={onIncrease}>Increase</button>
      <button onClick={onDecrease}>Decrease</button>
    </div>
  );
}

// Main Component
function App() {
  const [count, setCount] = useState(0);

  // Q24a: Use useEffect to update browser document title
  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleDecrease = () => {
    // Q22c: Prevent counter from going below 0
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>Activity Tracker</h1>
      <CounterDisplay count={count} />
      <CounterButtons onIncrease={handleIncrease} onDecrease={handleDecrease} />
    </div>
  );
}

export default App;
