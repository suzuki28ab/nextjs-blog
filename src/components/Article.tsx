import ReactMarkdown from 'react-markdown'
import CodeBlock from './CodeBlock'

const Article = ({ content }: { content: string }): JSX.Element => {
  return (
    <article className="break-words">
      <ReactMarkdown renderers={{ code: CodeBlock }}>{content}</ReactMarkdown>
    </article>
  )
}

export default Article
