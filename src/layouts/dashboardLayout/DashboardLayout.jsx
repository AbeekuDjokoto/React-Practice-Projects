import { Outlet } from "react-router";
import Sidebar from "../../components/Sidebar/Sidebar";

const DashboardLayout = () => {
  return (
    <div className="">
      <div className="flex gap-8 h-screen">
        <Sidebar />
        <div className="max-w-[1050px] w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
