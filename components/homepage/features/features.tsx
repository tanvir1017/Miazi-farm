import { featuresOfServices } from "@/data/staticfeatures";

const Features = () => {
  return (
    <section className="container my-[12.5rem]">
      <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3">
        {featuresOfServices.map((item, i) => (
          <div
            key={i}
            className={`px-5 py-7 text-center  ${
              ![2, 5].includes(i) && "border-r-2"
            }  ${![3, 4, 5].includes(i) && "border-b-2"}`}
          >
            <i className="inline-block text-5xl font-HIND_SILIGURI_LIGHT text-primaryalternative">
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
