import ComponentA from "./ComponentA"

function App() {
  return(
    <ComponentA />
  );
}

export default App

// useContext() = React Hook that allows you to share values
//                between multiple levels of components
//                without passing props through each level

// in this code we are passing values using props through the components we called this 
// prop drilling.