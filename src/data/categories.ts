const categories = [
  { id: 'programming', name: 'プログラミング' },
  { id: 'random-note', name: '雑記' },
]

const getCategoryName = (id: string): string => {
  const category = categories.filter(category => category.id == id)[0]
  return category.name
}

export { categories, getCategoryName }
