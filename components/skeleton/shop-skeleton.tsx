import { Skeleton } from "../shadcn/ui/skeleton";

const ShopSkeleton = () => {
  return (
    <div className="mt-10">
      <div className="grid grid-cols-12 place-items-start divide-x h-screen">
        <div className="col-span-2 h-screen w-full p-2 space-y-2">
          <Skeleton className="w-[100%] h-[16px] rounded-full bg-slate-200" />
          <div>
            {[...Array(6).keys()].map((i: number) => {
              return (
                <div key={i} className="flex items-center gap-2 w-full mt-5">
                  <Skeleton className="w-[23px] h-[20px] rounded-md bg-slate-200" />
                  <Skeleton className="w-[100%] h-[15px] rounded-full bg-slate-200" />
                </div>
              );
            })}
          </div>
        </div>
        <div className="col-span-10 w-full">
          {/* <Skeleton className="w-[200px] h-[20px] rounded-full bg-slate-400 m-auto" /> */}
          <div className="flex flex-col m-8 rounded shadow-md w-60 sm:w-80 animate-pulse h-96">
            <div className="h-48 rounded-t dark:bg-gray-700"></div>
            <div className="flex-1 px-4 py-8 space-y-4 sm:p-8 bg-slate-200 dark:bg-gray-900">
              <div className="w-full h-6 rounded bg-slate-200 dark:bg-gray-700"></div>
              <div className="w-full h-6 rounded bg-slate-200 dark:bg-gray-700"></div>
              <div className="w-3/4 h-6 rounded bg-slate-200 dark:bg-gray-700"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopSkeleton;
