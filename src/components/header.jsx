import Link from 'next/link'

export const Header = () => {
  return (
    <nav className="flex border-b border-gray-300 py-4 px-4">
      <Link
        href="/"
        className="py-2 text-base font-medium leading-6 transition-colors duration-200 hover:text-gray-600"
      >
        Home
      </Link>
      <Link
        href="/profile"
        className="ml-10 py-2 text-base font-medium leading-6 transition-colors duration-200 hover:text-gray-600"
      >
        Profile
      </Link>
      <Link
        href="/protected"
        className="ml-10 py-2 text-base font-medium leading-6 transition-colors duration-200 hover:text-gray-600"
      >
        Protected
      </Link>
    </nav>
  )
}
