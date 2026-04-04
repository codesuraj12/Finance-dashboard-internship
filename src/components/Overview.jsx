
import SummaryCard from "./SummaryCard";
import Charts from "./Charts";



const Overview = () => {

  

  return (
    <div className="bg-gray-50">
      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <SummaryCard title="Total Balance"  />
        <SummaryCard title="Income"  />
        <SummaryCard title="Expenses" />

      </div>

      {/* Charts */}
      <div className=" mt-6">
        <Charts  />
      </div>

   
    </div>
  );
};

export default Overview;