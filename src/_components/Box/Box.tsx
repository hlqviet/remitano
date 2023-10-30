import { HTMLAttributes } from 'react'

const Box = (props: HTMLAttributes<HTMLDivElement>) => {
  return <div {...props} />
}

export default Box
