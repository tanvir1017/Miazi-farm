import { ButtonSecondary } from "@/components/shadecncomponents/button";
import Image from "next/image";
import { BsArrowRightShort } from "react-icons/bs";

const HeadingSection = () => {
  return (
    <section className="container ">
      <div className="max-w-[75.8rem] h-[500px] m-auto relative overflow-hidden rounded-lg my-10 p-5">
        <Image
          className="absolute"
          src="/assets/covers/slider_background.jpeg"
          alt="Heading slider cover"
          fill
          style={{
            objectFit: "cover",
          }}
        />

        <div className="absolute px-11 pt-24">
          <strong className="bg-brand px-5 text-white font-HIND_SILIGURI_LIGHT ">
            Opening sale discount 50%
          </strong>
          <h1 className="text-6xl text-black font-HIND_SILIGURI_BOLD mt-5">
            Super Market For <br /> Fresh Grocery
          </h1>
          <p className="text-accent-foreground my-5">
            Introduced a new model for online grocery <br /> shopping and
            convenient home delivery.
          </p>

          <ButtonSecondary>
            shop now{" "}
            <span className="ml-2">
              <BsArrowRightShort className="font-HIND_SILIGURI_LIGHT text-base" />
            </span>
          </ButtonSecondary>
        </div>
      </div>
    </section>
  );
};

export default HeadingSection;
