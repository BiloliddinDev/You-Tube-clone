import { ReactNode } from "react";
import Nav from "../Components/Nav";
import Sadbar from "../Components/SaidBar";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Nav />
      <Sadbar />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
