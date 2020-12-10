const Tag = ({ name }: { name: string }): JSX.Element => {
  return (
    <span className="bg-customGreen text-white border-customDarkGreen border-solid border-l-4 text-xs m-1 px-1 py-1 whitespace-nowrap">
      {name}
    </span>
  )
}

export default Tag
