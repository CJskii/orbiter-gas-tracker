import { useState } from "react";
import Donate from "./Components/Donate";
import Navbar from "./Components/Navbar";
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
    <div className="App min-h-[100vh]" data-theme={theme}>
      <Donate />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
    </div>
  );
}

export default App;
