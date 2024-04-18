// Suppose we have a theme context that stores the current theme of our application. We want to be able to access this theme from any component in our application without passing it down through props at every level of the component tree.

import "./UseContext.css";
import { createContext, useContext, useState } from "react";

const ThemeContext = createContext("light");

export default function MyApp() {
  const [theme, setTheme] = useState("light");
  return (
    <div className="max-w-lg m-20 p-10 mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="flex justify-center items-center gap-2 flex-col">
        <h2 className="text-gray-800 font-bold text-xl mb-2">useState Hook</h2>
        <ThemeContext.Provider value={theme}>
          <Form />
        </ThemeContext.Provider>
        <Button
          onClick={() => {
            setTheme(theme === "dark" ? "light" : "dark");
          }}
        >
          Toggle theme
        </Button>
      </div>
    </div>
  );
}

function Form({ children }) {
  return (
    <Panel title="Welcome to our platform. We're delighted to have you here!">
      <div className="flex justify-around items-center m-5">
        <Button>Sign up</Button>
        <Button>Log in</Button>
      </div>
    </Panel>
  );
}

function Panel({ title, children }) {
  const theme = useContext(ThemeContext);
  const className = "panel-" + theme;
  return (
    <section className={className}>
      <h1>{title}</h1>
      {children}
    </section>
  );
}

function Button({ children, onClick }) {
  const theme = useContext(ThemeContext);
  const className = "button-" + theme;
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}
