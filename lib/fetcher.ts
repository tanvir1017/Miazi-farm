import { urlForProductionAndLocalhost } from "@/app/shop/page";

type functionType = (id: string) => Promise<any>;

// Fetching data from db by unique id
export const getByUniqueId: functionType = async (id: string) => {
  const fetchingDataFromUrl = await fetch(
    `${urlForProductionAndLocalhost}/api/product/${id}`
  );
  const resultOfFetchingData = await fetchingDataFromUrl.json();
  return resultOfFetchingData;
};

export const fetcher = (url: string) => fetch(url).then((res) => res.json());
