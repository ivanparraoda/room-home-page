const Footer = () => {
  return (
    <div className='flex flex-col md:flex-row w-full'>
      <div className='md:w-1/3'>
        {/* Imagen izquierda */}
        <img
          src='/public/media/images/image-about-dark.jpg'
          alt=''
          className='bg-cover w-full h-64 md:h-auto'
        />
      </div>
      <div className='md:w-1/2 p-8'>
        {/* Contenido de texto */}
        <h2 className='uppercase font-bold mb-4'>About our furniture</h2>
        <p className='text-gray-500 text-xs'>
          Our multifunctional collection blends design and function to suit your
          individual taste. Make each room unique, or pick a cohesive theme that
          best express your interests and what inspires you. Find the furniture
          pieces you need, from traditional to contemporary styles or anything
          in between. Product specialists are available to help you create your
          dream space.
        </p>
      </div>
      <div className='md:w-1/3'>
        {/* Imagen derecha */}
        <img
          src='/public/media/images/image-about-light.jpg'
          alt=''
          className='bg-cover w-full h-64  md:h-auto'
        />
      </div>
    </div>
  )
}

export default Footer
