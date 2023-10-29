const SiteFooter = () => {
  return (
    <footer className='p-4 grid justify-center bg-gray-300 dark:bg-black'>
      <span>&copy; Remitano {new Date().getFullYear()}</span>
    </footer>
  )
}

export default SiteFooter
