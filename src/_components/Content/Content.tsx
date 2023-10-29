import { DetailedHTMLProps, HTMLAttributes } from 'react'

const Content = (
  props: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
) => {
  const { className = '', ...rest } = props

  return <main className={`p-4 md:px-40 md:py-8 ${className}`} {...rest} />
}

export default Content
