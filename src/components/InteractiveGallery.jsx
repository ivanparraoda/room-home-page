import { useState } from 'react'

const InteractiveGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === data.length - 1 ? 0 : prev + 1))
  }
  const handleLast = () => {
    setCurrentIndex((prev) => (prev === 0 ? data.length - 1 : prev - 1))
  }

  const data = [
    {
      id: 1,
      title: 'Discover innovative ways to decorate',
      text: 'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.',
      img: '/media/images/desktop-image-hero-1.jpg'
    },
    {
      id: 2,
      title: 'We are available all across the globe',
      text: 'With stores all over the world, it’s easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don’t hesitate to contact us today.',
      img: '/media/images/desktop-image-hero-2.jpg'
    },
    {
      id: 3,
      title: 'Manufactured with the best materials',
      text: 'Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.',
      img: '/media/images/desktop-image-hero-3.jpg'
    }
  ]

  return (
    <main className='flex flex-col md:flex-row relative w-full md:h-[450px]'>
      <div className='relative flex-grow-2 md:basis-2/3 h-64 md:h-auto'>
        <img
          src={data[currentIndex].img}
          className='w-full h-full object-cover'
          alt={data[currentIndex].title}
        />
        <div className='flex absolute items-center right-0 md:-right-24 bottom-0'>
          <div className='w-12 h-12 p-3 bg-black'>
            <button onClick={handleLast}>
              <img
                src='/media/images/icon-angle-left.svg'
                alt='left'
                className='w-3 h-5'
              />
            </button>
          </div>
          <div className='w-12 h-12 p-3 bg-black'>
            <button onClick={handleNext}>
              <img
                src='/media/images/icon-angle-right.svg'
                alt='right'
                className='w-3 h-5'
              />
            </button>
          </div>
        </div>
      </div>

      <div className='p-16 flex flex-col gap-4 flex-grow md:basis-1/3 md:mt-10 min-h-[200px]'>
        <h2 className='font-bold text-3xl'>{data[currentIndex].title}</h2>
        <p className='text-xs text-gray-500'>{data[currentIndex].text}</p>
        <a
          href='#'
          className='flex gap-4 font-semibold tracking-widest items-center hover:opacity-40'
        >
          SHOP NOW{' '}
          <img
            src='/media/images/icon-arrow.svg'
            alt='arrow'
            className='w-10 h-3'
          />
        </a>
      </div>
    </main>
  )
}

export default InteractiveGallery
