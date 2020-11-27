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
    <div>
      {prevPage ? (
        <>
          <span className="mx-1">
            <Link href={href} as={asCallback(prevPage)}>
              <a>{'<'}</a>
            </Link>
          </span>
          <span className="mx-1">
            <Link href={href} as={asCallback(prevPage)}>
              <a>{prevPage}</a>
            </Link>
          </span>
        </>
      ) : (
        ``
      )}

      <span>{page}</span>

      {nextPage ? (
        <>
          <span className="mx-1">
            <Link href={href} as={asCallback(nextPage)}>
              <a>{nextPage}</a>
            </Link>
          </span>
          <span className="mx-1">
            <Link href={href} as={asCallback(nextPage)}>
              <a>{'>'}</a>
            </Link>
          </span>
        </>
      ) : (
        ``
      )}
    </div>
  )
}
export default Pager
