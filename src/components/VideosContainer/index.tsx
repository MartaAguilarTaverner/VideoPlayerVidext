
import { trpc } from "@/utils/trpc";
import GridVideoContainer from "./GridVideoContainer";
import Loading from "@/app/loading";

export default function VideosContainer() {
    const { isPending, data } = trpc.video.list.useQuery()

    return isPending ? <Loading /> :(
        <div>
            <GridVideoContainer videoList={data || []}  />
        </div>
    )
}
