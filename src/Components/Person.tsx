type personprops = {
  fullname: {
    first: string;
    last: string;
  };
};

export const Person = (props: personprops) => {
  return (
    <div >
      {props.fullname.first} {props.fullname.last}
    </div>
  );
};
