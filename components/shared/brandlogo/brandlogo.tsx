import BlurImageWithBlurHash from "@/components/blurredimage";
import Link from "next/link";

const BrandLogo = () => {
  return (
    <Link href="/">
      {/* <div className="col-span-1 relative"> */}
      <div className="col-span-1 flex items-center">
        <div className="overflow-hidden">
          <BlurImageWithBlurHash
            src="/assets/logos/logo1.png"
            width={70}
            height={70}
            alt="Miyazi Farm Logo"
            placeholder="blur"
            blurDataURL="LUPZV[]k%hKiy?9@v~#T-qI-N@xH"
          />
        </div>
        {/* <h2 className="font-HIND_SILIGURI_BOLD text-2xl text-[#388740] absolute top-7 right-16"> */}
        <h2 className="font-HIND_SILIGURI_BOLD text-2xl text-brand-foreground">
          <span className="text-brand">মিয়াজী</span> ফার্ম
        </h2>
      </div>
    </Link>
  );
};

export default BrandLogo;
