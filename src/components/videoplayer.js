import React from 'react';
import ReactPlayer from "react-player";
// renewed the prop name 
 const YoutubePlayer =({trailer})=>{
  return (
    <div>
      <ReactPlayer
        width={"480px"}
        height={"240px"}
        controls
        url={trailer}
      ></ReactPlayer>
    </div>
  );
}
export default YoutubePlayer


