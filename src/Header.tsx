import * as React from "react";

interface Iprops {
  name?: string;
}

const Header: React.FC<Iprops> = (props: Iprops) => (
  <h1>Hello {props.name}! Welcome to React using TypeScript</h1>
);

Header.defaultProps = {
  name: "world"
};

export default Header;
