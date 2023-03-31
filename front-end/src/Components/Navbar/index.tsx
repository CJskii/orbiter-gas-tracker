import DarkIcon from "./DarkIcon";
import LightIcon from "./LightIcon";
import React, { useContext } from "react";
import { NetworkContext } from "../../App";
import Dropdown from "./Dropdown";
import DropdownContent from "./DropdownContent";
import NaviLinks from "./NaviLinks";
import Logo from "./Logo";

const Navbar = ({ toggleTheme }: { toggleTheme: () => void }) => {
  const [currentNetwork, setCurrentNetwork] = useContext(NetworkContext);

  const renderIcon = () => {
    return (
      <label className="swap swap-rotate">
        <input type="checkbox" onClick={toggleTheme} />
        <DarkIcon />
        <LightIcon />
      </label>
    );
  };

  return (
    <div className="navbar bg-base-200">
      <div className="navbar-start">
        <div className="dropdown">
          <Dropdown />
          <DropdownContent setCurrentNetwork={setCurrentNetwork} />
        </div>
        <Logo />
      </div>
      <div className="navbar-center hidden lg:flex">
        <NaviLinks setCurrentNetwork={setCurrentNetwork} />
      </div>
      <div className="navbar-end">{renderIcon()}</div>
    </div>
  );
};

export default Navbar;
