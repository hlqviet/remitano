import { HTMLAttributes } from 'react'

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  level?: number
}

const Heading = (props: HeadingProps) => {
  const { className = '', level, ...rest } = props

  switch (level) {
    case 1:
      return <h1 className={`text-5xl ${className}`} role='heading' {...rest} />
    case 3:
      return <h3 className={`text-3xl ${className}`} role='heading' {...rest} />
    case 4:
      return <h4 className={`text-2xl ${className}`} role='heading' {...rest} />
    case 5:
      return <h5 className={`text-xl ${className}`} role='heading' {...rest} />
    case 6:
      return <h6 className={`text-lg ${className}`} role='heading' {...rest} />
    case 2:
    default:
      return <h2 className={`text-4xl ${className}`} role='heading' {...rest} />
  }
}

export default Heading
