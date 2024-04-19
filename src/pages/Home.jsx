import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-6 px-4 mx-auto max-w-screen-xl lg:py-8 lg:px-6 ">
          <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
            <h2 className="mb-4 text-4xl lg:tracking-widest sm:tracking-tight font-extrabold text-blue-900 dark:text-white">
              React Hooks
            </h2>
            <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
              React hooks are functions that enable you to use state and other
              React features in functional components. They were introduced in
              React 16.8 as a way to add state and other React features to
              functional components without needing to convert them to class
              components.
            </p>
            <hr className="" />
          </div>
          <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
            {/* useState */}
            <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
              <Link to={"/usestate"}>
                <img
                  className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                  src="/hook.jpg"
                  alt="Bonnie Avatar"
                />
              </Link>
              <div className="p-5">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  useState Hook
                </h3>

                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                  useState is a React Hook that lets you add a state variable to
                  your component
                </p>
                <Link to={"/usestate"}>
                  <span className="text-blue-600 hover:cursor-pointer hover:underline">
                    see more
                  </span>
                </Link>
              </div>
            </div>
            {/* useEffect */}
            <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
              <Link to={"/useeffect"}>
                <img
                  className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                  src="/hook.jpg"
                  alt="Bonnie Avatar"
                />
              </Link>
              <div className="p-5">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  useEffect Hook
                </h3>

                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                  useEffect is a React Hook that lets you synchronize a
                  component with an external system
                </p>
                <Link to={"/useeffect"}>
                  <span className="text-blue-600 hover:cursor-pointer hover:underline">
                    see more
                  </span>
                </Link>
              </div>
            </div>
            {/* useCallback */}
            <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
              <Link to={"/usecallback"}>
                <img
                  className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                  src="/hook.jpg"
                  alt="Bonnie Avatar"
                />
              </Link>
              <div className="p-5">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  useCallback Hook
                </h3>

                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                  useCallback is a React Hook that lets you cache a function
                  definition between re-renders
                </p>
                <Link to={"/usecallback"}>
                  <span className="text-blue-600 hover:cursor-pointer hover:underline">
                    see more
                  </span>
                </Link>
              </div>
            </div>
            {/* useContext */}
            <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
              <Link to={"/usecontext"}>
                <img
                  className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                  src="/hook.jpg"
                  alt="Bonnie Avatar"
                />
              </Link>
              <div className="p-5">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  useContext Hook
                </h3>

                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                  useContext is a React Hook that lets you read and subscribe to
                  context from your component
                </p>
                <Link to={"/usecontext"}>
                  <span className="text-blue-600 hover:cursor-pointer hover:underline">
                    see more
                  </span>
                </Link>
              </div>
            </div>
            {/* useMemo */}
            <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
              <Link to={"/usememo"}>
                <img
                  className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                  src="/hook.jpg"
                  alt="Bonnie Avatar"
                />
              </Link>
              <div className="p-5">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  useMemo Hook
                </h3>

                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                  useMemo is a React Hook that lets you cache the result of a
                  calculation between re-renders
                </p>
                <Link to={"/usememo"}>
                  <span className="text-blue-600 hover:cursor-pointer hover:underline">
                    see more
                  </span>
                </Link>
              </div>
            </div>
            {/* useReducer */}
            <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
              <Link to={"/usereducer"}>
                <img
                  className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                  src="/hook.jpg"
                  alt="Bonnie Avatar"
                />
              </Link>
              <div className="p-5">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  useReducer Hook
                </h3>

                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                  useReducer is a React Hook that lets you add a reducer to your
                  component
                </p>
                <Link to={"/usereducer"}>
                  <span className="text-blue-600 hover:cursor-pointer hover:underline">
                    see more
                  </span>
                </Link>
              </div>
            </div>
            {/* useRef */}
            <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
              <Link to={"/useref"}>
                <img
                  className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                  src="/hook.jpg"
                  alt="Bonnie Avatar"
                />
              </Link>
              <div className="p-5">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  useRef Hook
                </h3>

                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                  useRef is a React Hook that lets you reference a value that’s
                  not needed for rendering
                </p>
                <Link to={"/useref"}>
                  <span className="text-blue-600 hover:cursor-pointer hover:underline">
                    see more
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
