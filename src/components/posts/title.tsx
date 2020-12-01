import { FormattedPostData } from '@/types/post'

const PostTitle = ({ post }: { post: FormattedPostData }): JSX.Element => {
  return (
    <div className="mb-12">
      <div>
        <span className="text-xs mr-3">{post.createdAt}</span>
        <span className="text-xs">{post.category}</span>
      </div>
      <div>
        <h3 className="font-bold text-2xl">{post.title}</h3>
      </div>
      {post.tags.map(tag => (
        <span className="tag text-xs" key={tag}>
          {tag}
        </span>
      ))}
    </div>
  )
}

export default PostTitle
