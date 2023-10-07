const GpkdItem = ({ img, title }: { img: string, title: string }) => {
  return (
    <div className='cursor-pointer'>
      <div className='w-full'>
        <img src={img} alt='Image' />
      </div>
      <p className='leading-5 py-4 border-b'>{title}</p>
    </div>
  )
}

export default GpkdItem
