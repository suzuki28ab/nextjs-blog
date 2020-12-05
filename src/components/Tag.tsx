const Tag = ({ name }: { name: string }): JSX.Element => {
  return <span className="tag text-xs whitespace-nowrap">{name}</span>
}

export default Tag
