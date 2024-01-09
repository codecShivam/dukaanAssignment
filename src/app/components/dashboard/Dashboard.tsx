import Navbar from "./Navbar";
import Transactions from "./Transacation";

export default function Dashboard() {
  return (
    <div className="w-full bg-[#FAFAFA] h-screen overflow-auto">
      <Navbar />
      <div className="p-6 flex flex-col gap-8">
        <Transactions />
      </div>
    </div>
  );
}