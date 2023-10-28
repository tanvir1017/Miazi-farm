import { MoveRight } from "lucide-react";
import Link from "next/link";

const SectionTitle = ({
  link_text,
  url,
  tagline,
  title,
}: {
  link_text: string;
  url: string;
  tagline: string;
  title: string;
}) => {
  return (
    <div className="mb-10 md:flex justify-between items-end ">
      <div>
        <h2 className="text-2xl ">{title} :</h2>
        <p>
          {tagline}
          <strong className="text-brand"> Miazi</strong>{" "}
          <strong className="text-primaryalternative">Farm</strong>
        </p>
      </div>
      <Link
        href={url}
        className="text-primaryalternative flex items-center mt-5 md:mt-0"
      >
        <span className="mr-2">{link_text}</span> <MoveRight strokeWidth={1} />
      </Link>
    </div>
  );
};

export default SectionTitle;
