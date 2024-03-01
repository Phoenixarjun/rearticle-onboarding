import Navbar from "../components/ui/Navbar";
import Sidebar from "../components/ui/Sidebar";
import DashboardContent from "../components/ui/DashboardContent";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="flex gap-3">
        <Sidebar />
        <DashboardContent />
        {/* <Outlet /> */}
      </div>
    </div>
  );
};

export default DashboardLayout;
