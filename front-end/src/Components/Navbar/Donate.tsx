import { useEffect, useState } from "react";
const Donate = (theme: { theme: string }) => {
  const [hover, setHover] = useState<boolean>(false);
  const [hoverColorDark, setHoverColorDark] =
    useState<string>("text-orange-300");
  const [hoverColorRetro, setHoverColorRetro] =
    useState<string>("text-green-800");
  const [currentTheme, setCurrentTheme] = useState<string>(theme.theme);

  const hoverStyle = () => {
    if (hover && currentTheme === "dark") {
      return hoverColorDark;
    } else if (hover && currentTheme === "retro") {
      return hoverColorRetro;
    }
  };

  useEffect(() => {
    setCurrentTheme(theme.theme);
  }, [theme.theme]);

  return (
    <div className="alert shadow-lg flex justify-center items-center ">
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`stroke-current flex-shrink-0 h-6 w-6 ${hoverStyle()}`}
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        {/* This is the text that will be displayed on the page. */}

        <span className={`hover:cursor-pointer ${hoverStyle()}`}>
          Support this website!
        </span>
      </div>
    </div>
  );
};

export default Donate;
