import Head from 'next/head'
import Layout from '@/components/layout'
import { getPostsByTagName } from '@/lib/posts'
import { GetStaticPaths, GetStaticProps } from 'next'
import { range, sliceForCurrentPage } from '@/lib/util'
import Pager from '@/components/Pager'
import PostTitle from '@/components/posts/title'
import { FormattedPostData } from '@/types/post'
import { getTagName, tags } from '@/data/tags'

const COUNT_PER_PAGE = 10

type Props = {
  posts: FormattedPostData[]
  currentPage: number
  total: number
  perPage: number
  searchWord: string
}

const TagPage = (props: Props): JSX.Element => {
  return (
    <Layout>
      <section>
        {props.posts.map(post => (
          <PostTitle post={post} key={post.id}></PostTitle>
        ))}
        <Pager
          currentPage={props.currentPage}
          total={props.total}
          perPage={props.perPage}
          href="/tag/[...id]"
          searchWord={props.searchWord}
          asCallback={(page, tag) => `/tag/${tag}/${page}`}
        />
      </section>
    </Layout>
  )
}

export default TagPage

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const [tagId, page] = params?.id as Array<string>
  const pageNumber = parseInt(page, 10)
  const tagPosts = await getPostsByTagName(getTagName(tagId))
  const posts = sliceForCurrentPage(tagPosts, COUNT_PER_PAGE, pageNumber)

  return {
    props: {
      posts: posts,
      currentPage: pageNumber,
      total: tagPosts.length,
      perPage: COUNT_PER_PAGE,
      searchWord: tagId,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const result = await Promise.all(
    tags.map(async tag => {
      const posts = await getPostsByTagName(tag.name)
      const pages = range(Math.ceil(posts.length / COUNT_PER_PAGE))
      const results = pages.map(page => {
        return { params: { id: [tag.id, String(page)] } }
      })
      return results
    }),
  )

  const paths = result.flat()

  return { paths: paths, fallback: false }
}
