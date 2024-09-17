import { useNavigate } from "react-router";
import { BaseInput, EmptyState, Table } from "../../../components";
import PreLoader from "../../../components/Shared/PreLoader";
import { useProducts } from "../../../hooks";
import { truncateString } from "../../../utils";
import React from "react";
import Pagination from "../../../components/Pagination/Pagination";

const Products = () => {
  // const [limitNumber, setLimitNumber] = React.useState(20);
  const [params, setParams] = React.useState({
    searchQuery: "",
    limit: 20,
    skip: 6,
  });
  const { products, isLoading: isLoadingProducts } = useProducts({
    searchQuery: params.searchQuery,
    limit: params.limit,
    skip: params.skip,
  });

  const navigate = useNavigate();

  function getSingleProductDetails(rowData) {
    navigate(`/products/${rowData.id}`);
  }

  const displayProducts = products?.products;

  const handleChangesQuery = (e) => {
    setParams({ ...params, searchQuery: e });
  };

  React.useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      console.log(params);
    }, 4000);

    return () => clearTimeout(delayDebounceFn);
  }, [params]);

  const changeOffset = (newOffset) => {
    setParams((prevParams) => ({
      ...prevParams,
      skip: newOffset >= 0 ? newOffset : 0,
    }));
  };

  const changeLimit = (newLimit) => {
    setParams((prevParams) => ({
      ...prevParams,
      limit: newLimit,
      skip: 0,
    }));
  };

  return (
    <>
      <div className="flex flex-col rounded-lg w-full">
        <div className="flex flex-col gap-2 text-[#2d2f31] text-center py-4 border border-[#d1d7dc]">
          <p className="text-2xl leading-[29px] font-bold uppercase">
            product listing
          </p>
          <p className="text-base leading-[22px]">
            Edit your account settings and change your password here.
          </p>
        </div>
        <form className="flex justify-center gap-4 py-4">
          <BaseInput
            type="text"
            placeholder="Search products..."
            className="w-[450px]"
            value={params.searchQuery}
            onChange={(e) => handleChangesQuery(e.target.value)}
          />
        </form>
        {isLoadingProducts ? (
          <div className="grid place-items-center h-[580px]">
            <PreLoader />
          </div>
        ) : (
          <div className="border border-b-[#d1d7dc] border-l-[#d1d7dc] border-r-[#d1d7dc]">
            <div className="px-[60px] flex flex-col gap-2 py-6 ">
              <p className="text-sm leading-[17px] font-bold text-[#2d2f31] uppercase">
                Table Heading
              </p>
              {products?.length === 0 ? (
                <EmptyState />
              ) : (
                <div className="overflow-scroll">
                  <Table
                    tableRowHandler={getSingleProductDetails}
                    data={displayProducts?.map((item) => {
                      return {
                        ...item,
                        title: (() => (
                          <div className="w-60 overflow-x-auto">
                            {truncateString(item.title, 80)}
                          </div>
                        ))(),
                        description: (() => (
                          <div className="w-60 overflow-x-auto">
                            {truncateString(item.description, 80)}
                          </div>
                        ))(),
                      };
                    })}
                  />
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      <Pagination
        count={products?.total || 0}
        limit={params.limit}
        offset={params.skip}
        changeOffset={changeOffset}
        changeLimit={changeLimit}
        setParams={setParams}
      />
    </>
  );
};

export default Products;
