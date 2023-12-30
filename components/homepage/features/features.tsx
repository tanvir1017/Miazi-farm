import { featuresOfServices } from "@/data/staticfeatures";
import { cn } from "@/lib/utils";

const Features = () => {
  return (
    <section className="md:container px-3 my-12 md:mb-[12.5rem] md:mt-[10.5rem]">
      <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3">
        {featuresOfServices.map((item, i) => (
          <div
            key={i}
            className={cn("px-5 py-7 md:text-center", {
              ["md:border-r-2"]: ![2, 5].includes(i),
              ["md:border-b-2"]: ![3, 4, 5].includes(i),
            })}
          >
            <i className="inline-block text-5xl  text-primaryalternative">
              {item.icon}
            </i>
            <h3 className="my-5 font-bold ">{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
