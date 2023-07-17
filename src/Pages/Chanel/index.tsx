import React from "react";
import { instance } from "../../Utils/Index";
import { useQuery } from "@tanstack/react-query";
import "./main.scss"
export interface chanelPage{
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

const Chanel = () => {


  const req2 =()=>{
    return instance.get(`/channels?part=snippet&id`)
}
const chanel = useQuery({ queryKey: ['chanel'], queryFn: req2 })
console.log(chanel);



  return(
    <>
      <div>
        <div className="universal">
          <div className="top_dis"></div>
          <div className="buttom_dis">
            <div className="ch_card">
              <img className="ch_img" src="https://i1.sndcdn.com/avatars-le63DhyyPBENtQto-gJJFmg-t500x500.jpg" alt="#" />
              <h2>Saad lamjarred</h2>
              <h3>14dkdjhdhd</h3>
            </div>
          </div>

        </div>




    </div>
    </>
  
  )
  
 

};

export default Chanel;
