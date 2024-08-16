
import { useRouter } from "next/router";

const VideoCard = ({ video }) => {
  const  router = useRouter()

  return (
    <div className="bg-white border hover:border-gray-900 w-96 cursor-pointer rounded-lg m-4 p-1 flex justify-center content-start flex-col" onClick={() => router.push(`/${video.Id}`)}>
      <div className="flex justify-center content-start font-sans">
        <img width="400" height="250" src={video.Image}></img>
      </div>
      <div className="flex justify-center font-sans">
        <div className="font-semibold text-base px-2 ">{video.Title}</div>
        <div className="font-medium text-base px-2">{video.Views}Views</div>
        <div className="font-medium text-base px-2">{video.Likes}Likes</div>
      </div>
    </div>
  )
}

export default VideoCard;