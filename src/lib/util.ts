const range = (stop: number): Array<number> => {
  return Array.from({ length: stop }, (_, i) => i + 1)
}

export default range
