import Button from "./BUtton"
import ProfilePicture from "./ProfilePicture";

function App() {

  const handleClick = (e) => e.target.textContent = "OUCH!";

  return (
    //<button onClick={(e) => handleClick(e)}>Click me</button> 
    <ProfilePicture />
  );
}

export default App
