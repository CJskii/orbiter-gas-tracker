import { useState, createContext } from "react";
import Donate from "./Components/Navbar/Donate";
import Navbar from "./Components/Navbar/Navbar";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";

export const NetworkContext = createContext<
  [string, React.Dispatch<React.SetStateAction<string>>]
>(["", () => {}]);

function App() {
  const [network, setNetwork] = useState("Arbitrum");
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("retro");
    } else {
      setTheme("dark");
    }
  };

  return (
    <NetworkContext.Provider value={[network, setNetwork]}>
      <div
        className="App min-h-[100vh] flex flex-col justify-start items-center"
        data-theme={theme}
      >
        <Donate theme={theme} />
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <Main />
        <Footer />
      </div>
    </NetworkContext.Provider>
  );
}

export default App;
