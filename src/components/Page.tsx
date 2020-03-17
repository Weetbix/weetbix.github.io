import * as React from "react";
import Header from "./Header";

const A: React.FunctionComponent = ({ children }) => (
  <div>
    <Header />
    {children}
  </div>
);

export default A;
