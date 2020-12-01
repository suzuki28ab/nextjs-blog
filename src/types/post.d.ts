import { Timestamp } from '@/plugins/firebase'

export default interface PostData {
  id: string
  title: string
  content: string
  createdAt: Timestamp
  tags: string[]
  category: string
}

export interface FormattedPostData {
  id: string
  title: string
  content: string
  createdAt: string
  tags: string[]
  category: string
}
