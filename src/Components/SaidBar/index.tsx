import { Categories } from "../../Constants";
import { Link, NavLink } from "react-router-dom";

type NavLink = {
  NavLink: React.ReactNode;
};

interface saidbar {
  name: string;
  icon: React.ReactNode;
}

const Sadbar = () => {
  return (
    <div className="px-5 mt-[80px] flex gap-4 overflow-auto box">
      {Categories.map((e: saidbar) => (
        <NavLink
          style={{ borderRadius: "12px" }}
          className={"flex gap-3  bg-slate-900 text-white link"}
          to={`categ/${e.name}`}
        >
          {e.icon} {e.name}
        </NavLink>
      ))}
    </div>
  );
};

export default Sadbar;
