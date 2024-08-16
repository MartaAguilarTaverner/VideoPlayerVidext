import { z } from 'zod';
import { db } from '@/server/db'

import { procedure, router } from '../trpc';
import GlobalError from '@/app/global-error';
import { Video } from '@/types';
export const appRouter = router({
  video: {
    list: procedure.query(async () => {
      let videos: Video[] = [];
      try {
        videos = await db.videos.findMany();
        if (!videos.length) {
          videos = await db.videos.populate()
        }
      } catch (error) {
        GlobalError(error)
      }
      return videos
    }),
    getById: procedure.input(z.object({ id: z.string() })).query(async (opts) => {
      try{
        let videos = await db.videos.findMany();

        if (!videos.length) {
          videos= await db.videos.populate()
        }

        const video = await db.videos.findOne(opts.input.id)

        return video
      }
      catch (error) {
        GlobalError(error)
      }

    }),
    updateViews: procedure.input(z.object({ id: z.string() })).query(async (opts) => {
      try{
        await db.videos.updateViews(opts.input.id)
      }
      catch (error) {
        GlobalError(error);
      }
    })
  }
});
// export type definition of API
export type AppRouter = typeof appRouter;