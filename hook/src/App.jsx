import MyComponent from "./MyComponent"
import Counter from "./Counter";

function App() {
  return(
  <>
    <MyComponent />
    <Counter />
  </>
  );
}

export default App

// React hooks - Special function that allows functional components to use 
//               React features without writing class components (React v16.8) 
//               (useState, useEffect, useContext, useReducer, useCallback)

// useState - A React hook that allows the creation of a statefull variable 
//            AND a setter function to update its value in the Virtual DOM.
//            [name, setName]
