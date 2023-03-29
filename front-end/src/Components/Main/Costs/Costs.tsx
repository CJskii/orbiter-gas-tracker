import Table from "./CostTable";
import * as rawData from "../../../data/data_out.json";
const Costs = () => {
  const data = JSON.parse(JSON.stringify(rawData));
  console.log(data);

  return (
    <div>
      <div>Latest Swap Transaction costs</div>
      <div className="overflow-x-auto pt-8">
        {Object.keys(data).map((networkFrom, index) => {
          if (index < 1) {
            return (
              <Table
                data={data[networkFrom]}
                networkFrom={networkFrom}
                key={index}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default Costs;
