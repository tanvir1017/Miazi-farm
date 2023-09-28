import { Heart } from "lucide-react";

import { shoppingCart } from "@/data/product";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/shadcn/ui/cart-dropdown-menu";
import { ScrollArea } from "@/shadcn/ui/scroll-area";
import BlurImageWithBlurHash from "../../components/blurredimage";

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
                  <div className="overflow-hidden">
                    <BlurImageWithBlurHash
                      src={item.image}
                      alt={item.title}
                      width={90}
                      height={70}
                      className="inline-block"
                      placeholder="blur"
                      blurDataURL={item.blurhash}
                    />
                  </div>
                </div>
              </DropdownMenuItem>
            ))}
          </ScrollArea>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
