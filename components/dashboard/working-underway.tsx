"use client";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export function WorkingUnderWay() {
  const router = useRouter();

  return (
    <div className="flex flex-col px-4 lg:flex-row lg:items-center">
      <div>
        <div>
          <p className="text-sm font-semibold text-black">Working...</p>
          <h1 className="mt-3 text-2xl font-semibold text-gray-800 md:text-3xl">
            Dev working on this page
          </h1>
          <p className="mt-4 text-gray-500">
            Sorry, the page you are looking for doesn&apos;t ready yet. We are
            coming soon with big deal
          </p>
          <div className="mt-6 flex items-center gap-x-3">
            <button
              onClick={() => router.push("/shop")}
              type="button"
              className="inline-flex items-center rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              <ArrowLeft size={16} className="mr-2" />
              Go back
            </button>
            <button
              type="button"
              className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Contact us
            </button>
          </div>
        </div>
      </div>
      <div className="hidden lg:block">
        <Image
          src="/assets/illustrations/work-from-home.svg"
          alt="404"
          height={100}
          width={100}
          className="h-full w-full rounded-md object-cover"
        />
      </div>
    </div>
  );
}
