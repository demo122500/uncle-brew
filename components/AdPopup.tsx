"use client";

import { Products } from "@/types.db";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { CircleX } from "lucide-react";

export const revalidate = 0;

interface AdPopupProps {
  data: Products;
}

const AdPopup = ({ data }: AdPopupProps) => {
  const [showPopup, setShowPopup] = useState(true);
  const [animatePopup, setAnimatePopup] = useState(false);

  useEffect(() => {
    const storedProductId = localStorage.getItem("lastProductId");

    if (storedProductId !== data.id.toString()) {
      setShowPopup(true);
      setAnimatePopup(true);

      localStorage.setItem("lastProductId", data.id);

      const timer = setTimeout(() => {
        setAnimatePopup(false);
        setTimeout(() => setShowPopup(true), 300);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [data.id]);

  if (!showPopup) return null;

  return (
    <div
      className={`fixed bottom-4 right-4 bg-[#fff] p-4 shadow-lg rounded-md w-80 z-50 ${
        animatePopup ? "opacity-100" : "opacity-0"
      }`}
			style={{ transition: "opacity 0.5s ease-in-out"}}
    >
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-lg font-semibold text-neutral-800">
          Latest Product
        </h4>

        <CircleX
          className="cursor-pointer"
          onClick={() => {
            setAnimatePopup(false);
            setTimeout(() => setShowPopup(false), 300); // Fade out before closing
          }}
        />
      </div>
      <div className="flex items-center">
        {/* Display first image from the product's images array */}
        <div className="w-24 h-24 relative mr-4">
          <Image
            src={data.images[0].url} // Use the first image URL
            alt={data.name}
            layout="fill"
            className="object-cover rounded-md"
          />
        </div>
        <div>
          <h5 className="text-sm font-bold">{data.name}</h5>
          <p className="text-sm text-neutral-600">{`₱${data.price}`}</p>
          <Link href={`menu/${data.id}`}>
            <Button size="sm" className="mt-2">
              Order Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdPopup;
