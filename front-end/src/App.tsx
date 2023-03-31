import { useState, createContext } from "react";
import SupportUs from "./Components/Support/index";
import Navbar from "./Components/Navbar/index";
import Main from "./Components/Main/index";
import Footer from "./Components/Footer/index";

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
        <SupportUs theme={theme} />
        <Navbar toggleTheme={toggleTheme} />
        <Main />
        <Footer />
      </div>
    </NetworkContext.Provider>
  );
}

export default App;
