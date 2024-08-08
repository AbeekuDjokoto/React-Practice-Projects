import { Outlet } from "react-router";
import Sidebar from "../../components/Sidebar/Sidebar";

const DashboardLayout = () => {
  return (
    <div className="py-6">
      <div className="flex gap-5 h-screen max-w-custom ">
        <Sidebar />
        <div className="max-w-[1050px] w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
