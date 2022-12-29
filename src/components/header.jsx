import Link from 'next/link'

const navigationLinks = [
  {
    name: 'home',
    href: '/',
  },
  {
    name: 'profile',
    href: '/profile',
  },
  {
    name: 'protected',
    href: '/protected',
  },
]

export const Header = () => {
  return (
    <nav className="flex gap-10 border-b border-gray-300 py-4 px-4">
      {navigationLinks?.map((item, index) => {
        const { name, href } = item
        return (
          <Link
            key={index}
            href={href}
            className="py-2 text-base font-medium capitalize leading-6 transition-colors duration-200 hover:text-gray-600"
          >
            {name}
          </Link>
        )
      })}
    </nav>
  )
}
