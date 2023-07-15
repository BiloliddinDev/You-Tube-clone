import { useQuery } from "@tanstack/react-query";
import { instance } from "../Utils/Index";

type getTayp = {
  keys: string[];
  url: string;
  options?: any;
};

export const useGetData = ({ keys, url, options }: getTayp) => {
  return useQuery(keys, () => instance.get(url).then((res) => res?.data), {
    ...options,
  });
};
