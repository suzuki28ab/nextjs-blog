const SideBar = (): JSX.Element => {
  return (
    <nav className="hidden lg:block z-10 absolute top-14 left-auto right-0 h-full w-2/12 max-h-full">
      <h3 className="text-gray-500 font-bold p-4">カテゴリー</h3>
      <ul className="pl-8 text-sm">
        <li className="p-2">プログラミング</li>
        <li className="p-2">雑記</li>
      </ul>
      <h3 className="text-gray-500 font-bold p-4">タグ</h3>
    </nav>
  )
}

export default SideBar
