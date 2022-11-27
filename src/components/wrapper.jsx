export const Wrapper = ({ children }) => {
  return (
    <div className="relative w-full overflow-x-hidden">
      <div className="container mx-auto min-h-screen py-4 px-2">{children}</div>
    </div>
  )
}
