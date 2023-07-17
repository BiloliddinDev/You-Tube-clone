import React from "react";
import { categType } from "../../Pages/Category";
import { useEffect } from "react";

const Cart = ({
  image,
  title,
  desc,
}: {
  image: string | undefined;
  title: string | undefined;
  desc?: string | undefined;
}) => {
  return (
    <div className="flex flex-col justify-center items-start w-[350px] border">
      <img className="w-full h-[200px]" src={image} alt="" />
      <div className="px-[10px] text-center">
        <h1 className="text-[22px] text-white font-bold">{title}...</h1>
        <p className="text-gray-500">{desc}</p>
      </div>
    </div>
  );
};

export default Cart;
