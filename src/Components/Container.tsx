import { CSSProperties } from "react";

type ContainerProp = {
  style: CSSProperties;
};

const Container = (props: ContainerProp) => {
  return <div style={props.style}>Abcd E</div>;
};

export default Container;
