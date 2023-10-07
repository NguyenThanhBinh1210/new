const ViewestItem = ({ img, title }: { img: string, title: string }) => {
  return (
    <div className='flex py-4 '>
      <div className='w-[44%] lg:w-[33%]'>
        <img src={img} alt='Image' />
      </div>
      <p className='w-[50%] lg:w-[60%] ml-auto'>{title}</p>
    </div>
  )
}

export default ViewestItem
