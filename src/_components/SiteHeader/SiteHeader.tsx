import Link from 'next/link'

import Box from '@/src/_components/Box'
import UserControls from '@/src/_components/SiteHeader/components/UserControls'
import { Heading } from '@/src/_components/Typography'

const SiteHeader = () => {
  return (
    <header className='p-4 md:px-12 lg:px-24 lg:py-8 border-b border-b-zinc-700'>
      <Box className='grid grid-cols-1 md:grid-cols-3 lg:grid-rows-2 gap-4'>
        <Link className='md:row-span-2' href='/'>
          <Heading level={1}>Funny Movies</Heading>
        </Link>
        <UserControls />
      </Box>
      <hr className='mt-2' />
    </header>
  )
}

export default SiteHeader
