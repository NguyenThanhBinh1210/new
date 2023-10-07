import CopyRightIcon from '~/assets/images/_dmca_premi_badge_4.png'
const Copyright = () => {
  return (
    <p className='bg-[#343a40] text-white lg:flex gap-x-2 py-2'>
      <p className='mb-2 lg:mb-0'>© 2007 Công ty Kế Toán Anpha giữ bản quyền nội dung trên website này.</p>
      <p className='w-max'>
        <img className='w-[135px] h-[28px]' src={CopyRightIcon} alt='CopyRightIcon' />
      </p>
    </p>
  )
}

export default Copyright
