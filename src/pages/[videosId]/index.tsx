import { trpc } from "@/utils/trpc"
import VideoPlayer from "@/components/VideoPlayer"
import { useRouter } from "next/router"



export default function VideoDetail() {
  const router = useRouter()
  const { videosId } = router.query
  const { data } = trpc.video.getById.useQuery({ id: videosId as string })
  trpc.video.updateViews.useQuery(({ id: videosId as string }))

    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {data && <VideoPlayer video={data}/> }
      </main>
    )

}
