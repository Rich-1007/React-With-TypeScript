type massageprops = {
  status: "lodding" | "succesful" | "Error";
};

const UnionType = (props: massageprops) => {
  let massage;
  if (props.status === "lodding") {
    massage = "lodding...";
  } else if (props.status === "succesful") {
    massage = "Data fetched succesfully";
  } else if (props.status === "Error") {
    massage = "Error fetching data";
  }
  return (
    <>
      <div>
        <h2>Massage - {massage}</h2>
      </div>
    </>
  );
};

export default UnionType;
