# React Hooks With Examples:

## useState

useState() allows functional components to manage state without using class components

**importing**
import React, { useState } from 'react';
**usage**
const [state, setState] = useState(initialState);

## useEffect

useEffect is a Hook in React that allows you to perform side effects in function components
Side effects may include data fetching, subscriptions, or manually changing the DOM in React components. It serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount in class components.

## useCallback

useCallback is a hook in React that is used to memoize functions. It is similar to useMemo, but instead of memoizing values, it memoizes functions.

When you wrap a function with useCallback, React will memoize the function instance. This means that as long as the dependencies array remains the same, React will return the same instance of the function, optimizing performance by avoiding unnecessary re-renders in child components that depend on the function.

**Syntax**
const memoizedCallback = useCallback(
  () => {
    // Function body
  },
  [/* dependencies array */]
);


## useContext
useContext is a hook in React that allows you to consume values from a context without nesting multiple components. Context provides a way to pass data through the component tree without having to pass props down manually at every level.

Create the Theme Context:
Create a Component to Toggle the Theme:
Create a Component to Display Content Based on the Theme:
Wrap Your Application with the Theme Provider:

## useRef


## useReducer

## useMemo

## useLayoutEffect
