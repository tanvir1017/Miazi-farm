"use client";

import { Checkbox } from "@/components/shadcn/ui/checkbox";
import { Label } from "@/components/shadcn/ui/label";
import { cn } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";

const ShopCategories = ({ categories }: { categories: string[] }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const getQueryCategory = searchParams.get("category");
  const getPage = searchParams.get("page");
  const handleRouterQuery = (item: string) => {
    if (getQueryCategory === item) {
      router.push(`/shop`);
      return;
    } else {
      router.push(`/shop?&category=${item}`);
      return;
    }
  };

  return categories.map((item: string) => (
    <div key={item}>
      <div
        className="relative my-2 cursor-pointer "
        onClick={() => handleRouterQuery(item)}
      >
        <Label
          className={cn("text-base flex items-center", {
            ["text-primaryalternative font-bold"]: getQueryCategory === item,
          })}
        >
          <Checkbox
            id="terms"
            className="rounded-sm bg-slate-100 mr-2"
            checked={getQueryCategory === item}
          />
          {item}
        </Label>
      </div>
      <hr />
    </div>
  ));
};

export default ShopCategories;
