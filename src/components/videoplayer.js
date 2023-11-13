import React from 'react';
import ReactPlayer from "react-player";

 const YoutubePlayer =({trailer})=>{
  return(
   <div>
    <ReactPlayer width={'480px'} height={'240px'} controls url={trailer}></ReactPlayer>
   </div>
  )
}
export default YoutubePlayer


