import { ButtonHTMLAttributes } from 'react'

const getButtonStyles = (type: 'primary' | 'default') => {
  switch (type) {
    case 'primary':
      return 'text-white border-blue-800 bg-blue-500 hover:bg-blue-400 active:bg-blue-700'
    case 'default':
      return 'border-gray-500 bg-slate-200 dark:bg-gray-500 hover:bg-gray-400 active:bg-slate-400 dark:active:bg-gray-700'
  }
}

interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  htmlType?: ButtonHTMLAttributes<HTMLButtonElement>['type']
  type?: 'primary' | 'default'
}

const Button = (props: ButtonProps) => {
  const { className = '', htmlType, type = 'default', ...rest } = props

  return (
    <button
      className={`w-full px-4 py-2 rounded-lg border ${getButtonStyles(
        type
      )} cursor-pointer disabled:border-gray-400 disabled:bg-gray-500 disabled:text-gray-700 disabled:cursor-not-allowed disabled:pointer-events-none transition-all ${className}`}
      type={htmlType}
      role='button'
      {...rest}
    />
  )
}

export default Button
