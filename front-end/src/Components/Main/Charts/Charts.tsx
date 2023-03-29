const Charts = () => {
  return (
    <div className="charts pt-8">
      <div className="median flex justify-between items-center w-full">
        <div>Median Gas Price, Last Hour</div>
        {/* TODO: Add chart here */}
        <div>Median Gas Price, Last 24Hours</div>
        {/* TODO: Add chart here */}
      </div>
      <div className="median-chart flex justify-between items-center pt-4">
        <span>Median Gas Price (14Days) 🧮</span>
        {/* TODO: Add chart here */}
      </div>
    </div>
  );
};

export default Charts;
