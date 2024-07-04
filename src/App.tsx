import Greet from "./Components/Greet";
import { Person } from "./Components/Person";
import PersonList from "./Components/PersonList";

function App() {
  const fullnames = {
    first: "Manoj",
    last: "kumar",
  };

  const NameList = [
    { first: "Tara", last: "Kumar" },
    { first: "Kushal", last: "Kumar" },
    { first: "Manoj", last: "Kumar" },
  ];

  return (
    <>
      <div>
        <Greet name="Hricheak" massage={10} islogedin={false} />
        <Person fullname={fullnames} />

        <PersonList names={NameList} />
      </div>
    </>
  );
}

export default App;
