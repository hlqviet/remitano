import { FormHTMLAttributes } from 'react'

const Form = (props: FormHTMLAttributes<HTMLFormElement>) => {
  return <form role='form' {...props} />
}

export default Form
