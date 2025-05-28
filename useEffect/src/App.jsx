import MyComponent from "./MyComponent";

function App() {
  return(
    <MyComponent />
  );
}

export default App

// useEffect() = React Hook that tells React DO SOME CODE WHEN (pick one):
//               This component re-rendered 
//               This component mounts
//               The state of the value 

// useEffect(function, [dependencies])

// 1. useEffect(() => {})            // Runs after rerender
// 2. useEffect(() => {}, [])        // Runs only on mount
// 3. useEffect(() => {}, [value])   // Runs on mount + when value changes

// USES 
// #1 Event Listners 
// #2 DOM manipulation 
// #3 Subscriptions (real-time update)
// #4 Fetching Data from API 
// #5 Cleanup when a component unmounts