import VideoCard from "@/components/VideoCard"
import { Video } from "@/types/Video";

function GridVideoContainer({videoList}: { videoList: Video[]}) {

  return(
    <div className="grid grid-cols-3 ">
      {
        videoList.length && videoList.map((video => (
          <VideoCard key={video.Id} video={video} />
        )))
      }
    </div>
  )
}

export default GridVideoContainer;
