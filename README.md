# React Hooks With Examples:

## useState

useState() allows functional components to manage state without using class components

**importing**

```
import React, { useState } from 'react';
```

**usage**

```
const [state, setState] = useState(initialState);
```

## useEffect

useEffect is a Hook in React that allows you to perform side effects in function components
Side effects may include data fetching, subscriptions, or manually changing the DOM in React components. It serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount in class components.

## useCallback

useCallback is a hook in React that is used to memoize functions. It is similar to useMemo, but instead of memoizing values, it memoizes functions.

When you wrap a function with useCallback, React will memoize the function instance. This means that as long as the dependencies array remains the same, React will return the same instance of the function, optimizing performance by avoiding unnecessary re-renders in child components that depend on the function.

**Syntax**

```
const memoizedCallback = useCallback(
  () => {
    // Function body
  },
  [/* dependencies array */]
);
```

## useContext

useContext is a hook in React that allows you to consume values from a context without nesting multiple components. Context provides a way to pass data through the component tree without having to pass props down manually at every level.

Create the Theme Context:
Create a Component to Toggle the Theme:
Create a Component to Display Content Based on the Theme:
Wrap Your Application with the Theme Provider:

## useMemo

useMemo is a React Hook that lets you cache the result of a calculation between re-renders.

Memoizing expensive calculations so that they are only re-computed when their dependencies change. It's particularly useful when dealing with computations that are computationally expensive or involve heavy operations, such as complex calculations or data processing.

**Syntax**

```
const memoizedValue = useMemo(() => {
  // Expensive computation
  return computeValue(dependencies);
}, [dependencies]);
```

## useReducer

useReducer is a hook in React that is used for managing complex state logic within functional components. It offers an alternative to the useState hook when the state logic involves multiple sub-values or when the next state depends on the previous one.

The useReducer hook takes a reducer function and an initial state as arguments, and returns an array containing the current state and a dispatch function to dispatch actions to update the state.

```
const [state, dispatch] = useReducer(reducer, initialState);
```

## useRef

useRef is a hook in React that provides a way to persist mutable values across renders without causing re-renders when the value changes. It returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the entire lifetime of the component.
