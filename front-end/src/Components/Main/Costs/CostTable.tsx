interface DataProps {
  networkFrom: string;
  data: {};
}

const Table = ({ networkFrom, data }: DataProps) => {
  console.log(data);

  const transformData = (data: any) => {
    const transformedData = [];
    for (const [key, value] of Object.entries(data)) {
      const networkTo = key;
      const gas = value["gas fee"];
      const witholding = value["withholding fee"];
      const total = value.total;
      transformedData.push({
        networkTo,
        gas,
        witholding,
        total,
      });
      // do something with the variables here
    }
    return transformedData;
  };
  console.log(transformData(data));
  return (
    <div className="overflow-x-auto pt-8">
      <div>From: {networkFrom} </div>
      <table className="table table-compact w-full">
        <thead>
          <tr>
            <th></th>
            <th>To</th>
            <th>Gas Fee (gwei)</th>
            <th>Witholding Fee</th>
            <th>Total</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {transformData(data).map((item, index) => {
            return (
              <tr key={index}>
                <td></td>
                <td>{item.networkTo}</td>
                <td>{item.gas}</td>
                <td>{item.witholding}</td>
                <td>$ {item.total}</td>
                <td></td>
                <td></td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Table;
