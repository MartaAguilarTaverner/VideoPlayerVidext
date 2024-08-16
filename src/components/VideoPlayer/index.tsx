'use client'
import BackButton from "../BackButton";
import VideoControllers from "./VideoControllers";

const VideoPlayer = ({video}) => {
  return (
    <div className="cursor-pointer rounded-lg m-4 p-1 flex justify-center content-start flex-col">
      <div className="px-2 py-2">
      <BackButton />
      </div>
      <div className="flex justify-center content-start font-sans">
        <iframe width="800" height="400" allowFullScreen src={video.URL}></iframe>
      </div>
      <div>
      <VideoControllers />
      </div>
      <div className="flex pt-2 justify-between font-sans">
        <div>
        <div className="font-bold text-xl px-2 ">{video.Title}</div>
        </div>
        <div className="flex flex-row mx-1">
        <div className="border-gray-950 border rounded-lg font-medium text-normal px-2 mx-1">{video.Views}Views</div>
        <div className="border-gray-950 border rounded-lg font-medium text-normal px-1 mx-1">{video.Likes}Likes</div>
        </div>
      </div>
    </div>
  )
}

export default VideoPlayer;