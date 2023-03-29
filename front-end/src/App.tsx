import { useState } from "react";
import Donate from "./Components/Navbar/Donate";
import Navbar from "./Components/Navbar/Navbar";
import Main from "./Components/Main/Main";
function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("retro");
    } else {
      setTheme("dark");
    }
  };

  return (
    <div
      className="App min-h-[100vh] flex flex-col justify-start items-center"
      data-theme={theme}
    >
      <Donate theme={theme} />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Main />
    </div>
  );
}

export default App;
