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

export async function getAllPostIds(): Promise<allPostIds> {
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

  return posts.map(post => {
    return {
      params: {
        id: post.id,
      },
    }
  })
}

export async function getPostData(id: string): Promise<FormattedPostData> {
  const results = await db
    .collection('posts')
    .where('id', '==', id)
    .get()
    .then(snapshot => {
      const posts: sortedPostsData = []
      snapshot.forEach(doc => {
        const post: PostData = doc.data() as PostData
        post.createdAt = formatTimeStamp(post.createdAt)
        posts.push(post)
      })
      return posts
    })
  return results[0]
}
