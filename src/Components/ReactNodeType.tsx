// type HeadingProps = {
//   children: string;
// };
// const ReactNodeType = (props: HeadingProps) => {
//   return <div>{props.children}</div>;
// };


// export default ReactNodeType;

type HeadingProps = {
  children: React.ReactNode;
};
const ReactNodeType = (props: HeadingProps) => {
  return <div>{props.children}</div>;
};

export default ReactNodeType;
