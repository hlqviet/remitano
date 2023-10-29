import Link from 'next/link'

import Button from '@/src/_components/Button'
import TextField from '@/src/_components/TextField'
import { Heading } from '@/src/_components/Typography'

const SiteHeader = () => {
  return (
    <header className='p-4 md:px-12 lg:px-24 lg:py-8 border-b border-b-zinc-700'>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-rows-2 gap-4'>
        <Link className='md:row-span-2' href='/'>
          <Heading level={1}>Funny Movies</Heading>
        </Link>
        <div className='grid grid-cols-2 lg:grid-cols-3 col-span-2 gap-2 justify-end'>
          <TextField name='email' placeholder='Email' />
          <TextField name='password' placeholder='Password' type='password' />
          <Button type='primary'>Log in/Register</Button>
        </div>
      </div>
      <hr className='mt-2' />
    </header>
  )
}

export default SiteHeader
