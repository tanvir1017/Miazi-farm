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
import { ShoppingCart } from "lucide-react";
import BlurImageWithBlurHash from "../blurredimage";

export function CardWishlists() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <span
          title="Shopping cart"
          className="bg-slate-200 p-2 rounded-full cursor-pointer relative"
        >
          <button className="w-5 h-5 p-0.5 bg-primaryalternative rounded-full text-white text-xs absolute right-0 -top-2 overflow-hidden">
            {shoppingCart.length}
          </button>
          <ShoppingCart
            strokeWidth={1}
            className="hover:text-primaryalternative"
          />
        </span>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-80 h-96 overflow-auto">
        <DropdownMenuLabel>
          You&#39;ve added products on the cart
        </DropdownMenuLabel>
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
