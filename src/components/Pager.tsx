import Link from 'next/link'

type Props = {
  total: number
  page: number
  perPage: number
  href: string
  asCallback: (pageNumber: number) => string
}

const Pager = (props: Props): JSX.Element => {
  const { total, page, perPage, href, asCallback } = props
  const prevPage = page > 1 ? page - 1 : null
  let nextPage = null
  if (page < Math.ceil(total / perPage)) {
    nextPage = page + 1
  }
  return (
    <div className="pager">
      <span className="pager-item">
        {prevPage ? (
          <Link href={href} as={asCallback(prevPage)}>
            <a>{prevPage}</a>
          </Link>
        ) : (
          ``
        )}
      </span>
      <span className="pager-item">{page}</span>
      <span className="pager-item">
        {nextPage ? (
          <Link href={href} as={asCallback(nextPage)}>
            <a>{nextPage}</a>
          </Link>
        ) : (
          ``
        )}
      </span>
    </div>
  )
}
export default Pager
