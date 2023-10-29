import Link from 'next/link'

import Heading from '@/src/_components/Typography/Heading'

const SiteHeader = () => {
  return (
    <header className='p-4 md:px-14 md:py-8 bg-gray-300 dark:bg-black'>
      <div className='grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-4'>
        <Link className='md:row-span-2' href='/'>
          <Heading level={1}>Funny Movies</Heading>
        </Link>
        <div className='grid grid-cols-3 gap-2 justify-end'>
          <input />
          <input />
          <button>Log in/Register</button>
        </div>
      </div>
      <hr className='mt-2' />
    </header>
  )
}

export default SiteHeader
