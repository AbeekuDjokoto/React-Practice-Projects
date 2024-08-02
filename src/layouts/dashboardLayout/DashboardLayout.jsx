import { Outlet } from "react-router";
import Sidebar from "../../components/Sidebar/Sidebar";

const DashboardLayout = () => {
  return (
    <div className="">
      <div className="flex gap-8 h-screen">
        <Sidebar />
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
