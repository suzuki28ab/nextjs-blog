import Layout from '@/components/layout'
import Head from 'next/head'
import { GetStaticProps, GetStaticPaths } from 'next'
import { getAllPostIds, getPostById } from '@/lib/posts'
import { FormattedPostData } from '@/types/post'
import PostTitle from '@/components/posts/title'
import { useEffect } from 'react'
import Article from '@/components/Article'

type Props = {
  postData: FormattedPostData
}

export default function Post(props: Props): JSX.Element {
  useEffect(() => {
    const aTags = document.getElementsByTagName('a')
    for (const aTag of Array.from(aTags)) {
      if (aTag.hostname != location.hostname) {
        aTag.setAttribute('target', '_blank')
      }
    }
  })
  return (
    <>
      <Layout>
        <Head>
          <title>{props.postData.title}</title>
        </Head>
        <PostTitle post={props.postData}></PostTitle>
        <Article content={props.postData.content} />
      </Layout>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllPostIds()
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostById(params?.id as string)
  return {
    props: {
      postData,
    },
  }
}
