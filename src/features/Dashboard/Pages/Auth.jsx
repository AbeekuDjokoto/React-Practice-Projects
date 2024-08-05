import PreLoader from "../../../components/Shared/PreLoader";
import { useUserData } from "../../../hooks";
import ProfileSettingsForm from "../components/ProfileSettingsForm/ProfileSettingsForm";

const Auth = () => {
  const { data, isLoading } = useUserData();

  return (
    <>
      {isLoading ? (
        <div className="grid place-items-center h-[580px]">
          <PreLoader />
        </div>
      ) : (
        <div className="flex flex-col rounded-lg w-full">
          <div className="flex flex-col gap-2 text-[#2d2f31] text-center py-4 border border-[#d1d7dc]">
            <p className="text-2xl leading-[29px] font-bold">Public profile</p>
            <p className="text-base leading-[22px]">
              Add information about yourself
            </p>
          </div>
          <ProfileSettingsForm data={data} />
        </div>
      )}
    </>
  );
};

export default Auth;
