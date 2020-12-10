import styles from './Article.module.scss'
import ReactMarkdown from 'react-markdown'
import CodeBlock from './CodeBlock'

const Article = ({ content }: { content: string }): JSX.Element => {
  return (
    <article className={styles.article}>
      <ReactMarkdown renderers={{ code: CodeBlock }}>{content}</ReactMarkdown>
    </article>
  )
}

export default Article
