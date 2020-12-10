import Head from 'next/head'
import Layout from '@/components/layout'
import { getSortedPosts } from '@/lib/posts'
import { GetStaticPaths, GetStaticProps } from 'next'
import { range, sliceForCurrentPage } from '@/lib/util'
import Pager from '@/components/Pager'
import PostTitle from '@/components/posts/Title'
import { FormattedPostData } from '@/types/post'

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
          <PostTitle post={post} key={post.id}></PostTitle>
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

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const page = params?.page as string
  const pageNumber = parseInt(page, 10)
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

export const getStaticPaths: GetStaticPaths = async () => {
  const allPostsData = await getSortedPosts()
  const pages = range(Math.ceil(allPostsData.length / COUNT_PER_PAGE))
  const paths = pages.map(page => ({
    params: { page: `${page}` },
  }))

  return { paths: paths, fallback: false }
}
