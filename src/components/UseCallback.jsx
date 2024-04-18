// Suppose we have a list of items that can be filtered based on a search query. We want to filter the items whenever the search query changes. We'll use useCallback to memoize the filtering function to optimize performance.

import { useCallback, useState } from "react";

function UseCallback() {
  const [searchQuery, setSearchQuery] = useState("");
  const [items, setItems] = useState([
    { id: 1, name: "Apple" },
    { id: 2, name: "Banana" },
    { id: 3, name: "Orange" },
    { id: 4, name: "Grapes" },
  ]);

  // Define a memoized callback function to filter items
  const filterItems = useCallback(
    (query) => {
      return items.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
      );
    },
    [items]
  ); // Re-create the filterItems function when items changes

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="max-w-lg m-20 p-10 mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="flex justify-center items-center gap-2 flex-col">
        <h2 className="text-gray-800 font-bold text-xl mb-2">
          useCallback Hook
        </h2>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="text"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
        <ul className="m-3 p-2">
          {/* Use the memoized filterItems function to filter items */}
          {filterItems(searchQuery).map((item) => (
            <li
              className="border px-[5rem] py-2 my-3 bg-blue-200 hover:animate-pulse cursor-pointer"
              key={item.id}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default UseCallback;
