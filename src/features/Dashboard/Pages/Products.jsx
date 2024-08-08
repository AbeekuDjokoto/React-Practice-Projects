import { useNavigate } from "react-router";
import { EmptyState, Table } from "../../../components";
import PreLoader from "../../../components/Shared/PreLoader";
import { useProducts } from "../../../hooks";
import { truncateString } from "../../../utils";

const Products = () => {
  const { products, isLoading } = useProducts();
  const navigate = useNavigate();

  function getSingleProductDetails(rowData) {
    navigate(`${rowData.id}`);
  }

  return (
    <>
      {isLoading ? (
        <div className="grid place-items-center h-[580px]">
          <PreLoader />
        </div>
      ) : (
        <div className="flex flex-col rounded-lg w-full">
          <div className="flex flex-col gap-2 text-[#2d2f31] text-center py-4 border border-[#d1d7dc]">
            <p className="text-2xl leading-[29px] font-bold uppercase">
              product listing
            </p>
            <p className="text-base leading-[22px]">
              Edit your account settings and change your password here.
            </p>
          </div>
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
                    data={products?.products.map((item) => {
                      return {
                        ...item,
                        title: (() => (
                          <div className="w-60 overflow-x-auto">
                            {" "}
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
        </div>
      )}
    </>
  );
};

export default Products;
