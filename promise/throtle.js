import React, { useState, useCallback, useRef, useEffect } from 'react';
import throttle from 'lodash/throttle';

function App() {
  const [i, setI] = useState(0);
  const [m, setM] = useState(0);

  // Keep latest i in ref to avoid stale closures inside throttled fn
  const iRef = useRef(i);
  useEffect(() => {
    iRef.current = i;
  }, [i]);

  // Throttled handler
  const handleClick = useCallback(() => {
    const newCount = iRef.current + 1;
    console.log('Button clicked. Count:', newCount);

    setI(newCount);

    if (newCount > 5) {
      setM(1);
    }
  }, []);

  // Throttle the handleClick and keep it in ref
  const throttledClickRef = useRef(throttle(handleClick, 3000));
  useEffect(() => {
    throttledClickRef.current = throttle(handleClick, 3000);
    return () => throttledClickRef.current.cancel();
  }, [handleClick]);

  // Watch for m changing to 1, then reset states to start over
  useEffect(() => {
    if (m === 1) {
      console.log('m became 1 — resetting i and m');
      setI(0);
      setM(0);
    }
  }, [m]);

  return (
    <>
      <button onClick={throttledClickRef.current}>Click Me</button>
      <p>Count: {i}</p>
      <p>m: {m}</p>
    </>
  );
}

export default App;
