export const EmptyState = () => {
  return (
    <div className="py-16 px-3  flex flex-col items-center max-w-[434px] m-auto h-full">
      <div className="w-12 h-12 my-4">
        <EmptyState />
      </div>
      <p className="text-[#84868C] text-sm leading-6 text-center">
        You currently not servicing any loan yet. Click on apply for a loan to
        start your appliication
      </p>
    </div>
  );
};
