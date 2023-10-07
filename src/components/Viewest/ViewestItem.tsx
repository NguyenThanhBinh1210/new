import Image from '~/assets/images/thanh-lap-cong-ty.jpg'
const ViewestItem = () => {
  return (
    <div className='flex py-4 '>
      <div className='w-[44%]'>
        <img src={Image} alt='Image' />
      </div>
      <p className='w-[50%] ml-auto'>Dịch vụ thành lập công ty, doanh nghiệp Giá Rẻ -【 250.000đ 】</p>
    </div>
  )
}

export default ViewestItem
