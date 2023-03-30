import Table from "./CostTable";
import * as rawData from "../../../data/data_out.json";
import { useContext, useState } from "react";
import { NetworkContext } from "../../../App";
const Costs = () => {
  const data = JSON.parse(JSON.stringify(rawData));
  const [network, setNetwork] = useContext(NetworkContext);
  const [dataFound, setDataFound] = useState(false);

  return (
    <div>
      <div>Latest Swap Transaction costs</div>
      <div className="overflow-x-auto pt-8">
        {Object.keys(data).map((networkFrom, index) => {
          if (networkFrom == network) {
            return (
              <Table
                data={data[networkFrom]}
                networkFrom={networkFrom}
                key={index}
              />
            );
          }
        })}
        {dataFound ? null : (
          <div className="py-8">
            <span className="text-2xl">
              Currently data for {network} is not available
            </span>
            <p className="text-lg">Please check back later...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Costs;
