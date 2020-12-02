import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { getSortedPostsData } from '../lib/posts'
import { GetStaticProps } from 'next'
import Pager from '@/components/Pager'
import { FormattedPostData } from '@/types/post'
import PostTitle from '@/components/posts/title'

const COUNT_PER_PAGE = 10

type Props = {
  posts: FormattedPostData[]
  currentPage: number
  total: number
  perPage: number
}

export default function Home(props: Props): JSX.Element {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
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
  const end = COUNT_PER_PAGE * pageNumber
  const start = end - COUNT_PER_PAGE
  const allPostsData = await getSortedPostsData()
  const posts = allPostsData.slice(start, end)

  return {
    props: {
      posts: posts,
      currentPage: pageNumber,
      total: allPostsData.length,
      perPage: COUNT_PER_PAGE,
    },
  }
}
