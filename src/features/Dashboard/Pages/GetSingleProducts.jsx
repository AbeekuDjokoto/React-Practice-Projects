import PreLoader from "../../../components/Shared/PreLoader";
import { useSingleProductsDetail } from "../../../hooks/useGetSingleProductDetail";
import { useNavigate, useParams } from "react-router";
import StarRating from "../../../components/StarRating/StarRating";

import { PaystackButton } from "react-paystack";

const GetSingleProducts = () => {
  const pathname = useParams();
  const { productDetail, isLoading } = useSingleProductsDetail(pathname.id);
  const navigate = useNavigate();

  const publicKey = "pk_test_a21b4758940769fe1ac1dd69644dfc4fc5e05a3a";

  const componentProps = {
    email: "customer@email.com",
    amount: 100000,
    currency: "GHS",

    publicKey: publicKey,
    text: "Paystack Button",
    onSuccess: () => {
      console.log("Payment successful");
    },
    onClose: () => {
      console.log("Payment closed");
    },
  };

  return (
    <>
      {isLoading && (
        <div className="grid place-items-center h-[1440px]">
          <PreLoader />
        </div>
      )}
      {!isLoading && (
        <div className="flex justify-between w-90 mx-auto">
          <div className="max-w-[587.2px] w-full h-[732px]">
            <img
              src={productDetail?.images[0]}
              alt={productDetail?.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-[10px] max-w-[542px] w-full">
            <div className="flex gap-1 text-xs leading-4">
              <button onClick={() => navigate(-1)} className="text-black">
                Home
              </button>
              <span>/</span>
              <p className="text-[#666]">{productDetail?.title}</p>
            </div>
            <div className="flex flex-col gap-[15px] text-black">
              <p className="  font-bold text-2xl leading-[30px]">
                {productDetail?.title}
              </p>
              <p className="font-bold text-2xl leading-[30px]">
                ${productDetail?.price} USD
              </p>
              <div className="flex items-center gap-[10px]">
                <StarRating rating={productDetail?.rating} />
                <p className="text-sm leading-[18px] underline">
                  {productDetail?.reviews?.length} reviews
                </p>
              </div>
              <p className="text-sm leading-[18px]">
                {productDetail?.description}
              </p>

              <PaystackButton
                {...componentProps}
                className="px-5 h-11 border flex text-center items-center justify-center gap-2 border-[#393939] bg-black text-white"
              >
                <span className="text-white">Discount Percentage</span>
                <span className="line-through">
                  ${productDetail?.discountPercentage}
                </span>
              </PaystackButton>
            </div>
            <div className="flex flex-col gap-[15px]">
              <p className="text-[18px] leading-6 font-bold uppercase">
                See it in action
              </p>

              <div className="max-w-[120px] w-full h-[180px]">
                <img
                  src={productDetail?.thumbnail}
                  alt={productDetail?.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col gap-[15px]">
              <p className="text-[18px] leading-6 font-bold">
                Review Highlights
              </p>

              <div className="flex flex-col gap-[15px]">
                {productDetail?.reviews?.map((review, index) => {
                  console.log("review", review);
                  return (
                    <div
                      key={index}
                      className="border border-[#d8d8d8] p-5 flex flex-col gap-[15px] text-sm leading-[18px]"
                    >
                      <StarRating rating={review?.rating} />
                      <p>{review?.comment}</p>
                      <div className="flex flex-col gap-1">
                        <p className="font-bold">{review?.reviewerName}</p>
                        <p>{review?.reviewerEmail}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GetSingleProducts;
