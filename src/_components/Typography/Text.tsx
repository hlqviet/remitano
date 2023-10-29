import { HTMLAttributes } from 'react'

const Text = (props: HTMLAttributes<HTMLSpanElement>) => {
  return <span {...props} />
}

export default Text
