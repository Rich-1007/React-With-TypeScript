type greetProps = {
  name: string;
  massage: number;
  islogedin: boolean;
};

const Greet = (props: greetProps) => {
  return (
    <>
      <div>
        {props.islogedin ? (
          <h2>
            Hello {props.name} Ghosh You have {props.massage} Unread Massage
          </h2>
        ) : (
          <h2>Welcome Guest</h2>
        )}
      </div>
    </>
  );
};

export default Greet;
