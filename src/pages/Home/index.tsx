import GpkdItem from '~/components/GpkdItem/GpkdItem'
import Section from '~/components/Section/Section'
import ViewestItem from '~/components/Viewest/ViewestItem'
import ImageCompany from '~/assets/images/thanh-lap-cong-ty.jpg'
import ImageTest1 from '~/assets/images/tra-cuu-ma-nganh-nghe-kinh-doanh.jpg'

const Home = () => {
  return (
    <div className='px-3 lg:grid lg:grid-cols-3 gap-x-6 mt-3'>
      <div className='lg:col-span-3 lg:grid grid-cols-2 lg:gap-x-3 lg:mb-6'>
        <div className='relative'>
          <img src={ImageCompany} alt='ImageCompany' />
          <div className='absolute bottom-0 h-full w-full bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.4)]'></div>
          <p className='absolute bottom-4 left-4 font-medium text-white text-[17px]'>
            Dịch Vụ Thành Lập Công Ty TNHH, 250.000đ, 1 - 3 Ngày Xong
          </p>
        </div>
        <div className='w-[100%] overflow-x-scroll lg:overflow-x-auto mt-2 mb-6 lg:mb-0'>
          <div className='w-max flex gap-x-3 lg:flex-col lg:gap-y-3 lg:w-full lg:h-full'>
            <div className='relative w-[370px] h-[208px] lg:w-full'>
              <img src={ImageCompany} alt='ImageCompany' />
              <div className='absolute bottom-0 h-full w-full bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.4)]'></div>
              <p className='absolute bottom-4 left-4 font-medium text-white text-[17px]'>
                Dịch Vụ Thành Lập Công Ty TNHH, 250.000đ, 1 - 3 Ngày Xong
              </p>
            </div>
            <div className='flex gap-x-3 lg:grid lg:grid-cols-2'>
              <div className='relative w-[370px] lg:w-full lg:h-full h-[208px] lg:col-span-1'>
                <img src={ImageCompany} alt='ImageCompany' />
                <div className='absolute bottom-0 h-full w-full bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.4)]'></div>
                <p className='absolute bottom-4 left-4 font-medium text-white text-[17px]'>
                  Dịch Vụ Thành Lập Công Ty TNHH, 250.000đ, 1 - 3 Ngày Xong
                </p>
              </div>
              <div className='relative w-[370px] lg:w-full lg:h-full h-[208px] lg:col-span-1'>
                <img src={ImageCompany} alt='ImageCompany' />
                <div className='absolute bottom-0 h-full w-full bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.4)]'></div>
                <p className='absolute bottom-4 left-4 font-medium text-white text-[17px]'>
                  Dịch Vụ Thành Lập Công Ty TNHH, 250.000đ, 1 - 3 Ngày Xong
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='lg:col-span-2'>
        <Section title='Chia sẻ kinh nghiệm'>
          <div className='md:grid md:grid-cols-2 md:gap-x-6'>
            <div>
              <ComponentImg />
            </div>
            <div>
              <ItemSmall />
              <ItemSmall />
            </div>
          </div>
        </Section>
        <Section title='Hồ sơ - thủ tục'>
          <div>
            <div className='md:grid md:grid-cols-2 md:gap-x-6'>
              <ComponentImg />
              <ComponentImg />
            </div>
            <div className='md:grid md:grid-cols-2 md:gap-x-6'>
              <ItemSmall />
              <ItemSmall />
              <ItemSmall />
              <ItemSmall />
            </div>
          </div>
        </Section>
      </div>
      <div className='lg:col-span-1'>
        <Section title='Công ty TNHH'>
          <div className='mb-8'>
            <div className='relative'>
              <img src={ImageCompany} alt='ImageCompany' />
              <div className='absolute bottom-0 h-full w-full bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.4)]'></div>
              <p className='absolute bottom-4 left-4 font-medium text-white text-[17px]'>
                Dịch Vụ Thành Lập Công Ty TNHH, 250.000đ, 1 - 3 Ngày Xong
              </p>
            </div>
            <div className='grid grid-cols-2 gap-x-4'>
              <div className='mt-4'>
                <div>
                  <img src={ImageCompany} alt='ImageCompany-s' />
                </div>
                <p className='mt-2 text-[16px] text-[#2a4e9a]'>
                  Thành lập công ty TNHH 1 thành viên - 250.000đ (Không Phát Sinh)
                </p>
              </div>
              <div className='mt-4'>
                <div>
                  <img src={ImageCompany} alt='ImageCompany-s' />
                </div>
                <p className='mt-2 text-[16px] text-[#2a4e9a]'>
                  Thành lập công ty TNHH 1 thành viên - 250.000đ (Không Phát Sinh)
                </p>
              </div>
            </div>
          </div>
        </Section>
        <Section title='Bài viết xem nhiều'>
          <div className='md:grid md:grid-cols-2 gap-6 lg:flex lg:flex-col'>
            <ViewestItem></ViewestItem>
            <ViewestItem></ViewestItem>
            <ViewestItem></ViewestItem>
            <ViewestItem></ViewestItem>
          </div>
        </Section>
      </div>
      <div className='lg:col-span-3'>
        <Section title='Thay đổi GPKD'>
          <div className='grid grid-cols-2 gap-6 lg:grid-cols-3 pb-8'>
            <GpkdItem></GpkdItem>
            <GpkdItem></GpkdItem>
            <GpkdItem></GpkdItem>
            <GpkdItem></GpkdItem>
            <GpkdItem></GpkdItem>
            <GpkdItem></GpkdItem>
          </div>
        </Section>
      </div>
    </div>
  )
}
export const ItemSmall = () => {
  return (
    <div className='py-4 flex border-b md:border-none'>
      <div className='md:w-[30%]'>
        <img src={ImageTest1} alt='ImageTest1' />
      </div>
      <div className='w-[60%] ml-auto'>
        Tra cứu thông tin mã ngành nghề kinh doanh Việt NamTra cứu thông tin mã ngành nghề kinh doanh Việt Nam
      </div>
    </div>
  )
}

export const ComponentImg = () => {
  return (
    <div>
      <div className='mb-2'>
        <img src={ImageCompany} alt='ádasd' />
      </div>
      <h2 className='border-b py-4 text-[20px] text-[#2a4e9a] mb-2'>
        Các loại hình Doanh Nghiệp và ưu nhược điểm - Ngắn, dễ hiểu
      </h2>
      <p className='text-[#6c757d] mb-8'>
        Bài viết tập trung phân tích ưu nhược điểm của các loại hình doanh nghiệp tại Việt Nam gồm công ty TNHH 1 thành
        viên, công ty TNHH 2 thành viên trở lên, công ty cổ phần và doanh nghiệp tư nhân, công ty hợp danh. Nếu có dự
        định thành lập công ty bạn không thể bỏ qua bài viết này.
      </p>
    </div>
  )
}
export default Home
