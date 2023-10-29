import { Text } from '@/src/_components/Typography'

const SiteFooter = () => {
  return (
    <footer className='p-4 md:px-12 lg:px-24 grid justify-center border-t border-t-zinc-700'>
      <Text>&copy; Remitano {new Date().getFullYear()}</Text>
    </footer>
  )
}

export default SiteFooter
