# React Router - Core Theoretical Concepts

This document provides a comprehensive theoretical guide to the fundamental concepts of **React Router (v6+)**, based on the code patterns in [`script.jsx`](file:///Users/pranav/PRNV/Programs/WebDevSession/ReactRouter/script.jsx).

---

## Overview

In traditional web applications, navigating between pages requires the browser to request a new HTML document from the server, causing a full page refresh. 

**React Router** enables **Client-Side Routing** for React Single Page Applications (SPAs). It intercepts URL changes in the browser address bar and conditionally renders components based on the active path without re-fetching HTML from a server or refreshing the page.

---

## Core Concepts Breakdown

### Concept 1: Declarative Navigation with `<Link>`

In a React SPA, using standard HTML anchor tags (`<a href="/about">About</a>`) triggers a full browser reload, resetting React component state and destroying app performance advantages.

#### Theoretical Purpose
The `<Link>` component provides client-side navigation. It updates the URL in the browser address bar using the HTML5 `history.pushState` API under the hood and notifies React Router to swap out views seamlessly without reloading the document.

#### Syntax & Pattern
```jsx
import { Link } from "react-router-dom";

<Link to='/about'>About</Link>
```

#### Key Props
* **`to`**: Specifies the target URL path to navigate to (e.g., `'/about'`, `'/projects/123'`).

---

### Concept 2: Defining Routes with `<Routes>` & `<Route>`

Route matching is the mechanism that determines which component to render based on the current browser URL path.

#### Theoretical Purpose
* **`<Routes>`**: Acts as a container for all route definitions. It looks through all its child `<Route>` elements to find a match between the current location/URL and renders the single best matching route.
* **`<Route>`**: Defines the mapping between a specific URL path and the React component (`element`) that should be rendered when that path matches.

#### Syntax & Pattern
```jsx
import { Routes, Route } from "react-router-dom";

<Routes>
    <Route path='/' element={<Home />} />
    <Route path='/about' element={<About />} />
</Routes>
```

#### Key Props
* **`path`**: The URL pattern to match against (e.g., `'/'` for root, `'/about'`).
* **`element`**: The React element/component to render when the route path matches the current URL.

---

### Concept 3: Dynamic Route Parameters & `useParams`

Applications often require routes that handle dynamic data, such as viewing specific user profiles (`/users/42`) or project details (`/projects/101`).

#### Theoretical Purpose
Dynamic parameters allow path segments to act as variables. Using the `:` placeholder in a route path (e.g., `path='/projects/:id'`), React Router captures the value segment of the URL. 

The custom React hook **`useParams`** extracts these dynamic route parameters from the current URL into a key-value object inside functional components.

#### Syntax & Pattern
```jsx
import { useParams } from 'react';

function ProjectDetail() {
    const { id } = useParams();
    return <h1>Viewing Project ID: {id}</h1>;
}
```

#### Corresponding Route Definition
To pass `id` to the `ProjectDetail` component, the parent route definition would look like:
```jsx
<Route path="/projects/:id" element={<ProjectDetail />} />
```

---

## Summary of Execution Flow

1. User clicks a `<Link to="/projects/42">`.
2. `<Link>` updates the URL bar to `/projects/42` without refreshing the page.
3. `<Routes>` inspects the route definitions and matches `<Route path="/projects/:id" element={<ProjectDetail />} />`.
4. `ProjectDetail` mounts, calls `useParams()`, extracts `{ id: "42" }`, and renders `Viewing Project ID: 42`.
