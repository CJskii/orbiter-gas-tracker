const Charts = () => {
  return (
    <div className="charts pt-8">
      <div className="median flex justify-between items-center w-full">
        <div className="flex flex-col justify-center items-center">
          <span>Median Gas Price, Last Hour </span>
          <button className="btn loading mt-4">Coming soon...</button>
          {/* TODO: Add chart here */}
        </div>

        <div className="flex flex-col justify-center items-center">
          <span>Median Gas Price, Last 24Hours </span>
          <button className="btn loading mt-4">Coming soon...</button>
          {/* TODO: Add chart here */}
        </div>
      </div>
      <div className="median-chart flex flex-col justify-center items-center pt-4">
        <span>Median Gas Price (14Days) 🧮</span>
        <button className="btn loading mt-4">Coming soon...</button>
        {/* TODO: Add chart here */}
      </div>
    </div>
  );
};

export default Charts;
