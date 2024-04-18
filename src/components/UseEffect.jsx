import { useEffect, useState } from "react";
import { Button, Spinner } from "flowbite-react";

const UseEffect = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://bible-api.com/john 3:16?verse_numbers=true"
        );
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Data fetching error:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="max-w-auto m-20 p-10 mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <h2 className="text-gray-800 font-bold text-xl mb-2">useEffect Hook</h2>
      <div className="flex flex-wrap">
        {data ? (
          <div className="text-sm">{<pre>{JSON.stringify(data, null, 2)}</pre>}</div>
        ) : (
          <Button color="gray">
            <Spinner aria-label="Spinner button" size="md" />
            <span className="pl-3">Loading...</span>
          </Button>
        )}
      </div>
    </div>
  );
};

export default UseEffect;
