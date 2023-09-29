import { ButtonSecondary } from "@/components/shadcn/shadecncomponents/button";
import Image from "next/image";

const SectionBanner = () => {
  return (
    <section className="md:container md:mt-20 px-4">
      <div className="md:px-20 md:py-10 py-5 px-5 bg-[#f0f3f2] md:flex flex flex-col-reverse items-center justify-between  rounded-lg">
        <div className="tex">
          <h2 className="text-4xl ">Non Stop Grocery Shop</h2>
          <p className="my-5 text-lg">
            Shopping for your furry friend? Find food,
            <br /> treats, and more in one easy spot.
          </p>
          <ButtonSecondary>Get discount on share</ButtonSecondary>
        </div>
        <div className="image md:mb-0 mb-5">
          <Image
            width={550}
            height={100}
            alt="discount banner picture"
            src="/assets/banners/store-graphics.svg"
          />
        </div>
      </div>
    </section>
  );
};

export default SectionBanner;
