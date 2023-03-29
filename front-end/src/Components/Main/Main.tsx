import React from "react";
import Header from "./Header/Header";
import GasLabel from "./Header/GasLabel";
import GasInfo from "./Header/GasInfo";
import Charts from "./Charts/Charts";
import Costs from "./Costs/Costs";
import Average from "./Average/Average";
import GasExplained from "./Explained/GasExplained";

const Main = () => {
  return (
    <main className="max-w-[1440px] w-full h-full px-4 py-8">
      <Header />
      <GasLabel />
      <GasInfo />
      <Charts />
      <Costs />
      <Average />
      <GasExplained />
    </main>
  );
};

export default Main;
