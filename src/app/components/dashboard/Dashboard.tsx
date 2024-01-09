import Navbar from "./Navbar";
import Transactions from "./Transacation";
import Information from "./Information";

const Dashboard = () => {
  return (
    <div className="w-full bg-[#FAFAFA] h-screen overflow-auto">
      <Navbar />
      <div className="p-6 flex flex-col gap-8">
        <Information />
        <Transactions />
      </div>
    </div>
  );
};

export default Dashboard; 