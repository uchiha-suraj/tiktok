import React, { useState, useEffect } from "react";
import Video from "./Video";
import db from "./firebase";
import "./App.css";
import video_1 from "./Videos/video_1.mp4";
import video_2 from "./Videos/video_2.mp4";
import video_3 from "./Videos/video_3.mp4";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    db.collection("videos").onSnapshot((snapshot) =>
      setVideos(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  return (
    // BEM
    <div className="app">
      <div className="app__videos">
         {/* tiktok is banned, due to this I didn't find a proper link of tiktok video... that's why I am using brute force apporch and not using firebase firestore. */}
        {/* {videos.map(
          ({ url, channel, description, song, likes, messages, shares }) => (
            <Video
              url={url}
              channel={channel}
              song={song}
              likes={likes}
              messages={messages}
              description={description}
              shares={shares}
            /> 
          )
        )} */}
        
        <Video
          url={video_1}
          channel="Naruto"
          song="Naruto song"
          likes={120}
          messages={45}
          description="tiktok Naruto Dance"
          shares={34}
        />
        <Video
          url={video_2}
          channel="Levi"
          song="Levi song"
          likes={133}
          messages={99}
          description="tiktok cute Levi Dance"
          shares={17}
        />
        <Video
          url={video_3}
          channel="Sasuke"
          song="Sasuke song"
          likes={221}
          messages={63}
          description="tiktok anime dance"
          shares={43}
        />
      </div>
    </div>
  );
}

export default App;
