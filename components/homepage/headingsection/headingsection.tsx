import { HeadingBannerWithAspectRatio } from "@/components/shadcn/shadecncomponents/aspectration";
import { ButtonSecondary } from "@/components/shadcn/shadecncomponents/button";
import { BsArrowRightShort } from "react-icons/bs";

const HeadingSection = () => {
  return (
    <section className="md:container px-4">
      <div className="md:max-w-[75.8rem] md:h-[500px] mx-auto relative rounded-lg my-10 md:p-5">
        <div className="-z-10">
          <HeadingBannerWithAspectRatio
            src="/assets/covers/slider_background.jpeg"
            alt="Heading slider cover"
          />
        </div>
        <div className="absolute md:px-11  md:pt-28 inset-y-0 p-2">
          <strong className="bg-brand md:px-5 px-2 text-white  text-xs md:text-base">
            Opening sale discount 50%
          </strong>
          <h1 className="md:text-6xl text-lg text-black  md:mt-5">
            Super Market For <br /> Fresh Grocery
          </h1>
          <p className="text-accent-foreground my-5 md:block hidden">
            Introduced a new model for online grocery <br /> shopping and
            convenient home delivery.
          </p>

          <ButtonSecondary>
            shop now{" "}
            <span className="ml-2">
              <BsArrowRightShort className=" text-base" />
            </span>
          </ButtonSecondary>
        </div>
      </div>
    </section>
  );
};

export default HeadingSection;
