import { ImageRenderer } from '@/lib/parser'
import loadable from '@loadable/component'
import styles from './Article.module.scss'
const ReactMarkdown = loadable(() => import('react-markdown'))
const CodeBlock = loadable(() => import('./CodeBlock'))

const Article = ({ content }: { content: string }): JSX.Element => {
  return (
    <article className={styles.article}>
      <ReactMarkdown renderers={{ code: CodeBlock, image: ImageRenderer }}>{content}</ReactMarkdown>
    </article>
  )
}

export default Article
