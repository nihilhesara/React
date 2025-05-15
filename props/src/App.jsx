import Student from "./Student";

function App() {
  return (
    <>
      <Student name="Nihil" age={22} isStudent={true} /> {/* ✅ age as number */}
      <Student name="Hesara" age={30} isStudent={false} />
      <Student /> {/* ✅ Should use defaultProps */}
    </>
  );
}

export default App;

// props = read-only properties that are shared between components. a parent component can send data to a child component.
// <Component key=value>

// propTypes = a machanism that ensure that the passed value is of the correct datatype.
// eg:- age: PropType.number

// defaultProps = default values for props in case they are not passes from the parent component
// name: "Guest"