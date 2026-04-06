
import SummaryCard from "./SummaryCard";
import Charts from "./Charts";



const Overview = () => {

  

  return (
    <div >
      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <SummaryCard title="Total Balance" background="bg-blue-100" />
        <SummaryCard title="Income" background= "bg-green-100" />
        <SummaryCard title="Expenses" background= "bg-red-100" />

      </div>

      {/* Charts */}
      <div className=" mt-6">
        <Charts  />
      </div>

   
    </div>
  );
};

export default Overview;