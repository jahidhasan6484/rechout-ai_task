import { useEffect, useState } from "react";
import logo from "../../public/logo.svg";
import { MenuList } from "../Data/Data";

const Sidebar = () => {
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    setMenus(MenuList);
  }, []);

  return (
    <div className="fixed top-0 left-0 h-screen w-64 bg-white text-white z-50 py-12 px-4">
      <img className="mb-12" src={logo} alt="Reachout.ai" />

      {menus.length > 0 &&
        menus.map((menu, index) => {
          const { name, imageURL } = menu;

          if (index === 0) {
            return (
              <div
                key={index}
                className="flex gap-x-2.5 py-4 px-5 rounded-full bg-secondary justify-center my-2"
              >
                <p className="text-white text-sm">{name}</p>
                <img src={imageURL} alt="Create New Job" />
              </div>
            );
          }
          return (
            <div
              key={index}
              className="flex gap-x-2.5 py-4 px-5 rounded-full hover:bg-primary my-2"
            >
              <img src={imageURL} alt={name} />
              <p className="text-black text-sm">{name}</p>
            </div>
          );
        })}
    </div>
  );
};

export default Sidebar;
