import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { instance } from "../../Utils/Index";
import { categType } from "../Category";
import Cart from "../../Components/Cart";
import { Link } from "react-router-dom";

const Detel = () => {
  const { id } = useParams();
  const [data, setData] = useState<[]>([]);
  const [comment, setComment] = useState<[]>([]);

  useEffect(() => {
    instance
      .get(`/search`, {
        params: {
          relatedToVideoId: `${id}`,
          part: "id,snippet",
          type: "video",
          maxResults: "50",
        },
      })
      .then((res) => setData(res.data.items));

    // instance.get(`/comments`, {});
  }, [id]);

  return (
    <div className="container flex">
      <div className="flex-1 w-[800px] ">
        <ReactPlayer
          width={1000}
          height={600}
          controls
          url={`https://www.youtube.com/watch?v=${id}`}
        />
      </div>
      <div className="flex flex-col gap-6">
        {data.map((e: categType, i: number) => (
          <Link to={`/detel/${e.id.videoId}`}>
            <Cart
              key={i}
              image={e?.snippet?.thumbnails?.medium?.url}
              title={e?.snippet?.title?.slice(0, 30)}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Detel;
