import { useEffect, useState } from "react";
import { useGetData } from "../../Hooks";
import { useParams, useSearchParams } from "react-router-dom";
import Cart from "../../Components/Cart";
import { queryClient } from "../../main";

export interface categType {
  id: {
    kind?: string;
    videoId?: string;
  };
  kind?: string;
  snippet?: {
    channelId?: string;
    channelTitle?: string;
    description?: string;
    liveBroadcastContent?: string;
    publishTime?: string;
    publishedAt?: string;
    thumbnails?: {
      default?: {
        url?: string;
        width?: number;
        height?: number;
      };
      high?: {
        url?: string;
        width?: number;
        height?: number;
      };
      medium?: {
        url?: string;
        width?: number;
        height?: number;
      };
    };
    title?: string;
  };
}

const Category = () => {
  const [searchparam] = useSearchParams();

  const { data: datalar } = useGetData({
    keys: [`categ/${searchparam.get("categ")}`],
    url: `/search?part=snippet&q=${searchparam.get("categ")}`,
  });

  useEffect(() => {}, [searchparam]);

  return (
    <div>
      <div className="grid grid-cols-4 gap-4">
        {datalar?.items?.map((e: categType, i: number) => (
          <Cart
            key={i}
            image={e?.snippet?.thumbnails?.medium?.url}
            title={e?.snippet?.title?.slice(0, 30)}
            desc={e?.snippet?.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Category;
