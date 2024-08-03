const ButtonLoader = () => {
  return (
    <div className="inline-block relative w-6 h-6">
      <div className="absolute w-4.5 h-4.5 m-0.75 border-2.5 rounded-full animate-lds-ring border-transparent border-t-white"></div>
      <div className="absolute w-4.5 h-4.5 m-0.75 border-2.5 rounded-full animate-lds-ring border-transparent border-t-white"></div>
      <div className="absolute w-4.5 h-4.5 m-0.75 border-2.5 rounded-full animate-lds-ring border-transparent border-t-white"></div>
      <div className="absolute w-4.5 h-4.5 m-0.75 border-2.5 rounded-full animate-lds-ring border-transparent border-t-white"></div>
    </div>
  );
};

export default ButtonLoader;
