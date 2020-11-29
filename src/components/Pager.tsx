import Link from 'next/link'

type Props = {
  total: number
  currentPage: number
  perPage: number
  href: string
  asCallback: (pageNumber: number) => string
}

const Pager = (props: Props): JSX.Element => {
  const { total, currentPage, perPage, href, asCallback } = props
  const prevPage = currentPage > 1 ? currentPage - 1 : null
  let nextPage = null
  if (currentPage < Math.ceil(total / perPage)) {
    nextPage = currentPage + 1
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
        <>
          <span className="mx-1">{''}</span>
          <span className="mx-1">{''}</span>
        </>
      )}

      <span className="mx-1">{currentPage}</span>

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
        <>
          <span className="mx-1">{''}</span>
          <span className="mx-1">{''}</span>
        </>
      )}
    </div>
  )
}
export default Pager
