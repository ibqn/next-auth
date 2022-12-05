import { classNames } from 'util/class-names'

export const Input = (props) => {
  const { className, ...restProps } = props

  return (
    <input
      {...restProps}
      className={classNames(
        className,
        'mt-3 w-full rounded border border-gray-300 p-2 outline-none focus:border-white focus:shadow-input-focus'
      )}
    />
  )
}
