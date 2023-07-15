import { useEffect, useState } from "react";
import { useGetData } from "../../Hooks";
import { useParams } from "react-router-dom";
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
  const [data, setData] = useState([]);
  const { categ } = useParams();

  const { data: datalar } = useGetData({
    keys: ["categ"],
    url: `/search?part=snippet&q=${categ}`,
  });

  useEffect(() => {
    queryClient.invalidateQueries(["categ"]);
  }, [categ]);

  return (
    <div>
      <div className="grid grid-cols-4 gap-4">
        {datalar?.items?.map((e: categType) => (
          <>
            {/* {console.log(e)} */}
            <Cart
              image={e?.snippet?.thumbnails?.medium?.url}
              title={e?.snippet?.title?.slice(0, 30)}
              desc={e?.snippet?.description}
            />
          </>
        ))}
      </div>
    </div>
  );
};

export default Category;
