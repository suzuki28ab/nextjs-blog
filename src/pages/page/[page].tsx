import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '@/components/layout'
import utilStyles from '@/styles/utils.module.css'
import { getSortedPostsData } from '@/lib/posts'
import Date from '@/components/date'
import { GetStaticPaths, GetStaticProps } from 'next'
import range from '@/lib/util'
import Pager from '@/components/Pager'

const COUNT_PER_PAGE = 1

type Props = {
  posts: {
    date: string
    title: string
    id: string
  }[]
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
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this in{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {props.posts.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
      <Pager
        currentPage={props.currentPage}
        total={props.total}
        perPage={props.perPage}
        href="/page/[page]"
        asCallback={page => `/page/${page}`}
      />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const page = params?.page as string
  const pageNumber = parseInt(page, 10)
  const end = COUNT_PER_PAGE * pageNumber
  const start = end - COUNT_PER_PAGE
  const allPostsData = getSortedPostsData()
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

export const getStaticPaths: GetStaticPaths = async () => {
  const allPostsData = getSortedPostsData()
  const pages = range(Math.ceil(allPostsData.length / COUNT_PER_PAGE))
  const paths = pages.map(page => ({
    params: { page: `${page}` },
  }))

  return { paths: paths, fallback: false }
}
