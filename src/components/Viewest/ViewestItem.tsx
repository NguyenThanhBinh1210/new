const ViewestItem = ({ img, title, showBig }: { img: string; title: string; showBig?: boolean }) => {
  return (
    <div className={`flex py-4 ${showBig && 'lg:flex-col lg:pb-2 lg:border-b'}`}>
      <div className={`w-[44%] lg:w-[33%] ${showBig && 'lg:w-[100%] mb-3'}`}>
        <img src={img} alt='Image' />
      </div>
      <p className={`w-[50%] lg:w-[60%] ml-auto ${showBig && 'lg:w-[100%]'}`}>{title}</p>
    </div>
  )
}

export default ViewestItem
