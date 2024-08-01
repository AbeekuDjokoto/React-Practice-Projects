import { Outlet } from "react-router";
import { Logo } from "../../assets/icons/icons";

const AuthLayouts = () => {
  return (
    <div className="max-w-[1440px] w-[90%] mx-auto ">
      <div className="flex flex-col">
        <header className="flex justify-between items-center pt-10 pb-6 border-b-[#93939a] border-b">
          <div className="max-w-[200px] w-full h-[54.66px]">
            <Logo />
          </div>
          <p className="text-base text-[#211e22] leading-6">Signup</p>
        </header>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AuthLayouts;
