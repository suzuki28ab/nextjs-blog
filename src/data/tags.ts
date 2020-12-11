const tags = [
  { id: 'css', name: 'CSS' },
  { id: 'flutter', name: 'Flutter' },
  { id: 'html', name: 'HTML' },
  { id: 'javascript', name: 'JavaScript' },
  { id: 'laravel', name: 'Laravel' },
  { id: 'next', name: 'Next.js' },
  { id: 'php', name: 'PHP' },
  { id: 'react', name: 'React' },
  { id: 'vs-code', name: 'VS Code' },
  { id: 'wsl2', name: 'WSL2' },
  { id: 'fish', name: 'fish' },
  { id: 'ios', name: 'iOS' },
  { id: 'terminal', name: 'terminal' },
  { id: 'editor', name: 'エディタ' },
  { id: 'shell', name: 'シェル' },
  { id: 'font', name: 'フォント' },
]

const getTagName = (id: string): string => {
  const tag = tags.filter(tag => tag.id == id)[0]
  return tag.name
}

export { tags, getTagName }
