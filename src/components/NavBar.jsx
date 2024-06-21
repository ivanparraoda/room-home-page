import { useState } from 'react'

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const handleMenu = () => {
    setIsMenuOpen((prev) => !prev)
  }

  const handleMenuClose = () => {
    setIsMenuOpen((prev) => !prev)
  }
  return (
    <header className='absolute md:block z-10 w-full p-8 '>
      <nav
        className='flex flex-row-reverse md:flex-row items-center justify-center  md:justify-normal md:gap-10  '
        aria-label='Main navigation'
      >
        <div className='flex items-center '>
          <a href='#' aria-label='Home'>
            <img
              src='/public/media/images/logo.svg'
              alt='logo'
              className='h-4 md:h-4'
            />
          </a>
        </div>
        <div className='absolute  left-4 lg:hidden'>
          {/* Este botón de hamburguesa será visible solo en pantallas pequeñas */}
          <button
            className='flex items-start px-3 py-2  rounded text-white '
            onClick={handleMenu}
          >
            <svg
              className='h-5 w-5 fill-current'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
            </svg>
          </button>
        </div>
        <ul
          className={` flex gap-4 w-full  absolute md:static left-0 top-0 h-[6rem] md:h-1/2 items-center  font-bold lg:gap-6 lg:font-semibold lg:text-white lg:flex-grow ${
            isMenuOpen ? 'block text-black' : 'hidden '
          } bg-white  p-4 lg:p-0 lg:bg-transparent lg:flex lg:items-center`}
        >
          <li className='nav-item md:hidden mr-16'>
            <button href='#' onClick={handleMenuClose}>
              <img src='/public/media/images/icon-close.svg' alt='close menu' />
            </button>
          </li>
          <li className='nav-item'>
            <a href='#'>home</a>
          </li>
          <li className='nav-item'>
            <a href='#'>shop</a>
          </li>
          <li className='nav-item'>
            <a href='#'>about</a>
          </li>
          <li className='nav-item'>
            <a href='#'>contact</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default NavBar
