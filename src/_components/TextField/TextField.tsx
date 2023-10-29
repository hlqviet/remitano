import { ForwardedRef, forwardRef, InputHTMLAttributes } from 'react'

const TextField = (
  props: InputHTMLAttributes<HTMLInputElement>,
  ref: ForwardedRef<HTMLInputElement>
) => {
  const { className = '', ...rest } = props

  return (
    <input
      className={`w-full p-2 bg-white dark:bg-black rounded-lg border border-gray-500 transition-all ${className}`}
      ref={ref}
      {...rest}
    />
  )
}

export default forwardRef(TextField)
