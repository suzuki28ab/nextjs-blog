import { categories } from '@/data/categories'
import { tags } from '@/data/tags'
import Link from 'next/link'
import Tag from './Tag'

const SideBar = ({ toggle }: { toggle: boolean }): JSX.Element => {
  return (
    <nav
      className={
        toggle
          ? 'lg:hidden z-10 bg-customGray absolute top-14 left-auto right-0 w-6/12'
          : 'hidden lg:block z-10 absolute top-14 left-auto right-0 w-2/12'
      }
    >
      <h3 className="text-gray-500 font-bold p-4">カテゴリー</h3>
      <ul className="text-sm">
        {categories.map(category => (
          <li key={category.id}>
            <Link href={`/category/${category.id}/1`}>
              <a className="block pl-8 py-2">{category.name}</a>
            </Link>
          </li>
        ))}
      </ul>
      <h3 className="text-gray-500 font-bold p-4">タグ</h3>
      <ul className="pl-10 text-sm leading-8">
        {tags.map(tag => (
          <li key={tag.id}>
            <Link href={`/tag/${tag.id}/1`}>
              <a>
                <Tag name={tag.name} />
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default SideBar
