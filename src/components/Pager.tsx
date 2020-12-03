import range from '@/lib/util'
import Link from 'next/link'
import styles from './pager.module.css'

type Props = {
  total: number
  currentPage: number
  perPage: number
  href: string
  asCallback: (pageNumber: number) => string
}

const Pager = (props: Props): JSX.Element => {
  const { total, currentPage, perPage, href, asCallback } = props
  const pageRange = range(Math.ceil(total / perPage))
  const prevPage = currentPage > 1 ? currentPage - 1 : null
  let nextPage = null
  if (currentPage < Math.ceil(total / perPage)) {
    nextPage = currentPage + 1
  }
  return (
    <ul className="flex justify-center">
      <li className={styles.pageItem}>
        {prevPage && (
          <Link href={href} as={asCallback(prevPage)}>
            <a className={styles.linkHover}>&lt;</a>
          </Link>
        )}
      </li>

      {pageRange.map(
        pageNumber =>
          isMoreThanTwoAway(pageNumber, currentPage) &&
          (pageNumber == currentPage ? (
            <li className={styles.pageItemActive}>{pageNumber}</li>
          ) : (
            <li className={styles.pageItem}>
              <Link href={href} as={asCallback(pageNumber)}>
                <a className={styles.linkHover}>{pageNumber}</a>
              </Link>
            </li>
          )),
      )}

      <li className={styles.pageItem}>
        {nextPage && (
          <Link href={href} as={asCallback(nextPage)}>
            <a className={styles.linkHover}>&gt;</a>
          </Link>
        )}
      </li>
    </ul>
  )
}
export default Pager

const isMoreThanTwoAway = (number: number, currentPage: number) => {
  return number <= currentPage + 2 && number >= currentPage - 2
}
