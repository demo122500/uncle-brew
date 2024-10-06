"use client";

import Box from "@/components/box";
import { cn } from "@/lib/utils";
import { Cuisines } from "@/types.db";
import { CheckSquare } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";

interface CuisineFiltersProps {
  cuisines: Cuisines[];
}

const CuisineFilters = ({ cuisines }: CuisineFiltersProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleClick = (cuisine: string) => {
    const currentParams = Object.fromEntries(searchParams.entries());

    if (currentParams.cuisine === cuisine) {
      delete currentParams.cuisine;
    } else {
      currentParams.cuisine = cuisine;
    }

    const href = qs.stringifyUrl({
      url: "/menu",
      query: currentParams,
    });

    router.push(href);
  };
  return (
    <Box className="flex-col gap-2 border-b pb-4 cursor-pointer">
      <h2 className="text-xl font-semibold text-neutral-700 mt-2">Cuisine</h2>
      <Box className="flex-col gap-2 mt-2">
        {cuisines?.map((cuisine) => (
          <div
          onClick={() => handleClick(cuisine.name)}
            key={cuisine.id}
            className={cn(
              "test-sm font-semibold text-neutral-500 flex items-center my-2",
              cuisine.name === searchParams.get("cuisine") && "text-hero"
            )}
          >
            <p>{cuisine.name}</p>
            {cuisine.name === searchParams.get("cuisine") && (
              <CheckSquare className="ml-2 w-4 h-4 text-hero"/>
            )}
          </div>
        ))}
      </Box>
    </Box>
  );
};

export default CuisineFilters;
