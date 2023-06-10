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
    <div className="section-heading mb-10 flex justify-between items-end">
      <div>
        <h2 className="text-2xl font-HIND_SILIGURI_SEMI_BOLD">{title} :</h2>
        <p>
          {tagline}
          <strong className="text-brand">Miyazi</strong>{" "}
          <strong className="text-primaryalternative">Farm</strong>
        </p>
      </div>
      <Link href={url} className="text-primaryalternative flex items-center">
        <span className="mr-2">{link_text}</span> <MoveRight strokeWidth={1} />
      </Link>
    </div>
  );
};

export default SectionTitle;
