import { ButtonSecondary } from "@/components/shadecncomponents/button";
import Image from "next/image";

const SectionBanner = () => {
  return (
    <section className="container mt-20">
      <div className="px-20 bg-[#f0f3f2] flex items-center justify-between py-10 rounded-lg">
        <div className="tex">
          <h2 className="text-4xl font-HIND_SILIGURI_BOLD">
            Non Stop Grocery Shop
          </h2>
          <p className="my-5 text-lg">
            Shopping for your furry friend? Find food,
            <br /> treats, and more in one easy spot.
          </p>
          <ButtonSecondary>Get discount on share</ButtonSecondary>
        </div>
        <div className="image">
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
