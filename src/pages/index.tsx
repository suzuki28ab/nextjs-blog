import Layout from '../components/layout'
import { getSortedPosts } from '../lib/posts'
import { GetStaticProps } from 'next'
import Pager from '@/components/Pager'
import { FormattedPostData } from '@/types/post'
import PostTitle from '@/components/posts/Title'
import { sliceForCurrentPage } from '@/lib/util'

const COUNT_PER_PAGE = 10

type Props = {
  posts: FormattedPostData[]
  currentPage: number
  total: number
  perPage: number
}

export default function Home(props: Props): JSX.Element {
  return (
    <Layout>
      <section>
        {props.posts.map(post => (
          <PostTitle post={post} key={post.id} />
        ))}
        <Pager
          currentPage={props.currentPage}
          total={props.total}
          perPage={props.perPage}
          href="/page/[page]"
          asCallback={page => `/page/${page}`}
        />
      </section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const pageNumber = 1
  const allPostsData = await getSortedPosts()
  const posts = sliceForCurrentPage(allPostsData, COUNT_PER_PAGE, pageNumber)

  return {
    props: {
      posts: posts,
      currentPage: pageNumber,
      total: allPostsData.length,
      perPage: COUNT_PER_PAGE,
    },
  }
}
