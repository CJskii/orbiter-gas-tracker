interface Props {
  setCurrentNetwork: React.Dispatch<React.SetStateAction<string>>;
}

const NaviLinks = ({ setCurrentNetwork }: Props) => {
  return (
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
            <a onClick={() => setCurrentNetwork("ZKsync Lite")}>ZKsync Lite</a>
          </li>
          <li>
            <a onClick={() => setCurrentNetwork("ZKsync Era")}>ZKsync Era</a>
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
  );
};

export default NaviLinks;
