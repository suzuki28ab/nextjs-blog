import Head from 'next/head'
import styles from './layout.module.css'
import Link from 'next/link'
import AppBar from './AppBar'

export const siteTitle = 'Next.js Sample Website'

export default function Layout({
  children,
  home,
}: {
  children: React.ReactNode
  home?: boolean
}): JSX.Element {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Learn how to build a personal website using Next.js" />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <AppBar></AppBar>
      <main className="bg-whiteGreen h-screen p-2">
        <div className="bg-white h-screen max-w-screen-lg mx-auto my-0 p-2">{children}</div>
      </main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}
