import { useState } from "react";
import { Button } from "flowbite-react";

const UseState = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="max-w-lg m-20 p-10 mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="flex justify-center items-center gap-2 flex-col">
      <h2 className="text-gray-800 font-bold text-xl mb-2">useState Hook</h2>
        <div className="text-red-500 text-2xl m-10">{count}</div>
        <Button.Group outline>
          <Button onClick={increment} gradientDuoTone="cyanToBlue">
            Increment
          </Button>
          <Button onClick={reset} gradientDuoTone="cyanToBlue">Reset</Button>
          <Button onClick={decrement} gradientDuoTone="cyanToBlue">
            Decrement
          </Button>
        </Button.Group>
      </div>
    </div>
  );
};

export default UseState;
