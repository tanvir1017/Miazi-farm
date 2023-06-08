import { featuresOfServices } from "@/utils/staticfeatures";
import Image from "next/image";

const Features = () => {
  return (
    <section className="container my-16">
      <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3">
        {featuresOfServices.map((item, i) => (
          <div
            key={i}
            className={`px-5 py-7 text-center ${
              ![2, 5].includes(i) && "border-r-2"
            }  ${![3, 4, 5].includes(i) && "border-b-2"}`}
          >
            <Image
              alt={item.title}
              src={item.icon}
              height={50}
              width={50}
              className="inline-block"
            />
            <h3 className="my-5 font-bold ">{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
