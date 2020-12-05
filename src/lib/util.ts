const range = (stop: number): Array<number> => {
  return Array.from({ length: stop }, (_, i) => i + 1)
}

const sliceForCurrentPage = (
  array: Array<any>,
  perPage: number,
  currentPage: number,
): Array<any> => {
  const end = perPage * currentPage
  const start = end - perPage
  return array.slice(start, end)
}

export { range, sliceForCurrentPage }
