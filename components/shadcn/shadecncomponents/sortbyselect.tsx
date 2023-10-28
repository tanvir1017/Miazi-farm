"use client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/shadcn/ui/select";
import { useRouter, useSearchParams } from "next/navigation";

export function SortBySelect() {
  const router = useRouter();
  const searchParams = useSearchParams();

  return (
    <Select>
      <SelectTrigger className="w-[180px] cursor-pointer">
        <SelectValue placeholder="All Available Products" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>All Available Products</SelectLabel>
          <SelectItem onChange={() => alert("hello")} value="lowToHigh">
            Price low to high
          </SelectItem>
          <SelectItem value="highToLow">Price high to low</SelectItem>
          <SelectItem value="rating">Sort by popularity</SelectItem>
          <SelectItem value="latest">Sort by latest</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
