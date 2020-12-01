import { db, formatTimeStamp } from './firebase'
import PostData, { FormattedPostData } from '@/types/post'

type sortedPostsData = FormattedPostData[]

type allPostIds = {
  params: {
    id: string
  }
}[]

export async function getSortedPostsData(): Promise<sortedPostsData> {
  const posts: sortedPostsData = []
  await db
    .collection('posts')
    .orderBy('createdAt', 'desc')
    .get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        const post: PostData = doc.data() as PostData
        post.createdAt = formatTimeStamp(post.createdAt)
        posts.push(post)
      })
    })

  return posts
}

export function getAllPostIds(): allPostIds {
  const posts: sortedPostsData = []
  db.collection('posts')
    .orderBy('createdAt', 'desc')
    .get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        const post: PostData = doc.data() as PostData
        post.createdAt = formatTimeStamp(post.createdAt)
        posts.push(post)
      })
    })

  return posts.map(post => {
    return {
      params: {
        id: post.id,
      },
    }
  })
}

export async function getPostData(id: string): Promise<FormattedPostData> {
  const result = db
    .collection('posts')
    .doc(id)
    .get()
    .then(doc => {
      const post = doc.data() as PostData
      post.createdAt = formatTimeStamp(post.createdAt)
      return post
    })
  return result
}
