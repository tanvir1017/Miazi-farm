import { ButtonAlternative } from "@/components/shadcn/shadecncomponents/button";
import { dailySells } from "@/data/product";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import SectionTitle from "../../shared/sectiontitle/sectiontitle";
import DailyBestSell from "./dailybestsell";

const DailyBestSells = () => {
  return (
    <section className="md:container px-3 md:my-24 my-12">
      <SectionTitle
        link_text="View all"
        tagline="Today's best sells product till now from "
        title="Daily Best Sells"
        url="/shop"
      />

      <div className="grid md:grid-cols-6">
        <div className="md:col-span-2">
          <div className="w-[20.375rem] h-[28rem] relative overflow-hidden rounded-xl">
            <Image
              src="/assets/covers/banner-deal.jpeg"
              alt="Banner deal with coffe cover & Daily best sell cover"
              fill
              className="md:absolute"
              style={{
                objectFit: "cover",
              }}
              priority
            />

            <div className="cover-text absolute text-white p-10">
              <h2 className="text-3xl ">100% Organic Coffee Beans.</h2>
              <p className="my-3">Get the best deal before close.</p>
              <ButtonAlternative>
                Shop now <ArrowRight strokeWidth={0.5} />
              </ButtonAlternative>
            </div>
          </div>
        </div>
        <div className="col-span-4 lg:-ml-20 md:-ml-20 md:mt-0 mt-5">
          <div className="grid md:grid-cols-3 grid-cols-2 gap-3">
            {dailySells.map((item, i) => (
              <DailyBestSell key={i} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DailyBestSells;
