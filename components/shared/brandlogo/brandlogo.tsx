import Image from "next/image";
import Link from "next/link";

const BrandLogo = () => {
  return (
    <Link href="/">
      {/* <div className="col-span-1 relative"> */}
      <div className="col-span-1 flex items-center">
        <div className="overflow-hidden">
          <Image
            src="/assets/logos/logo1.png"
            width={70}
            height={70}
            priority
            alt="Miazi Farm Logo"
          />
        </div>
        {/* <h2 className=" text-2xl text-[#388740] absolute top-7 right-16"> */}
        <h2 className=" text-2xl text-brand-foreground font-bold">
          <span className="text-brand">মিয়াজী</span> ফার্ম
        </h2>
      </div>
    </Link>
  );
};

export default BrandLogo;
