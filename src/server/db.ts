import dbjson from '../database.json'

import { Video } from '@/types'

let videos: Video[] = [];

export const db = {
  videos: {
    findMany: async () => videos,
    findOne: async (id) => videos.find(video => video.Id.toString() === id),
    populate: async () => {
      videos = dbjson.videos

      return videos
    },
    updateViews: async(id) => {
      const video = videos.find(video => video.Id.toString() === id)

      if (video) {
        video.Views += 1
      }
    }
  }
}