import React from "react";
import Nav from "./Nav";

const Page = ({ children }) => (
  <>
    <Nav />
    {children}
  </>
);

export default Page;
