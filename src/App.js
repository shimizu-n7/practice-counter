import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <Counter />
    </>
  );
}

// あとで共通化
// const handleClick = ({setState, operator}) =>{
//   setState(prev => prev + 1);
// }

function Counter() {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);

  const handleStepPlus = () => {
    setStep((s) => s + 1);
  };

  const handleStepMinus = () => {
    setStep((s) => s - 1);
  };

  const handleCountPlus = () => {
    setCount((c) => c + step);
  };

  const handleCountMinus = () => {
    setCount((c) => c - step);
  };
  const now = new Date();
  now.setDate(now.getDate() + count);

  const formattedDate = now.toLocaleDateString("en-US", {
    year: "numeric", // 年を数値で
    month: "long", // 月を長い名前で（例：January）
    day: "numeric", // 日を数値で
  });

  return (
    <div>
      <div>
        <button onClick={handleStepMinus}>-</button>
        <p>Step: {step}</p>
        <button onClick={handleStepPlus}>+</button>
      </div>

      <div>
        <button onClick={handleCountMinus}>-</button>
        <p>Count: {count}</p>
        <button onClick={handleCountPlus}>+</button>
      </div>
      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{formattedDate}</span>
      </p>
    </div>
  );
}

export default App;
