import { useEffect, useRef, useState } from "react";

export const MutableRef = () => {
  const [timer, setTimer] = useState(0);
  const inputValRef = useRef<number | null>(null!);

  const stopTimer = () => {
    if (inputValRef.current) window.clearInterval(inputValRef.current);
  };
  useEffect(() => {
    inputValRef.current = window.setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
    return () => {
      stopTimer();
    };
  }, []);
  return (
    <div>
      HookTimer - {timer} -
      <button onClick={() => stopTimer()}>Stop Time</button>
    </div>
  );
};
