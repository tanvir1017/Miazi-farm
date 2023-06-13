import BlurImageWithBlurHash from "@/components/blurredimage";
import { ButtonSecondary } from "@/components/shadecncomponents/button";
import { BsArrowRightShort } from "react-icons/bs";

const BannerCategories = () => {
  return (
    <div className="grid md:grid-cols-1 lg:grid-cols-2 grid-cols-1 gap-5 place-items-center md:mt-10 lg:my-16">
      <div className="relative overflow-clip">
        <BlurImageWithBlurHash
          src="/assets/banners/grocery-banner.png"
          alt="card banner categories"
          width={700}
          height={90}
          className="w-full h-64 object-cover"
          placeholder="blur"
          blurDataURL={"LvPG87.TxtIT-;RQRjoexuRjaeoe"}
        />
        <div className="absolute inset-y-0 px-5 mt-16">
          <h1 className="text-2xl text-black font-HIND_SILIGURI_BOLD ">
            Fruits & Vegetables
          </h1>
          <p className="text-accent-foreground">Get Upto 30% Off</p>
          <div className=" mt-2">
            <ButtonSecondary>
              shop now
              <span className="ml-2">
                <BsArrowRightShort className="font-HIND_SILIGURI_LIGHT text-base" />
              </span>
            </ButtonSecondary>
          </div>
        </div>
      </div>
      <div className="relative overflow-clip">
        <BlurImageWithBlurHash
          src="/assets/banners/grocery-banner-2.jpeg"
          alt="card banner categories"
          width={700}
          height={90}
          className="w-full h-64 object-cover"
          placeholder="blur"
          blurDataURL={"LZQcSJ.TIAs8%MM{ofofkCadozWA"}
        />

        <div className="absolute inset-y-0 px-5 mt-16">
          <h1 className="text-2xl text-black font-HIND_SILIGURI_BOLD ">
            Freshly Baked Buns
          </h1>
          <p className="text-accent-foreground">Get Upto 25% Off</p>
          <div className=" mt-2">
            <ButtonSecondary>
              shop now
              <span className="ml-2">
                <BsArrowRightShort className="font-HIND_SILIGURI_LIGHT text-base" />
              </span>
            </ButtonSecondary>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerCategories;
