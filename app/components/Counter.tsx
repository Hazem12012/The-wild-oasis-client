"use client";

import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button
      onClick={() => setCount(count + 1)}
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
      <div>{count}</div>
    </button>
  );
}

export default Counter;
