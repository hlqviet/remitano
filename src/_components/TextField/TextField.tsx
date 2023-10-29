import { InputHTMLAttributes } from 'react'

const TextField = (props: InputHTMLAttributes<HTMLInputElement>) => {
  const { className = '', ...rest } = props

  return (
    <input
      className={`p-2 bg-white dark:bg-black rounded-lg border border-gray-500 transition-all ${className}`}
      {...rest}
    />
  )
}

export default TextField
