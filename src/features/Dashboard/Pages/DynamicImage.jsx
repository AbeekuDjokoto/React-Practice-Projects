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
        <div className="flex flex-col rounded-lg w-full">
          <div className="flex flex-col gap-2 text-[#2d2f31] text-center py-4 border border-[#d1d7dc]">
            <p className="text-2xl leading-[29px] font-bold">Dynamic Images</p>
            <p className="text-base leading-[22px]">
              Edit your account settings and change your password here.
            </p>
          </div>
          <div className="border border-b-[#d1d7dc] border-l-[#d1d7dc] border-r-[#d1d7dc]">
            <div className="mx-auto w-[90%] lg:w-[69%] flex flex-col gap-2 py-6">
              <p className="text-sm leading-[17px] font-bold text-[#2d2f31]">
                Dynamic Images
              </p>
              <img src={blob} alt="" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DynamicImage;
