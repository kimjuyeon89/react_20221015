import { useState } from "react";

function Counter() {
  //useState : 상태관리 hook =>상태변화가 있으면 재랜더링 발생
  const [count, setCount] = useState(0);
  const increasNum = () => {
    setCount(count + 1);
  };
  const decreasNum = () => {
    setCount(count - 1);
  };

  return (
    <>
      <h2>{count}</h2>
      <button onClick={increasNum}>+1</button>
      <button onClick={decreasNum}>-1</button>
    </>
  );
}

export default Counter;
