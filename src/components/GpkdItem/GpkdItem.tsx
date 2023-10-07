import Image from '~/assets/images/dich-vu-bo-sung-nganh-nghe-kinh-doanh.jpg'
const GpkdItem = () => {
  return (
    <div className='cursor-pointer'>
      <div className='w-full'>
        <img src={Image} alt='Image' />
      </div>
      <p className='leading-5 py-4 border-b'>Dịch vụ Thay Đổi Tên Công Ty - Chỉ 500.000đ (Không Phát Sinh Phí)</p>
    </div>
  )
}

export default GpkdItem
