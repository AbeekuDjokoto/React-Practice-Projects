import { Circles } from "react-loader-spinner";

const PreLoader = () => {
  return (
    <Circles
      height="80"
      width="80"
      color="#7b189f"
      ariaLabel="circles-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  );
};

export default PreLoader;
