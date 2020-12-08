import Head from 'next/head'
import AppBar from './AppBar'

export const siteTitle = '頭寒足熱2'
export const siteUrl = 'https://masopon.com/'

export default function Layout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <div className="relative overflow-hidden">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap"
          rel="stylesheet"
        ></link>
        <title>{siteTitle}</title>
        <meta name="description" content="エンジニアとしてのメモ帳兼ブログ" />
        <meta name="og:url" content={siteUrl} />
        <meta name="og:type" content="blog" />
        <meta name="og:site_name" content={siteTitle} />
      </Head>
      <AppBar></AppBar>
      <main className="p-2">
        <div className="lg:w-8/12 bg-white mx-auto my-0 p-2">{children}</div>
      </main>
    </div>
  )
}
