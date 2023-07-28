import logoSmall from "../../public/logo-small.svg";
import chat from "../../public/chat.svg";
import bell from "../../public/bell.svg";
import lyne from "../../public/lyne.svg";
import menu from "../../public/menu.svg";
import { useState } from "react";
import Sidebar from "./Sidebar";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleMenuClick = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="w-full px-4 py-4 flex bg-white">
      <div className="w-1/2 flex items-start gap-2">
        <img src={logoSmall} alt="Reachout.ai" />
        <p className="text-xs font-medium">
          My Jobs &gt; Frontend Developer &gt; Job Management
        </p>
      </div>

      <div className="w-1/2 flex items-start justify-end gap-4">
        <img className="h-6" src={chat} alt="Chat" />
        <img className="h-6" src={bell} alt="Bell" />
        <img src={lyne} alt="Malida Lyne" />

        <div onClick={handleMenuClick}>
          <img src={menu} alt="Menu" className="h-6" />
        </div>
      </div>

      {isSidebarOpen && <Sidebar />}
    </div>
  );
};

export default Header;
