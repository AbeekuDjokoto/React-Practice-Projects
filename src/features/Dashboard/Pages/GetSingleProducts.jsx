import React from "react";
import { useSingleProductsDetail } from "../../../hooks/useGetSingleProductDetail";
import { useParams } from "react-router";

const GetSingleProducts = () => {
  const pathname = useParams();
  console.log(pathname.id);
  const { productDetail } = useSingleProductsDetail(pathname.id);
  console.log(productDetail);

  return <div>GetSingleProducts</div>;
};

export default GetSingleProducts;
