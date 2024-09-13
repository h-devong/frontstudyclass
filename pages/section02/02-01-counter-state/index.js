import { useState } from "react";

export default function CounterState() {
  // let count = 0  let은 jsx에서 변경을 감지 하지 못해 state 사용
  const [count, setCount] = useState(0);
  function onClickCountUp() {
    setCount(count + 1);
    // count += 1;
  }
  function onClickCountdown() {
    setCount(count - 1);
    // count -= 1;
  }
  return (
    <>
      <div>{count}</div>
      <button onClick={onClickCountUp}>더하기</button>
      <button onClick={onClickCountdown}>뺴기</button>
    </>
  );
}
