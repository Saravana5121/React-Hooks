import { Button } from "flowbite-react";
import { useState, useMemo } from "react";

const UseMemo = () => {
  const [toDo, setToDo] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addToDo = () => {
    if (inputValue.trim() !== "") {
      setToDo([...toDo, { id: toDo.length + 1, text: inputValue }]);
      setInputValue("");
    }
  };

  const filteredToDo = useMemo(() => {
    console.log("Filtering ToDos");
    return toDo.filter((toDo) => !toDo.completed);
  }, [toDo]);

  return (
    <>
      <div className="max-w-lg m-20 p-10 mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="flex justify-center items-center gap-2 flex-col">
          <h2 className="text-gray-800 font-bold text-xl mb-2">useMemo Hook</h2>
          <h2 className="text-gray-800 font-bold text-xl mb-2">ToDo App</h2>

          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter a ToDo.."
            className="w-full rounded-full m-3"
          />
          <Button onClick={addToDo}>Add ToDo</Button>
          <ul className="w-full text-lg m-2">
            {filteredToDo.map((toDo) => (
              <li
                className="m-2 flex justify-center items-center border p-2 rounded-lg hover:bg-slate-400 hover:text-white"
                key={toDo.id}
              >
                {toDo.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default UseMemo;
