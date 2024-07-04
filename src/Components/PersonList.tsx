type abc = {
  names: { first: string; last: string }[];
};

const PersonList = (props:abc) => {
  return (
    <>
      <div>{props.names.map((item) => 
    <h2>{item.first} {item.last}</h2>
    )}</div>
    </>
  );
};

export default PersonList;
