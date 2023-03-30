import Table from "./CostTable";
import * as rawData from "../../../data/data_out.json";
import { useContext } from "react";
import { NetworkContext } from "../../../App";
const Costs = () => {
  const data = JSON.parse(JSON.stringify(rawData));
  const [network, setNetwork] = useContext(NetworkContext);
  console.log(data);

  const renderTable = () => {
    if (data[network]) {
      return <Table data={data[network]} networkFrom={network} />;
    } else {
      return (
        <div className="py-8">
          <span className="text-2xl">
            Currently data for {network} is not available
          </span>
          <p className="text-lg">Please check back later...</p>
        </div>
      );
    }
  };

  return (
    <div className="pt-16 text-2xl">
      <div>Latest Swap Transaction costs</div>
      <div className="overflow-x-auto">{renderTable()}</div>
    </div>
  );
};

export default Costs;
