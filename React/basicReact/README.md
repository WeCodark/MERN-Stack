# React Basics & Project Overview

This project is a fundamental exploration of **React**, a powerful JavaScript library for building user interfaces. It demonstrates key React concepts through a simple, interactive application.

## What is React?

React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called "components".

### Key Theoretical Concepts

*   **Components**: The building blocks of any React application. A component is a self-contained module that renders some output. They can be conceptualized as JavaScript functions that return HTML elements (via JSX).
*   **JSX (JavaScript XML)**: A syntax extension for JavaScript that looks similar to HTML. It allows us to write HTML structures directly within JavaScript code, making it easier to visualize the UI layout.
*   **Virtual DOM**: React keeps a lightweight representation of the "real" DOM in memory. When the state of an object changes, React updates the Virtual DOM first, compares it with the previous version (diffing), and then efficiently updates only the changed elements in the real DOM.
*   **One-Way Data Flow**: Data has a single source of truth and flows down from parent to child components, making the application easier to debug and understand.

---

## Topics Covered in `basicReact`

This project specifically implements and demonstrates the following React features:

### 1. Functional Components
Modern React relies heavily on functional components. `App.js` and `Header.js` (in components) are examples of these. They are simple JavaScript functions that accept props and return React elements.

### 2. State Management with `useState` Hook
The `useState` hook is used to add state to functional components.
*   **Theory**: State represents parts of an app that can change. When state changes, React re-renders the component to reflect the new state.
*   **In this project**: We use `useState(0)` to initialize a counter. The `setCounter` function is then used to update this value when the button is clicked.

```javascript
const [count, setCounter] = useState(0);
```

### 3. Side Effects with `useEffect` Hook
The `useEffect` hook lets you perform side effects in function components (like data fetching, manual DOM manipulations, or logging).
*   **Theory**: It serves the same purpose as lifecycle methods like `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` in class components.
*   **In this project**: We use `useEffect` to log a message ("component rendered") essentially mimicking `componentDidMount` by passing an empty dependency array `[]`.

```javascript
useEffect(() => {
  console.log('component rendered');
}, []);
```

### 4. Event Handling
React events are named using camelCase, rather than lowercase.
*   **In this project**: The `onClick` event is used on the button to trigger the state update function.

---

## How to Run This Project

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Project Structure

*   **/src**: Contains the source code of the application.
    *   `App.js`: The main component acting as the container.
    *   `App.css`: Styles for the App component.
    *   `/components`: Folder for reusable components like `Header`.
*   **/public**: Contains the static assets like `index.html`.
