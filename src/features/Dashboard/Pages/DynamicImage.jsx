import PreLoader from "../../../components/Shared/PreLoader";
import { useGenerateSquareImages } from "../../../hooks";

const DynamicImage = () => {
  const { data: blob, isLoading } = useGenerateSquareImages();

  return (
    <>
      {isLoading ? (
        <div className="grid place-items-center h-[580px]">
          <PreLoader />
        </div>
      ) : (
        <div className="py-2 px-[38.875px] flex flex-col bg-[#f5f5f5] rounded-lg w-full">
          <div className="flex flex-col gap-2 pt-4 ">
            <p className="text-[30.4px] leading-11 font-bold">
              Welcome, Accra!
            </p>
            <p>Account Balance</p>
            <img src={blob} alt="" />
          </div>
          <div>
            <div className="py-4 font-bold leading-6 text-[#211E22]">
              <p className="text-base">Project Routes</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DynamicImage;
