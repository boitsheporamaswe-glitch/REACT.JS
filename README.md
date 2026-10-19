# React Counter Practice

A responsive React learning project built with Vite for the Front-End Learning Series daily task. The app demonstrates reusable function components, props, independent state, event handlers, and rendering arrays with `.map()`.

## Features

- Two counter cards, each starting at zero with independent state
- Increase, decrease, and reset controls
- A controlled number input for setting each counter
- Conditional status text for zero, positive, and negative values
- Titles passed from the parent to each counter through props
- Three skills rendered from an array using `.map()` and stable keys
- Dark/light theme toggle
- Responsive dashboard styling, animated title and counter updates

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite in the terminal.

## Verify before submitting

```bash
npm run build
npm run lint
```

Both commands should complete without errors.

## Project structure

```text
src/
  App.jsx       # App, reusable Counter, props, and state
  App.css       # Dashboard, cards, themes, animations, responsive styles
  index.css     # Global typography and base styles
docs/
  project-guide.pdf
  project-guide.html
```

For a step-by-step explanation of how the project was built and how it works, see [`docs/project-guide.pdf`](./docs/project-guide.pdf). The printable HTML source is [`docs/project-guide.html`](./docs/project-guide.html).

## Learning notes

Each `Counter` owns its own `useState(0)` state, so changing one count does not change the other. Increase and Decrease use the setter with the previous state; Reset sets the count to zero. React re-renders the displayed count after each state update.

The title and skills arrive as props. Props are read-only component inputs. The three skills are rendered with `.map()` and each list item has a stable key. The app uses function components and JSX and does not manually update the DOM.

The dark/light theme and premium styling are presentation extras. This exercise does not use class components, `useEffect`, routing, APIs, Context, or Redux.

## Assignment checklist

- [x] Set up and run a basic Vite + React project
- [x] Use capitalized function components and JSX expressions
- [x] Use imports and exports to connect the app modules
- [x] Pass a title from parent to child as a prop
- [x] Create two independent counters initialized with `useState(0)`
- [x] Update counts with button event handlers and state setters
- [x] Handle number input events and show conditional status text
- [x] Re-render the UI when state changes
- [x] Render three skills with `.map()` and stable keys
- [x] Avoid direct DOM manipulation and direct state mutation

## Learning resources

- [React Quick Start](https://react.dev/learn)
- [Vite guide](https://vite.dev/guide/)
- [JSX markup](https://react.dev/learn/writing-markup-with-jsx)
- [Components and props](https://react.dev/learn/passing-props-to-a-component)
- [Events and state](https://react.dev/learn/responding-to-events)
- [Rendering lists](https://react.dev/learn/rendering-lists)
- [Conditional rendering](https://react.dev/learn/conditional-rendering)
