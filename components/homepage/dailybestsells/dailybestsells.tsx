import { dailySells } from "@/data/product";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { ButtonAlternative } from "../../shadecncomponents/button";
import SectionTitle from "../../shared/sectiontitle/sectiontitle";
import DailyBestSell from "./dailybestsell";

const DailyBestSells = () => {
  return (
    <section className="container  mt-24 mb-24">
      <SectionTitle
        link_text="View all"
        tagline="Today's best sells product till now from "
        title="Daily Best Sells"
        url="/shop"
      />

      <div className="grid grid-cols-6">
        <div className="col-span-2">
          <div className="w-[20.375rem] h-[28rem]  relative overflow-hidden rounded-xl">
            <Image
              src="/assets/covers/banner-deal.jpeg"
              alt="Banner deal with coffe cover & Daily best sell cover"
              fill
              className="absolute"
              style={{
                objectFit: "cover",
              }}
              priority
            />

            <div className="cover-text absolute text-white p-10">
              <h2 className="text-3xl font-HIND_SILIGURI_BOLD">
                100% Organic Coffee Beans.
              </h2>
              <p className="my-3">Get the best deal before close.</p>
              <ButtonAlternative>
                Shop now <ArrowRight strokeWidth={0.5} />
              </ButtonAlternative>
            </div>
          </div>
        </div>
        <div className="col-span-4 lg:-ml-20">
          <div className="grid grid-cols-3 gap-3">
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
