import Button from "./Components/Button";
import Container from "./Components/Container";
import Greet from "./Components/Greet";
import { Person } from "./Components/Person";
import PersonList from "./Components/PersonList";
import ReactNodeType from "./Components/ReactNodeType";
import Loggedin from "./Components/State/Loggedin";
import User from "./Components/State/User";
import UnionType from "./Components/UnionType";

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
        {/* <Greet name="Hricheak" massage={10} islogedin={false} />
        <Person fullname={fullnames} />

        <PersonList names={NameList} /> */}
        {/* <UnionType status="succesful" /> */}
        {/* <ReactNodeType><div>hjtyjhh</div></ReactNodeType> */}

        {/* <Button
          handleClick={() => {
            console.log("Button Clicked");
          }}
        /> */}

        {/* <Container style={{ border: "3px solid orange" }} /> */}

        {/* <Loggedin /> */}

        <User />
      </div>
    </>
  );
}

export default App;
