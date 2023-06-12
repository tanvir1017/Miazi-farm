import { Heart } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/cart-dropdown-menu";
import { ScrollArea } from "@/components/ui/scroll-area";
import { shoppingCart } from "@/data/product";
import Image from "next/image";

export function Wishlists() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <span
          title="Wish List"
          className="bg-slate-200 p-2 rounded-full cursor-pointer relative"
        >
          <button className="w-5 h-5 p-0.5 bg-brand rounded-full text-white text-xs absolute right-0 -top-2 overflow-hidden">
            {shoppingCart.length}
          </button>
          <Heart strokeWidth={1} className="hover:text-primaryalternative" />
        </span>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-80 h-96 overflow-auto">
        <DropdownMenuLabel>Your wishlist</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <ScrollArea className="h-80 w-full rounded-md">
            {shoppingCart.map((item, i) => (
              <DropdownMenuItem key={i}>
                <div className="flex items-center justify-between w-full border-b-2">
                  <div>
                    <p>{item.title}</p>
                    <span className="flex items-center justify-between mt-3">
                      <p>$ {item.price}</p>
                      <p>{item.rating} rating</p>
                    </span>
                  </div>
                  <Image
                    alt={item.title}
                    src={item.image}
                    width={90}
                    height={70}
                    className="inline-block "
                  />
                </div>
              </DropdownMenuItem>
            ))}
          </ScrollArea>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
