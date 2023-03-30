import DarkIcon from "./DarkIcon";
import LightIcon from "./LightIcon";
import React, { useEffect, useContext } from "react";
import { NetworkContext } from "../../App";

// create context for current network in navbar and export it to be used in other components (e.g. GasPrice.tsx) to display the current network data typescript

const Navbar = ({
  theme,
  toggleTheme,
}: {
  theme: string;
  toggleTheme: () => void;
}) => {
  const [currentNetwork, setCurrentNetwork] = useContext(NetworkContext);

  const renderIcon = () => {
    if (theme === "dark") {
      return <LightIcon />;
    } else {
      return <DarkIcon />;
    }
  };

  useEffect(() => {
    console.log(currentNetwork);
  }, [currentNetwork]);

  return (
    <div className="navbar bg-base-200">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 bg-base-200"
          >
            <li tabIndex={0}>
              <a>
                Arbitrum
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <ul className="p-2 bg-base-300 z-10">
                <li>
                  <a onClick={() => setCurrentNetwork("Arbitrum")}>Arbitrum</a>
                </li>
                <li>
                  <a onClick={() => setCurrentNetwork("Arbitrum Nova")}>
                    Arbitrum Nova
                  </a>
                </li>
              </ul>
            </li>
            <li tabIndex={0}>
              <a>
                ZKSync
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <ul className="p-2 bg-base-300 z-10">
                <li>
                  <a onClick={() => setCurrentNetwork("ZKsync Lite")}>
                    ZKsync Lite
                  </a>
                </li>
                <li>
                  <a onClick={() => setCurrentNetwork("ZKsync Era")}>
                    ZKsync Era
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a onClick={() => setCurrentNetwork("Optimism")}>Optimism</a>
            </li>
            <li>
              <a onClick={() => setCurrentNetwork("Immutable X")}>
                Immutable X
              </a>
            </li>
            <li>
              <a onClick={() => setCurrentNetwork("Loopring")}>Loopring</a>
            </li>
            <li>
              <a onClick={() => setCurrentNetwork("Ethereum")}>Ethereum</a>
            </li>
            <li>
              <a onClick={() => setCurrentNetwork("Polygon")}>Polygon</a>
            </li>
            <li>
              <a onClick={() => setCurrentNetwork("BNB Chain")}>BNB Chain</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">Orbiter Gas</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li tabIndex={0}>
            <a>
              Arbitrum
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </a>
            <ul className="p-2 bg-base-300 z-10">
              <li>
                <a onClick={() => setCurrentNetwork("Arbitrum")}>Arbitrum</a>
              </li>
              <li>
                <a onClick={() => setCurrentNetwork("Arbitrum Nova")}>
                  Arbitrum Nova
                </a>
              </li>
            </ul>
          </li>
          <li tabIndex={0}>
            <a>
              ZKSync
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </a>
            <ul className="p-2 bg-base-300 z-10">
              <li>
                <a onClick={() => setCurrentNetwork("ZKsync Lite")}>
                  ZKsync Lite
                </a>
              </li>
              <li>
                <a onClick={() => setCurrentNetwork("ZKsync Era")}>
                  ZKsync Era
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a onClick={() => setCurrentNetwork("Optimism")}>Optimism</a>
          </li>
          <li>
            <a onClick={() => setCurrentNetwork("Immutable X")}>Immutable X</a>
          </li>
          <li>
            <a onClick={() => setCurrentNetwork("Loopring")}>Loopring</a>
          </li>
          <li>
            <a onClick={() => setCurrentNetwork("Ethereum")}>Ethereum</a>
          </li>
          <li>
            <a onClick={() => setCurrentNetwork("Polygon")}>Polygon</a>
          </li>
          <li>
            <a onClick={() => setCurrentNetwork("BNB Chain")}>BNB Chain</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end" onClick={toggleTheme}>
        {renderIcon()}
      </div>
    </div>
  );
};

export default Navbar;
