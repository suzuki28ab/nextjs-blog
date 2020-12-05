import { FormattedPostData } from '@/types/post'
import Link from 'next/link'
import Tag from '../Tag'

const PostTitle = ({ post }: { post: FormattedPostData }): JSX.Element => {
  return (
    <Link href={`/posts/${post.id}`}>
      <div className="mb-12 cursor-pointer">
        <div>
          <span className="text-xs mr-3">{post.createdAt}</span>
          <span className="text-xs">{post.category}</span>
        </div>
        <div>
          <h3 className="font-bold text-2xl">{post.title}</h3>
        </div>
        {post.tags.map(tagName => (
          <Tag name={tagName} key={tagName} />
        ))}
      </div>
    </Link>
  )
}

export default PostTitle
