import Head from 'next/head'
import Layout from '@/components/layout'
import { getPostsByCategoryName } from '@/lib/posts'
import { GetStaticPaths, GetStaticProps } from 'next'
import { range, sliceForCurrentPage } from '@/lib/util'
import Pager from '@/components/Pager'
import PostTitle from '@/components/posts/Title'
import { FormattedPostData } from '@/types/post'
import { categories, getCategoryName } from '@/data/categories'

const COUNT_PER_PAGE = 10

type Props = {
  posts: FormattedPostData[]
  currentPage: number
  total: number
  perPage: number
  searchWord: string
}

const CategoryPage = (props: Props): JSX.Element => {
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
          href="/category/[...id]"
          searchWord={props.searchWord}
          asCallback={(page, category) => `/category/${category}/${page}`}
        />
      </section>
    </Layout>
  )
}

export default CategoryPage

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const [categoryId, page] = params?.id as Array<string>
  const pageNumber = parseInt(page, 10)
  const categoryPosts = await getPostsByCategoryName(getCategoryName(categoryId))
  const posts = sliceForCurrentPage(categoryPosts, COUNT_PER_PAGE, pageNumber)

  return {
    props: {
      posts: posts,
      currentPage: pageNumber,
      total: categoryPosts.length,
      perPage: COUNT_PER_PAGE,
      searchWord: categoryId,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const result = await Promise.all(
    categories.map(async category => {
      const posts = await getPostsByCategoryName(category.name)
      const pages = range(Math.ceil(posts.length / COUNT_PER_PAGE))
      const results = pages.map(page => {
        return { params: { id: [category.id, String(page)] } }
      })
      return results
    }),
  )

  const paths = result.flat()

  return { paths: paths, fallback: false }
}
