import React from "react";
import Header from "./Header";
import GasLabel from "./GasLabel";
import GasInfo from "./GasInfo";
import Charts from "./Charts/Charts";
import Costs from "./Costs/Costs";

const Main = () => {
  return (
    <main className="max-w-[1440px] w-full h-full px-4 py-8">
      <Header />
      <GasLabel />
      <GasInfo />
      <Charts />
      <Costs />
    </main>
  );
};

export default Main;
