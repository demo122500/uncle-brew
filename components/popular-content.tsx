"use client";

import { Products } from "@/types.db";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useState } from "react";
import useCart from "@/hooks/use-carts";
import assets from "@/public/assets/assets";

interface PopularContentProps {
  data: Products;
}

export const PopularContent = ({ data }: PopularContentProps) => {
  const [isLiked] = useState(false);

  const cart = useCart();

  const addToCart = (data: Products) => {
    cart.addItem({ ...data, qty: 1 });
  };

  return (
    <Card className="w-full max-h-[380px] rounded-md bg-white shadow-lg border-none flex flex-col items-center justify-center relative py-6 pt-24 md:pt-24">
      <div className="absolute -top-[4%] md:-top-[20%] overflow-hidden w-24 md:w-40 h-24 md:h-40 rounded-full bg-hero flex items-center justify-center p-1 md:p-2">
        <div className="w-full h-full rounded-full bg-white relative">
          <Image fill alt={data.name} src={data.images[0].url} className="object-cover"/>
        </div>
      </div>

      <Link href={`/menu/${data.id}`} className="w-full px-2 text-center my-4">
        <CardTitle className="text-black text-lg translate w-full font-cursive">
          {data.name}
        </CardTitle>
      </Link>

      <div className="w-full flex items-center justify-center gap-2 flex-wrap px-2 mt-4">
        {data.cuisine && (
          <div className="rounded-md bg-emerald-500/10 px-2 py-[2px] text-[9px] font-semibold capitalize">
            {data.cuisine}
          </div>
        )}

        {data.category && (
          <div className="rounded-md bg-blue-500/10 px-2 py-[2px] text-[9px] font-semibold capitalize">
            {data.category}
          </div>
        )}

        {data.cuisine && (
          <div className="rounded-md bg-red-500/10 px-2 py-[2px] text-[9px] font-semibold capitalize">
            {data.cuisine}
          </div>
        )}

        {data.size && (
          <div className="rounded-md bg-yellow-500/10 px-2 py-[2px] text-[9px] font-semibold capitalize">
            {data.size}
          </div>
        )}
      </div>

      <CardDescription className="text-justify px-6 my-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
        molestiae, libero numquam rem dolores dolor.
      </CardDescription>

      <div className="w-full flex items-center px-6 mt-4 gap-3">
        <Button
          className="rounded-full font-bold text-lg text-black outline-none bg-transparent hover:bg-transparent cursor-default"
        >
          ₱{data.price}
        </Button>
        <Link href={`/menu/${data.id}`} className="w-full">
          <Button className="bg-hero w-full rounded-full">Buy Now</Button>
        </Link>
      </div>

      {/* add to cart */}
      <Button
        onClick={() => addToCart(data)}
        className="absolute top-0 right-0 rounded-tl-none rounded-tr-lg rounded-bg-lg rounded-br-none p-2 px-3"
      >
        <ShoppingCart className="h-4 w-4" />
      </Button>

      {/* add to wishlist */}
      <Button
        className="absolute left-0 top-0 hover:bg-transparent cursor-default"
        variant={"ghost"}
      >
        <Image src={assets.logo2} alt=""
          className={`w-5 h-5 ${isLiked ? "text-red-500" : "text-black"}`}
        />
      </Button>
    </Card>
  );
};