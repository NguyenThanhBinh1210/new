import DichVuKeToanTronGoi from '~/assets/images/Dich-vu-ke-toan-tron-goi.jpg'
import CongTyHopDanh from '~/assets/images/cong-ty-hop-danh.jpg'
import DichVuBaoCao from '~/assets/images/dich-vu-bao-cao-thue.jpg'
import ThanhLapCongTY from '~/assets/images/dich-vu-bo-sung-nganh-nghe-kinh-doanh.jpg'
import ViewestItem from '~/components/Viewest/ViewestItem'
import Rating from '~/components/Rating'
import CallNow from '~/components/CallNow/CallNow'

const DichVuKeToan = () => {
  return (
    <div className='pt-3 px-3 lg:grid lg:grid-cols-3'>
      <div className='lg:col-span-2'>
        <div className='mb-5'>
          <h2 className='text-[#2a4e9a] font-[400] text-[23.5px]'>
            Dịch Vụ Kế Toán (Báo Cáo Thuế) Trọn Gói - Từ 500.000đ/tháng
          </h2>
          <div className='mt-2 h-'>
            <img src={DichVuKeToanTronGoi} alt='DichVuKeToanTronGoi' />
          </div>
          <p className='my-3'>
            <strong>
              Hơn 16&nbsp;năm&nbsp;cung cấp dịch vụ kế toán (báo cáo thuế) trọn gói và hơn 3500 doanh nghiệp đang sử
              dụng dịch vụ. Dịch vụ kế toán trọn gói được cung cấp bởi ANPHA đã và đang được các khách hàng tin tưởng,
              đánh giá là một phải pháp hoàn hảo và tiết kiệm cho doanh nghiệp với chi phí chỉ từ 500.000đ. Mỗi doanh
              nghiệp sẽ có 1 kế toán viên phụ trách mảng thuế và tư vấn các vấn đề về kế toán, bảo hiểm cho doanh
              nghiệp.
            </strong>
          </p>
          <div className=' mb-4 rounded-lg border border-[#fd6c2b] px-[10px] pb-[10px]'>
            <div className='flex gap-x-2 cursor-pointer hover:text-[#fd6c2b] '>
              <div className='text-[#fd6c2b]'>◆</div>
              <div className='text-[16px] leading-8'>
                Bảng báo giá Dịch Vụ Kế Toán Thuế Trọn Gói - Từ 500.000 đồng (*)
              </div>
            </div>
            <div className='ml-7 cursor-pointer leading-8  hover:text-[#fd6c2b]'>
              1. Bảng giá dịch vụ kế toán thuế tại miền Nam
            </div>
            <div className='ml-7 cursor-pointer leading-8 hover:text-[#fd6c2b]'>
              2. Bảng giá dịch vụ kế toán thuế tại miền Bắc và miền Trung
            </div>
            <div className='flex gap-x-2 cursor-pointer hover:text-[#fd6c2b]'>
              <div className='text-[#fd6c2b]'>◆</div>
              <div className='text-[16px] leading-8'>
                Nhiệm vụ của Anpha khi cung cấp dịch vụ kế toán (dịch vụ báo cáo thuế)
              </div>
            </div>
            <div className='flex gap-x-2 cursor-pointer hover:text-[#fd6c2b]'>
              <div className='text-[#fd6c2b]'>◆</div>
              <div className='text-[16px] leading-8'>
                Khách hàng cần cung cấp gì khi sử dụng dịch vụ kế toán - báo cáo thuế
              </div>
            </div>
            <div className='flex gap-x-2 cursor-pointer hover:text-[#fd6c2b]'>
              <div className='text-[#fd6c2b]'>◆</div>
              <div className='text-[16px] leading-8'>
                Cam kết trách nhiệm của Anpha khi cung cấp dịch vụ kế toán thuế
              </div>
            </div>
            <div className='flex gap-x-2 cursor-pointer hover:text-[#fd6c2b]'>
              <div className='text-[#fd6c2b]'>◆</div>
              <div className='text-[16px] leading-8'>10 câu hỏi thường gặp về dịch vụ kế toán của Anpha</div>
            </div>
          </div>
          <span className='text-[24px] text-[#2a4d9f] leading-6 '>
            <strong>Bảng báo giá Dịch Vụ Kế Toán Thuế Trọn Gói - Từ 500.000 đồng (*)</strong>
          </span>
          <div className='text-[18px] mt-2 text-[#3472b8]'>
            <strong>1. Bảng giá dịch vụ kế toán thuế tại miền Nam</strong>
          </div>
          <div>
            <div className='bg-[#2a4e9a] text-white p-[7px] border border-white'>
              <p className='text-center'>
                <span className=''>
                  <strong>Nhóm ngành thương mại</strong>
                </span>
              </p>
            </div>
            <div className='flex'>
              <div className='w-[22%] bg-[#a9d0ff] py-1.5 border border-white text-center font-semibold'>
                Số hóa đơn
              </div>
              <div className='w-[39%] bg-[#a9d0ff] py-1.5 border border-white text-center font-semibold'>
                Không có tờ khai hải quan
              </div>
              <div className='w-[39%] bg-[#a9d0ff] py-1.5 border border-white text-center font-semibold'>
                Có tờ khai hải quan
              </div>
            </div>
            <div className='flex'>
              <div className='w-[22%] bg-[#a9d0ff] py-1.5 border border-white text-center font-semibold'>
                Không có hóa đơn
              </div>
              <div className='w-[39%] bg-[#e5f0ff] py-1.5 border border-white text-center font-[400]'>
                1.500.000 đồng/quý
              </div>
              <div className='w-[39%] bg-[#e5f0ff] py-1.5 border border-white text-center font-[400]'>
                1.500.000 đồng/quý
              </div>
            </div>
            <div className='flex'>
              <div className='w-[22%] bg-[#a9d0ff] py-1.5 border border-white text-center font-semibold'>Dưới 10</div>
              <div className='w-[39%] bg-[#e5f0ff] py-1.5 border border-white text-center font-[400]'>
                2.100.000 đồng/quý
              </div>
              <div className='w-[39%] bg-[#e5f0ff] py-1.5 border border-white text-center font-[400]'>
                2.700.000 đồng/quý
              </div>
            </div>
            <div className='flex'>
              <div className='w-[22%] bg-[#a9d0ff] py-1.5 border border-white text-center font-semibold'>Dưới 16</div>
              <div className='w-[39%] bg-[#e5f0ff] py-1.5 border border-white text-center font-[400]'>
                2.400.000 đồng/quý
              </div>
              <div className='w-[39%] bg-[#e5f0ff] py-1.5 border border-white text-center font-[400]'>
                3.000.000 đồng/quý
              </div>
            </div>
            <div className='flex'>
              <div className='w-[22%] bg-[#a9d0ff] py-1.5 border border-white text-center font-semibold'>Dưới 31</div>
              <div className='w-[39%] bg-[#e5f0ff] py-1.5 border border-white text-center font-[400]'>
                3.000.000 đồng/quý
              </div>
              <div className='w-[39%] bg-[#e5f0ff] py-1.5 border border-white text-center font-[400]'>
                3.900.000 đồng/quý
              </div>
            </div>
            <div className='flex'>
              <div className='w-[22%] bg-[#a9d0ff] py-1.5 border border-white text-center font-semibold'>Dưới 46</div>
              <div className='w-[39%] bg-[#e5f0ff] py-1.5 border border-white text-center font-[400]'>
                3.600.000 đồng/quý
              </div>
              <div className='w-[39%] bg-[#e5f0ff] py-1.5 border border-white text-center font-[400]'>
                4.800.000 đồng/quý
              </div>
            </div>
            <div className='flex'>
              <div className='w-[22%] bg-[#a9d0ff] py-1.5 border border-white text-center font-semibold'>Dưới 61</div>
              <div className='w-[39%] bg-[#e5f0ff] py-1.5 border border-white text-center font-[400]'>
                4.200.000 đồng/quý
              </div>
              <div className='w-[39%] bg-[#e5f0ff] py-1.5 border border-white text-center font-[400]'>
                5.700.000 đồng/quý
              </div>
            </div>
            <div className='flex'>
              <div className='w-[22%] bg-[#a9d0ff] py-1.5 border border-white text-center font-semibold'>Dưới 76</div>
              <div className='w-[39%] bg-[#e5f0ff] py-1.5 border border-white text-center font-[400]'>
                4.800.000 đồng/quý
              </div>
              <div className='w-[39%] bg-[#e5f0ff] py-1.5 border border-white text-center font-[400]'>
                6.600.000 đồng/quý
              </div>
            </div>
            <div className='flex'>
              <div className='w-[22%] bg-[#a9d0ff] py-1.5 border border-white text-center font-semibold'>Dưới 91</div>
              <div className='w-[39%] bg-[#e5f0ff] py-1.5 border border-white text-center font-[400]'>
                5.400.000 đồng/quý
              </div>
              <div className='w-[39%] bg-[#e5f0ff] py-1.5 border border-white text-center font-[400]'>
                7.200.000 đồng/quý
              </div>
            </div>
            <div className='flex'>
              <div className='w-[22%] bg-[#a9d0ff] py-1.5 border border-white text-center font-semibold'>Dưới 121</div>
              <div className='w-[39%] bg-[#e5f0ff] py-1.5 border border-white text-center font-[400]'>
                6.300.000 đồng/quý
              </div>
              <div className='w-[39%] bg-[#e5f0ff] py-1.5 border border-white text-center font-[400]'>
                8.400.000 đồng/quý
              </div>
            </div>
            <div className='flex'>
              <div className='w-[22%] bg-[#a9d0ff] py-1.5 border border-white text-center font-semibold'>Dưới 151</div>
              <div className='w-[39%] bg-[#e5f0ff] py-1.5 border border-white text-center font-[400]'>
                7.200.000 đồng/quý
              </div>
              <div className='w-[39%] bg-[#e5f0ff] py-1.5 border border-white text-center font-[400]'>
                9.600.000 đồng/quý
              </div>
            </div>
            <div className='flex'>
              <div className='w-[22%] bg-[#a9d0ff] py-1.5 border border-white text-center font-semibold'>Dưới 181</div>
              <div className='w-[39%] bg-[#e5f0ff] py-1.5 border border-white text-center font-[400]'>
                8.100.000 đồng/quý
              </div>
              <div className='w-[39%] bg-[#e5f0ff] py-1.5 border border-white text-center font-[400]'>
                10.500.000 đồng/quý
              </div>
            </div>
            <div className='flex'>
              <div className='w-[22%] bg-[#a9d0ff] py-1.5 border border-white text-center font-semibold'>
                Từ 181 trở lên
              </div>
              <div className='w-[78%] bg-[#e5f0ff] py-1.5 border border-white text-center font-[400]'>
                Phụ thu 20.000 đồng cho mỗi hóa đơn phát sinh
              </div>
            </div>
          </div>
          <p className=''>(*) Phí dịch vụ kế toán, báo cáo thuế áp dụng cho quý - 3 tháng.</p>
          <CallNow></CallNow>
          <table
            cellSpacing={0}
            className='bang-xanh mt-[50px] table-post-custom'
            style={{ borderCollapse: 'collapse', border: 'none', width: '100%' }}
          >
            <tbody>
              <tr>
                <td
                  colSpan={3}
                  style={{
                    borderBottom: '1px solid #ffffff',
                    borderLeft: '1px solid #ffffff',
                    borderRight: '1px solid #ffffff',
                    borderTop: '1px solid #ffffff',
                    padding: '7px 7px 7px 7px',
                    verticalAlign: 'middle',
                    width: 138,
                    background: '#2a4e9a'
                  }}
                >
                  <p style={{ textAlign: 'center' }}>
                    <span style={{ color: '#ffffff' }}>
                      <strong>Nhóm ngành tư vấn dịch vụ</strong>
                    </span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    backgroundColor: '#a9d0ff',
                    borderColor: '#ffffff',
                    borderStyle: 'solid',
                    borderWidth: 1,
                    padding: 7,
                    verticalAlign: 'middle',
                    width: 138
                  }}
                >
                  <p style={{ textAlign: 'center' }}>
                    <strong>Số hóa đơn</strong>
                  </p>
                </td>
                <td
                  style={{
                    backgroundColor: '#a9d0ff',
                    borderColor: '#ffffff',
                    borderStyle: 'solid',
                    borderWidth: 1,
                    padding: 7,
                    verticalAlign: 'middle',
                    width: 238
                  }}
                >
                  <p style={{ textAlign: 'center' }}>
                    <strong>
                      Spa - Giáo dục
                      <br />
                      Khách sạn - Logistics
                    </strong>
                  </p>
                </td>
                <td
                  style={{
                    backgroundColor: '#a9d0ff',
                    borderColor: '#ffffff',
                    borderStyle: 'solid',
                    borderWidth: 1,
                    padding: 7,
                    verticalAlign: 'middle',
                    width: 227
                  }}
                >
                  <p style={{ textAlign: 'center' }}>
                    <strong>Tư vấn - dịch vụ khác</strong>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    backgroundColor: '#a9d0ff',
                    borderColor: '#ffffff',
                    borderStyle: 'solid',
                    borderWidth: 1,
                    padding: 7,
                    verticalAlign: 'middle',
                    width: 138
                  }}
                >
                  <p style={{ textAlign: 'center' }}>
                    <strong>Không có hóa đơn</strong>
                  </p>
                </td>
                <td
                  style={{
                    backgroundColor: '#e5f0ff',
                    borderColor: '#ffffff',
                    borderStyle: 'solid',
                    borderWidth: 1,
                    padding: 7,
                    verticalAlign: 'middle',
                    width: 238
                  }}
                >
                  <p style={{ textAlign: 'center' }}>1.500.000 đồng/quý</p>
                </td>
                <td
                  style={{
                    backgroundColor: '#e5f0ff',
                    borderColor: '#ffffff',
                    borderStyle: 'solid',
                    borderWidth: 1,
                    padding: 7,
                    verticalAlign: 'middle',
                    width: 227
                  }}
                >
                  <p style={{ textAlign: 'center' }}>1.500.000 đồng/quý</p>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    backgroundColor: '#a9d0ff',
                    borderColor: '#ffffff',
                    borderStyle: 'solid',
                    borderWidth: 1,
                    padding: 7,
                    verticalAlign: 'middle',
                    width: 138
                  }}
                >
                  <p style={{ textAlign: 'center' }}>
                    <strong>Dưới 10</strong>
                  </p>
                </td>
                <td
                  style={{
                    backgroundColor: '#e5f0ff',
                    borderColor: '#ffffff',
                    borderStyle: 'solid',
                    borderWidth: 1,
                    padding: 7,
                    verticalAlign: 'middle',
                    width: 238
                  }}
                >
                  <p style={{ textAlign: 'center' }}>2.100.000 đồng/quý</p>
                </td>
                <td
                  style={{
                    backgroundColor: '#e5f0ff',
                    borderColor: '#ffffff',
                    borderStyle: 'solid',
                    borderWidth: 1,
                    padding: 7,
                    verticalAlign: 'middle',
                    width: 227
                  }}
                >
                  <p style={{ textAlign: 'center' }}>2.100.000 đồng/quý</p>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    backgroundColor: '#a9d0ff',
                    borderColor: '#ffffff',
                    borderStyle: 'solid',
                    borderWidth: 1,
                    padding: 7,
                    verticalAlign: 'middle',
                    width: 138
                  }}
                >
                  <p style={{ textAlign: 'center' }}>
                    <strong>Dưới 16</strong>
                  </p>
                </td>
                <td
                  style={{
                    backgroundColor: '#e5f0ff',
                    borderColor: '#ffffff',
                    borderStyle: 'solid',
                    borderWidth: 1,
                    padding: 7,
                    verticalAlign: 'middle',
                    width: 238
                  }}
                >
                  <p style={{ textAlign: 'center' }}>2.400.000 đồng/quý</p>
                </td>
                <td
                  style={{
                    backgroundColor: '#e5f0ff',
                    borderColor: '#ffffff',
                    borderStyle: 'solid',
                    borderWidth: 1,
                    padding: 7,
                    verticalAlign: 'middle',
                    width: 227
                  }}
                >
                  <p style={{ textAlign: 'center' }}>2.400.000 đồng/quý</p>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    backgroundColor: '#a9d0ff',
                    borderColor: '#ffffff',
                    borderStyle: 'solid',
                    borderWidth: 1,
                    padding: 7,
                    verticalAlign: 'middle',
                    width: 138
                  }}
                >
                  <p style={{ textAlign: 'center' }}>
                    <strong>Dưới 31</strong>
                  </p>
                </td>
                <td
                  style={{
                    backgroundColor: '#e5f0ff',
                    borderColor: '#ffffff',
                    borderStyle: 'solid',
                    borderWidth: 1,
                    padding: 7,
                    verticalAlign: 'middle',
                    width: 238
                  }}
                >
                  <p style={{ textAlign: 'center' }}>3.000.000 đồng/quý</p>
                </td>
                <td
                  style={{
                    backgroundColor: '#e5f0ff',
                    borderColor: '#ffffff',
                    borderStyle: 'solid',
                    borderWidth: 1,
                    padding: 7,
                    verticalAlign: 'middle',
                    width: 227
                  }}
                >
                  <p style={{ textAlign: 'center' }}>3.300.000 đồng/quý</p>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    backgroundColor: '#a9d0ff',
                    borderColor: '#ffffff',
                    borderStyle: 'solid',
                    borderWidth: 1,
                    padding: 7,
                    verticalAlign: 'middle',
                    width: 138
                  }}
                >
                  <p style={{ textAlign: 'center' }}>
                    <strong>Dưới 46</strong>
                  </p>
                </td>
                <td
                  style={{
                    backgroundColor: '#e5f0ff',
                    borderColor: '#ffffff',
                    borderStyle: 'solid',
                    borderWidth: 1,
                    padding: 7,
                    verticalAlign: 'middle',
                    width: 238
                  }}
                >
                  <p style={{ textAlign: 'center' }}>3.900.000 đồng/quý</p>
                </td>
                <td
                  style={{
                    backgroundColor: '#e5f0ff',
                    borderColor: '#ffffff',
                    borderStyle: 'solid',
                    borderWidth: 1,
                    padding: 7,
                    verticalAlign: 'middle',
                    width: 227
                  }}
                >
                  <p style={{ textAlign: 'center' }}>4.200.000 đồng/quý</p>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    backgroundColor: '#a9d0ff',
                    borderColor: '#ffffff',
                    borderStyle: 'solid',
                    borderWidth: 1,
                    padding: 7,
                    verticalAlign: 'middle',
                    width: 138
                  }}
                >
                  <p style={{ textAlign: 'center' }}>
                    <strong>Dưới 61</strong>
                  </p>
                </td>
                <td
                  style={{
                    backgroundColor: '#e5f0ff',
                    borderColor: '#ffffff',
                    borderStyle: 'solid',
                    borderWidth: 1,
                    padding: 7,
                    verticalAlign: 'middle',
                    width: 238
                  }}
                >
                  <p style={{ textAlign: 'center' }}>4.800.000 đồng/quý</p>
                </td>
                <td
                  style={{
                    backgroundColor: '#e5f0ff',
                    borderColor: '#ffffff',
                    borderStyle: 'solid',
                    borderWidth: 1,
                    padding: 7,
                    verticalAlign: 'middle',
                    width: 227
                  }}
                >
                  <p style={{ textAlign: 'center' }}>5.100.000 đồng/quý</p>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    backgroundColor: '#a9d0ff',
                    borderColor: '#ffffff',
                    borderStyle: 'solid',
                    borderWidth: 1,
                    padding: 7,
                    verticalAlign: 'middle',
                    width: 138
                  }}
                >
                  <p style={{ textAlign: 'center' }}>
                    <strong>Dưới 76</strong>
                  </p>
                </td>
                <td
                  style={{
                    backgroundColor: '#e5f0ff',
                    borderColor: '#ffffff',
                    borderStyle: 'solid',
                    borderWidth: 1,
                    padding: 7,
                    verticalAlign: 'middle',
                    width: 238
                  }}
                >
                  <p style={{ textAlign: 'center' }}>5.400.000 đồng/quý</p>
                </td>
                <td
                  style={{
                    backgroundColor: '#e5f0ff',
                    borderColor: '#ffffff',
                    borderStyle: 'solid',
                    borderWidth: 1,
                    padding: 7,
                    verticalAlign: 'middle',
                    width: 227
                  }}
                >
                  <p style={{ textAlign: 'center' }}>5.700.000 đồng/quý</p>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    backgroundColor: '#a9d0ff',
                    borderColor: '#ffffff',
                    borderStyle: 'solid',
                    borderWidth: 1,
                    padding: 7,
                    verticalAlign: 'middle',
                    width: 138
                  }}
                >
                  <p style={{ textAlign: 'center' }}>
                    <strong>Dưới 91</strong>
                  </p>
                </td>
                <td
                  style={{
                    backgroundColor: '#e5f0ff',
                    borderColor: '#ffffff',
                    borderStyle: 'solid',
                    borderWidth: 1,
                    padding: 7,
                    verticalAlign: 'middle',
                    width: 238
                  }}
                >
                  <p style={{ textAlign: 'center' }}>6.000.000 đồng/quý</p>
                </td>
                <td
                  style={{
                    backgroundColor: '#e5f0ff',
                    borderColor: '#ffffff',
                    borderStyle: 'solid',
                    borderWidth: 1,
                    padding: 7,
                    verticalAlign: 'middle',
                    width: 227
                  }}
                >
                  <p style={{ textAlign: 'center' }}>6.300.000 đồng/quý</p>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    backgroundColor: '#a9d0ff',
                    borderColor: '#ffffff',
                    borderStyle: 'solid',
                    borderWidth: 1,
                    padding: 7,
                    verticalAlign: 'middle',
                    width: 138
                  }}
                >
                  <p style={{ textAlign: 'center' }}>
                    <strong>Dưới 121</strong>
                  </p>
                </td>
                <td
                  style={{
                    backgroundColor: '#e5f0ff',
                    borderColor: '#ffffff',
                    borderStyle: 'solid',
                    borderWidth: 1,
                    padding: 7,
                    verticalAlign: 'middle',
                    width: 238
                  }}
                >
                  <p style={{ textAlign: 'center' }}>7.200.000 đồng/quý</p>
                </td>
                <td
                  style={{
                    backgroundColor: '#e5f0ff',
                    borderColor: '#ffffff',
                    borderStyle: 'solid',
                    borderWidth: 1,
                    padding: 7,
                    verticalAlign: 'middle',
                    width: 227
                  }}
                >
                  <p style={{ textAlign: 'center' }}>7.500.000 đồng/quý</p>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    backgroundColor: '#a9d0ff',
                    borderColor: '#ffffff',
                    borderStyle: 'solid',
                    borderWidth: 1,
                    padding: 7,
                    verticalAlign: 'middle',
                    width: 138
                  }}
                >
                  <p style={{ textAlign: 'center' }}>
                    <strong>Dưới 151</strong>
                  </p>
                </td>
                <td
                  style={{
                    backgroundColor: '#e5f0ff',
                    borderColor: '#ffffff',
                    borderStyle: 'solid',
                    borderWidth: 1,
                    padding: 7,
                    verticalAlign: 'middle',
                    width: 238
                  }}
                >
                  <p style={{ textAlign: 'center' }}>8.100.000 đồng/quý</p>
                </td>
                <td
                  style={{
                    backgroundColor: '#e5f0ff',
                    borderColor: '#ffffff',
                    borderStyle: 'solid',
                    borderWidth: 1,
                    padding: 7,
                    verticalAlign: 'middle',
                    width: 227
                  }}
                >
                  <p style={{ textAlign: 'center' }}>8.400.000 đồng/quý</p>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    backgroundColor: '#a9d0ff',
                    borderColor: '#ffffff',
                    borderStyle: 'solid',
                    borderWidth: 1,
                    padding: 7,
                    verticalAlign: 'middle',
                    width: 138
                  }}
                >
                  <p style={{ textAlign: 'center' }}>
                    <strong>Dưới 181</strong>
                  </p>
                </td>
                <td
                  style={{
                    backgroundColor: '#e5f0ff',
                    borderColor: '#ffffff',
                    borderStyle: 'solid',
                    borderWidth: 1,
                    padding: 7,
                    verticalAlign: 'middle',
                    width: 238
                  }}
                >
                  <p style={{ textAlign: 'center' }}>9.000.000 đồng/quý</p>
                </td>
                <td
                  style={{
                    backgroundColor: '#e5f0ff',
                    borderColor: '#ffffff',
                    borderStyle: 'solid',
                    borderWidth: 1,
                    padding: 7,
                    verticalAlign: 'middle',
                    width: 227
                  }}
                >
                  <p style={{ textAlign: 'center' }}>9.300.000 đồng/quý</p>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    backgroundColor: '#a9d0ff',
                    borderColor: '#ffffff',
                    borderStyle: 'solid',
                    borderWidth: 1,
                    padding: 7,
                    verticalAlign: 'middle',
                    width: 138
                  }}
                >
                  <p style={{ textAlign: 'center' }}>
                    <strong>Từ 181 trở lên</strong>
                  </p>
                </td>
                <td
                  colSpan={2}
                  style={{
                    borderBottom: '1px solid #ffffff',
                    borderLeft: '1px solid #ffffff',
                    borderRight: '1px solid #ffffff',
                    borderTop: '1px solid #ffffff',
                    padding: '7px 7px 7px 7px',
                    verticalAlign: 'middle',
                    width: 238,
                    background: '#e5f0ff'
                  }}
                >
                  <p style={{ textAlign: 'center' }}>Phụ thu 20.000 đồng cho mỗi hóa đơn phát sinh</p>
                </td>
              </tr>
            </tbody>
          </table>
          <p style={{ textAlign: 'justify' }}>(*) Phí dịch vụ kế toán, báo cáo thuế áp dụng cho quý - 3 tháng.</p>
          <table
            cellSpacing={0}
            className='bang-xanh mt-[20px] table-post-custom'
            style={{ borderCollapse: 'collapse', border: 'none', width: '100%' }}
          >
            <tbody>
              <tr>
                <td
                  colSpan={3}
                  style={{
                    borderBottom: '1px solid #ffffff',
                    borderLeft: '1px solid #ffffff',
                    borderRight: '1px solid #ffffff',
                    borderTop: '1px solid #ffffff',
                    padding: '7px 7px 7px 7px',
                    verticalAlign: 'middle',
                    width: 137,
                    background: '#2a4e9a'
                  }}
                >
                  <p style={{ textAlign: 'center' }}>
                    <span style={{ color: '#ffffff' }}>
                      <strong>Nhóm ngành thi công xây dựng - trang trí nội thất - sản xuất - gia công - lắp đặt</strong>
                    </span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    backgroundColor: '#a9d0ff',
                    borderColor: '#ffffff',
                    borderStyle: 'solid',
                    borderWidth: 1,
                    padding: 7,
                    verticalAlign: 'middle',
                    width: 137
                  }}
                >
                  <p style={{ textAlign: 'center' }}>
                    <strong>Số hóa đơn</strong>
                  </p>
                </td>
                <td
                  style={{
                    backgroundColor: '#a9d0ff',
                    borderColor: '#ffffff',
                    borderStyle: 'solid',
                    borderWidth: 1,
                    padding: 7,
                    verticalAlign: 'middle',
                    width: 232
                  }}
                >
                  <p style={{ textAlign: 'center' }}>
                    <strong>
                      Thi công xây dựng
                      <br />
                      sản xuất - gia công
                    </strong>
                  </p>
                </td>
                <td
                  style={{
                    backgroundColor: '#a9d0ff',
                    borderColor: '#ffffff',
                    borderStyle: 'solid',
                    borderWidth: 1,
                    padding: 7,
                    verticalAlign: 'middle',
                    width: 232
                  }}
                >
                  <p style={{ textAlign: 'center' }}>
                    <strong>Trang trí nội thất - lắp đặt</strong>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    backgroundColor: '#a9d0ff',
                    borderColor: '#ffffff',
                    borderStyle: 'solid',
                    borderWidth: 1,
                    padding: 7,
                    verticalAlign: 'middle',
                    width: 137
                  }}
                >
                  <p style={{ textAlign: 'center' }}>
                    <strong>Không có hóa đơn</strong>
                  </p>
                </td>
                <td
                  style={{
                    backgroundColor: '#e5f0ff',
                    borderColor: '#ffffff',
                    borderStyle: 'solid',
                    borderWidth: 1,
                    padding: 7,
                    verticalAlign: 'middle',
                    width: 232
                  }}
                >
                  <p style={{ textAlign: 'center' }}>2.100.000 đồng/quý</p>
                </td>
                <td
                  style={{
                    backgroundColor: '#e5f0ff',
                    borderColor: '#ffffff',
                    borderStyle: 'solid',
                    borderWidth: 1,
                    padding: 7,
                    verticalAlign: 'middle',
                    width: 232
                  }}
                >
                  <p style={{ textAlign: 'center' }}>2.100.000 đồng/quý</p>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    backgroundColor: '#a9d0ff',
                    borderColor: '#ffffff',
                    borderStyle: 'solid',
                    borderWidth: 1,
                    padding: 7,
                    verticalAlign: 'middle',
                    width: 137
                  }}
                >
                  <p style={{ textAlign: 'center' }}>
                    <strong>Dưới 10</strong>
                  </p>
                </td>
                <td
                  style={{
                    backgroundColor: '#e5f0ff',
                    borderColor: '#ffffff',
                    borderStyle: 'solid',
                    borderWidth: 1,
                    padding: 7,
                    verticalAlign: 'middle',
                    width: 232
                  }}
                >
                  <p style={{ textAlign: 'center' }}>3.000.000 đồng/quý</p>
                </td>
                <td
                  style={{
                    backgroundColor: '#e5f0ff',
                    borderColor: '#ffffff',
                    borderStyle: 'solid',
                    borderWidth: 1,
                    padding: 7,
                    verticalAlign: 'middle',
                    width: 232
                  }}
                >
                  <p style={{ textAlign: 'center' }}>2.400.000 đồng/quý</p>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    backgroundColor: '#a9d0ff',
                    borderColor: '#ffffff',
                    borderStyle: 'solid',
                    borderWidth: 1,
                    padding: 7,
                    verticalAlign: 'middle',
                    width: 137
                  }}
                >
                  <p style={{ textAlign: 'center' }}>
                    <strong>Dưới 16</strong>
                  </p>
                </td>
                <td
                  style={{
                    backgroundColor: '#e5f0ff',
                    borderColor: '#ffffff',
                    borderStyle: 'solid',
                    borderWidth: 1,
                    padding: 7,
                    verticalAlign: 'middle',
                    width: 232
                  }}
                >
                  <p style={{ textAlign: 'center' }}>3.300.000 đồng/quý</p>
                </td>
                <td
                  style={{
                    backgroundColor: '#e5f0ff',
                    borderColor: '#ffffff',
                    borderStyle: 'solid',
                    borderWidth: 1,
                    padding: 7,
                    verticalAlign: 'middle',
                    width: 232
                  }}
                >
                  <p style={{ textAlign: 'center' }}>3.000.000 đồng/quý</p>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    backgroundColor: '#a9d0ff',
                    borderColor: '#ffffff',
                    borderStyle: 'solid',
                    borderWidth: 1,
                    padding: 7,
                    verticalAlign: 'middle',
                    width: 137
                  }}
                >
                  <p style={{ textAlign: 'center' }}>
                    <strong>Dưới 31</strong>
                  </p>
                </td>
                <td
                  style={{
                    backgroundColor: '#e5f0ff',
                    borderColor: '#ffffff',
                    borderStyle: 'solid',
                    borderWidth: 1,
                    padding: 7,
                    verticalAlign: 'middle',
                    width: 232
                  }}
                >
                  <p style={{ textAlign: 'center' }}>4.500.000 đồng/quý</p>
                </td>
                <td
                  style={{
                    backgroundColor: '#e5f0ff',
                    borderColor: '#ffffff',
                    borderStyle: 'solid',
                    borderWidth: 1,
                    padding: 7,
                    verticalAlign: 'middle',
                    width: 232
                  }}
                >
                  <p style={{ textAlign: 'center' }}>4.200.000 đồng/quý</p>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    backgroundColor: '#a9d0ff',
                    borderColor: '#ffffff',
                    borderStyle: 'solid',
                    borderWidth: 1,
                    padding: 7,
                    verticalAlign: 'middle',
                    width: 137
                  }}
                >
                  <p style={{ textAlign: 'center' }}>
                    <strong>Dưới 46</strong>
                  </p>
                </td>
                <td
                  style={{
                    backgroundColor: '#e5f0ff',
                    borderColor: '#ffffff',
                    borderStyle: 'solid',
                    borderWidth: 1,
                    padding: 7,
                    verticalAlign: 'middle',
                    width: 232
                  }}
                >
                  <p style={{ textAlign: 'center' }}>5.700.000 đồng/quý</p>
                </td>
                <td
                  style={{
                    backgroundColor: '#e5f0ff',
                    borderColor: '#ffffff',
                    borderStyle: 'solid',
                    borderWidth: 1,
                    padding: 7,
                    verticalAlign: 'middle',
                    width: 232
                  }}
                >
                  <p style={{ textAlign: 'center' }}>5.400.000 đồng/quý</p>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    backgroundColor: '#a9d0ff',
                    borderColor: '#ffffff',
                    borderStyle: 'solid',
                    borderWidth: 1,
                    padding: 7,
                    verticalAlign: 'middle',
                    width: 137
                  }}
                >
                  <p style={{ textAlign: 'center' }}>
                    <strong>Dưới 61</strong>
                  </p>
                </td>
                <td
                  style={{
                    backgroundColor: '#e5f0ff',
                    borderColor: '#ffffff',
                    borderStyle: 'solid',
                    borderWidth: 1,
                    padding: 7,
                    verticalAlign: 'middle',
                    width: 232
                  }}
                >
                  <p style={{ textAlign: 'center' }}>7.200.000 đồng/quý</p>
                </td>
                <td
                  style={{
                    backgroundColor: '#e5f0ff',
                    borderColor: '#ffffff',
                    borderStyle: 'solid',
                    borderWidth: 1,
                    padding: 7,
                    verticalAlign: 'middle',
                    width: 232
                  }}
                >
                  <p style={{ textAlign: 'center' }}>6.900.000 đồng/quý</p>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    backgroundColor: '#a9d0ff',
                    borderColor: '#ffffff',
                    borderStyle: 'solid',
                    borderWidth: 1,
                    padding: 7,
                    verticalAlign: 'middle',
                    width: 137
                  }}
                >
                  <p style={{ textAlign: 'center' }}>
                    <strong>Dưới 76</strong>
                  </p>
                </td>
                <td
                  style={{
                    backgroundColor: '#e5f0ff',
                    borderColor: '#ffffff',
                    borderStyle: 'solid',
                    borderWidth: 1,
                    padding: 7,
                    verticalAlign: 'middle',
                    width: 232
                  }}
                >
                  <p style={{ textAlign: 'center' }}>8.400.000 đồng/quý</p>
                </td>
                <td
                  style={{
                    backgroundColor: '#e5f0ff',
                    borderColor: '#ffffff',
                    borderStyle: 'solid',
                    borderWidth: 1,
                    padding: 7,
                    verticalAlign: 'middle',
                    width: 232
                  }}
                >
                  <p style={{ textAlign: 'center' }}>8.100.000 đồng/quý</p>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    backgroundColor: '#a9d0ff',
                    borderColor: '#ffffff',
                    borderStyle: 'solid',
                    borderWidth: 1,
                    padding: 7,
                    verticalAlign: 'middle',
                    width: 137
                  }}
                >
                  <p style={{ textAlign: 'center' }}>
                    <strong>Dưới 91</strong>
                  </p>
                </td>
                <td
                  style={{
                    backgroundColor: '#e5f0ff',
                    borderColor: '#ffffff',
                    borderStyle: 'solid',
                    borderWidth: 1,
                    padding: 7,
                    verticalAlign: 'middle',
                    width: 232
                  }}
                >
                  <p style={{ textAlign: 'center' }}>9.600.000 đồng/quý</p>
                </td>
                <td
                  style={{
                    backgroundColor: '#e5f0ff',
                    borderColor: '#ffffff',
                    borderStyle: 'solid',
                    borderWidth: 1,
                    padding: 7,
                    verticalAlign: 'middle',
                    width: 232
                  }}
                >
                  <p style={{ textAlign: 'center' }}>9.300.000 đồng/quý</p>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    backgroundColor: '#a9d0ff',
                    borderColor: '#ffffff',
                    borderStyle: 'solid',
                    borderWidth: 1,
                    padding: 7,
                    verticalAlign: 'middle',
                    width: 137
                  }}
                >
                  <p style={{ textAlign: 'center' }}>
                    <strong>Dưới 121</strong>
                  </p>
                </td>
                <td
                  style={{
                    backgroundColor: '#e5f0ff',
                    borderColor: '#ffffff',
                    borderStyle: 'solid',
                    borderWidth: 1,
                    padding: 7,
                    verticalAlign: 'middle',
                    width: 232
                  }}
                >
                  <p style={{ textAlign: 'center' }}>10.800.000 đồng/quý</p>
                </td>
                <td
                  style={{
                    backgroundColor: '#e5f0ff',
                    borderColor: '#ffffff',
                    borderStyle: 'solid',
                    borderWidth: 1,
                    padding: 7,
                    verticalAlign: 'middle',
                    width: 232
                  }}
                >
                  <p style={{ textAlign: 'center' }}>10.500.000 đồng/quý</p>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    backgroundColor: '#a9d0ff',
                    borderColor: '#ffffff',
                    borderStyle: 'solid',
                    borderWidth: 1,
                    padding: 7,
                    verticalAlign: 'middle',
                    width: 137
                  }}
                >
                  <p style={{ textAlign: 'center' }}>
                    <strong>Dưới 151</strong>
                  </p>
                </td>
                <td
                  style={{
                    backgroundColor: '#e5f0ff',
                    borderColor: '#ffffff',
                    borderStyle: 'solid',
                    borderWidth: 1,
                    padding: 7,
                    verticalAlign: 'middle',
                    width: 232
                  }}
                >
                  <p style={{ textAlign: 'center' }}>12.000.000 đồng/quý</p>
                </td>
                <td
                  style={{
                    backgroundColor: '#e5f0ff',
                    borderColor: '#ffffff',
                    borderStyle: 'solid',
                    borderWidth: 1,
                    padding: 7,
                    verticalAlign: 'middle',
                    width: 232
                  }}
                >
                  <p style={{ textAlign: 'center' }}>11.700.000 đồng/quý</p>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    backgroundColor: '#a9d0ff',
                    borderColor: '#ffffff',
                    borderStyle: 'solid',
                    borderWidth: 1,
                    padding: 7,
                    verticalAlign: 'middle',
                    width: 137
                  }}
                >
                  <p style={{ textAlign: 'center' }}>
                    <strong>Dưới 181</strong>
                  </p>
                </td>
                <td
                  style={{
                    backgroundColor: '#e5f0ff',
                    borderColor: '#ffffff',
                    borderStyle: 'solid',
                    borderWidth: 1,
                    padding: 7,
                    verticalAlign: 'middle',
                    width: 232
                  }}
                >
                  <p style={{ textAlign: 'center' }}>13.200.000 đồng/quý</p>
                </td>
                <td
                  style={{
                    backgroundColor: '#e5f0ff',
                    borderColor: '#ffffff',
                    borderStyle: 'solid',
                    borderWidth: 1,
                    padding: 7,
                    verticalAlign: 'middle',
                    width: 232
                  }}
                >
                  <p style={{ textAlign: 'center' }}>12.900.000 đồng/quý</p>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    backgroundColor: '#a9d0ff',
                    borderColor: '#ffffff',
                    borderStyle: 'solid',
                    borderWidth: 1,
                    padding: 7,
                    verticalAlign: 'middle',
                    width: 137
                  }}
                >
                  <p style={{ textAlign: 'center' }}>
                    <strong>Từ 181 trở lên</strong>
                  </p>
                </td>
                <td
                  colSpan={2}
                  style={{
                    borderBottom: '1px solid #ffffff',
                    borderLeft: '1px solid #ffffff',
                    borderRight: '1px solid #ffffff',
                    borderTop: '1px solid #ffffff',
                    padding: '7px 7px 7px 7px',
                    verticalAlign: 'middle',
                    width: 232,
                    backgroundColor: '#e5f0ff'
                  }}
                >
                  <p style={{ textAlign: 'center' }}>Phụ thu 30.000 đồng cho mỗi hóa đơn phát sinh</p>
                </td>
              </tr>
            </tbody>
          </table>
          <p style={{ textAlign: 'justify' }}>(*) Phí dịch vụ kế toán, báo cáo thuế áp dụng cho quý - 3 tháng.</p>
          <div className='text-[18px] mt-2 text-[#3472b8]'>
            <strong>2. Bảng giá dịch vụ kế toán thuế tại miền Bắc và miền Trung</strong>
          </div>
          <div>
            <table
              cellSpacing={0}
              className='bang-xanh table-post-custom'
              style={{ borderCollapse: 'collapse', border: 'none', width: '100%' }}
            >
              <tbody>
                <tr>
                  <td
                    colSpan={3}
                    style={{
                      borderBottom: '1px solid #ffffff',
                      borderLeft: '1px solid #ffffff',
                      borderRight: '1px solid #ffffff',
                      borderTop: '1px solid #ffffff',
                      padding: '7px 7px 7px 7px',
                      verticalAlign: 'middle',
                      width: 135,
                      background: '#2a4d9f'
                    }}
                  >
                    <p style={{ textAlign: 'center' }}>
                      <span style={{ color: '#ffffff' }}>
                        <strong>Nhóm ngành thương mại</strong>
                      </span>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      background: '#a9d0ff',
                      borderColor: '#ffffff',
                      borderStyle: 'solid',
                      borderWidth: 1,
                      padding: 7,
                      verticalAlign: 'middle',
                      width: 135
                    }}
                  >
                    <p style={{ textAlign: 'center' }}>
                      <strong>Số hóa đơn</strong>
                    </p>
                  </td>
                  <td
                    style={{
                      backgroundColor: '#a9d0ff',
                      borderColor: '#ffffff',
                      borderStyle: 'solid',
                      borderWidth: 1,
                      padding: 7,
                      verticalAlign: 'middle',
                      width: 243
                    }}
                  >
                    <p style={{ textAlign: 'center' }}>
                      <strong>Không có tờ khai hải quan</strong>
                    </p>
                  </td>
                  <td
                    style={{
                      backgroundColor: '#a9d0ff',
                      borderColor: '#ffffff',
                      borderStyle: 'solid',
                      borderWidth: 1,
                      padding: 7,
                      verticalAlign: 'middle',
                      width: 223
                    }}
                  >
                    <p style={{ textAlign: 'center' }}>
                      <strong>Có tờ khai hải quan</strong>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      backgroundColor: '#a9d0ff',
                      borderColor: '#ffffff',
                      borderStyle: 'solid',
                      borderWidth: 1,
                      padding: 7,
                      verticalAlign: 'middle',
                      width: 135
                    }}
                  >
                    <p style={{ textAlign: 'center' }}>
                      <strong>Không có hóa đơn</strong>
                    </p>
                  </td>
                  <td
                    style={{
                      backgroundColor: '#e5f0ff',
                      borderColor: '#ffffff',
                      borderStyle: 'solid',
                      borderWidth: 1,
                      padding: 7,
                      verticalAlign: 'middle',
                      width: 243
                    }}
                  >
                    <p style={{ textAlign: 'center' }}>1.800.000 đồng/quý</p>
                  </td>
                  <td
                    style={{
                      backgroundColor: '#e5f0ff',
                      borderColor: '#ffffff',
                      borderStyle: 'solid',
                      borderWidth: 1,
                      padding: 7,
                      verticalAlign: 'middle',
                      width: 223
                    }}
                  >
                    <p style={{ textAlign: 'center' }}>1.800.000 đồng/quý</p>
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      backgroundColor: '#a9d0ff',
                      borderColor: '#ffffff',
                      borderStyle: 'solid',
                      borderWidth: 1,
                      padding: 7,
                      verticalAlign: 'middle',
                      width: 135
                    }}
                  >
                    <p style={{ textAlign: 'center' }}>
                      <strong>Dưới 10</strong>
                    </p>
                  </td>
                  <td
                    style={{
                      backgroundColor: '#e5f0ff',
                      borderColor: '#ffffff',
                      borderStyle: 'solid',
                      borderWidth: 1,
                      padding: 7,
                      verticalAlign: 'middle',
                      width: 243
                    }}
                  >
                    <p style={{ textAlign: 'center' }}>2.700.000 đồng/quý</p>
                  </td>
                  <td
                    style={{
                      backgroundColor: '#e5f0ff',
                      borderColor: '#ffffff',
                      borderStyle: 'solid',
                      borderWidth: 1,
                      padding: 7,
                      verticalAlign: 'middle',
                      width: 223
                    }}
                  >
                    <p style={{ textAlign: 'center' }}>3.000.000 đồng/quý</p>
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      backgroundColor: '#a9d0ff',
                      borderColor: '#ffffff',
                      borderStyle: 'solid',
                      borderWidth: 1,
                      padding: 7,
                      verticalAlign: 'middle',
                      width: 135
                    }}
                  >
                    <p style={{ textAlign: 'center' }}>
                      <strong>Dưới 16</strong>
                    </p>
                  </td>
                  <td
                    style={{
                      backgroundColor: '#e5f0ff',
                      borderColor: '#ffffff',
                      borderStyle: 'solid',
                      borderWidth: 1,
                      padding: 7,
                      verticalAlign: 'middle',
                      width: 243
                    }}
                  >
                    <p style={{ textAlign: 'center' }}>3.300.000 đồng/quý</p>
                  </td>
                  <td
                    style={{
                      backgroundColor: '#e5f0ff',
                      borderColor: '#ffffff',
                      borderStyle: 'solid',
                      borderWidth: 1,
                      padding: 7,
                      verticalAlign: 'middle',
                      width: 223
                    }}
                  >
                    <p style={{ textAlign: 'center' }}>3.900.000 đồng/quý</p>
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      backgroundColor: '#a9d0ff',
                      borderColor: '#ffffff',
                      borderStyle: 'solid',
                      borderWidth: 1,
                      padding: 7,
                      verticalAlign: 'middle',
                      width: 135
                    }}
                  >
                    <p style={{ textAlign: 'center' }}>
                      <strong>Dưới 31</strong>
                    </p>
                  </td>
                  <td
                    style={{
                      backgroundColor: '#e5f0ff',
                      borderColor: '#ffffff',
                      borderStyle: 'solid',
                      borderWidth: 1,
                      padding: 7,
                      verticalAlign: 'middle',
                      width: 243
                    }}
                  >
                    <p style={{ textAlign: 'center' }}>4.200.000 đồng/quý</p>
                  </td>
                  <td
                    style={{
                      backgroundColor: '#e5f0ff',
                      borderColor: '#ffffff',
                      borderStyle: 'solid',
                      borderWidth: 1,
                      padding: 7,
                      verticalAlign: 'middle',
                      width: 223
                    }}
                  >
                    <p style={{ textAlign: 'center' }}>4.800.000 đồng/quý</p>
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      backgroundColor: '#a9d0ff',
                      borderColor: '#ffffff',
                      borderStyle: 'solid',
                      borderWidth: 1,
                      padding: 7,
                      verticalAlign: 'middle',
                      width: 135
                    }}
                  >
                    <p style={{ textAlign: 'center' }}>
                      <strong>Dưới 46</strong>
                    </p>
                  </td>
                  <td
                    style={{
                      backgroundColor: '#e5f0ff',
                      borderColor: '#ffffff',
                      borderStyle: 'solid',
                      borderWidth: 1,
                      padding: 7,
                      verticalAlign: 'middle',
                      width: 243
                    }}
                  >
                    <p style={{ textAlign: 'center' }}>4.800.000 đồng/quý</p>
                  </td>
                  <td
                    style={{
                      backgroundColor: '#e5f0ff',
                      borderColor: '#ffffff',
                      borderStyle: 'solid',
                      borderWidth: 1,
                      padding: 7,
                      verticalAlign: 'middle',
                      width: 223
                    }}
                  >
                    <p style={{ textAlign: 'center' }}>5.700.000 đồng/quý</p>
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      backgroundColor: '#a9d0ff',
                      borderColor: '#ffffff',
                      borderStyle: 'solid',
                      borderWidth: 1,
                      padding: 7,
                      verticalAlign: 'middle',
                      width: 135
                    }}
                  >
                    <p style={{ textAlign: 'center' }}>
                      <strong>Dưới 61</strong>
                    </p>
                  </td>
                  <td
                    style={{
                      backgroundColor: '#e5f0ff',
                      borderColor: '#ffffff',
                      borderStyle: 'solid',
                      borderWidth: 1,
                      padding: 7,
                      verticalAlign: 'middle',
                      width: 243
                    }}
                  >
                    <p style={{ textAlign: 'center' }}>5.400.000 đồng/quý</p>
                  </td>
                  <td
                    style={{
                      backgroundColor: '#e5f0ff',
                      borderColor: '#ffffff',
                      borderStyle: 'solid',
                      borderWidth: 1,
                      padding: 7,
                      verticalAlign: 'middle',
                      width: 223
                    }}
                  >
                    <p style={{ textAlign: 'center' }}>6.300.000 đồng/quý</p>
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      backgroundColor: '#a9d0ff',
                      borderColor: '#ffffff',
                      borderStyle: 'solid',
                      borderWidth: 1,
                      padding: 7,
                      verticalAlign: 'middle',
                      width: 135
                    }}
                  >
                    <p style={{ textAlign: 'center' }}>
                      <strong>Dưới 76</strong>
                    </p>
                  </td>
                  <td
                    style={{
                      backgroundColor: '#e5f0ff',
                      borderColor: '#ffffff',
                      borderStyle: 'solid',
                      borderWidth: 1,
                      padding: 7,
                      verticalAlign: 'middle',
                      width: 243
                    }}
                  >
                    <p style={{ textAlign: 'center' }}>6.000.000 đồng/quý</p>
                  </td>
                  <td
                    style={{
                      backgroundColor: '#e5f0ff',
                      borderColor: '#ffffff',
                      borderStyle: 'solid',
                      borderWidth: 1,
                      padding: 7,
                      verticalAlign: 'middle',
                      width: 223
                    }}
                  >
                    <p style={{ textAlign: 'center' }}>6.900.000 đồng/quý</p>
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      backgroundColor: '#a9d0ff',
                      borderColor: '#ffffff',
                      borderStyle: 'solid',
                      borderWidth: 1,
                      padding: 7,
                      verticalAlign: 'middle',
                      width: 135
                    }}
                  >
                    <p style={{ textAlign: 'center' }}>
                      <strong>Dưới 91</strong>
                    </p>
                  </td>
                  <td
                    style={{
                      backgroundColor: '#e5f0ff',
                      borderColor: '#ffffff',
                      borderStyle: 'solid',
                      borderWidth: 1,
                      padding: 7,
                      verticalAlign: 'middle',
                      width: 243
                    }}
                  >
                    <p style={{ textAlign: 'center' }}>6.600.000 đồng/quý</p>
                  </td>
                  <td
                    style={{
                      backgroundColor: '#e5f0ff',
                      borderColor: '#ffffff',
                      borderStyle: 'solid',
                      borderWidth: 1,
                      padding: 7,
                      verticalAlign: 'middle',
                      width: 223
                    }}
                  >
                    <p style={{ textAlign: 'center' }}>7.500.000 đồng/quý</p>
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      backgroundColor: '#a9d0ff',
                      borderColor: '#ffffff',
                      borderStyle: 'solid',
                      borderWidth: 1,
                      padding: 7,
                      verticalAlign: 'middle',
                      width: 135
                    }}
                  >
                    <p style={{ textAlign: 'center' }}>
                      <strong>Dưới 121</strong>
                    </p>
                  </td>
                  <td
                    style={{
                      backgroundColor: '#e5f0ff',
                      borderColor: '#ffffff',
                      borderStyle: 'solid',
                      borderWidth: 1,
                      padding: 7,
                      verticalAlign: 'middle',
                      width: 243
                    }}
                  >
                    <p style={{ textAlign: 'center' }}>7.500.000 đồng/quý</p>
                  </td>
                  <td
                    style={{
                      backgroundColor: '#e5f0ff',
                      borderColor: '#ffffff',
                      borderStyle: 'solid',
                      borderWidth: 1,
                      padding: 7,
                      verticalAlign: 'middle',
                      width: 223
                    }}
                  >
                    <p style={{ textAlign: 'center' }}>8.400.000 đồng/quý</p>
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      backgroundColor: '#a9d0ff',
                      borderColor: '#ffffff',
                      borderStyle: 'solid',
                      borderWidth: 1,
                      padding: 7,
                      verticalAlign: 'middle',
                      width: 135
                    }}
                  >
                    <p style={{ textAlign: 'center' }}>
                      <strong>Dưới 151</strong>
                    </p>
                  </td>
                  <td
                    style={{
                      backgroundColor: '#e5f0ff',
                      borderColor: '#ffffff',
                      borderStyle: 'solid',
                      borderWidth: 1,
                      padding: 7,
                      verticalAlign: 'middle',
                      width: 243
                    }}
                  >
                    <p style={{ textAlign: 'center' }}>8.100.000 đồng/quý</p>
                  </td>
                  <td
                    style={{
                      backgroundColor: '#e5f0ff',
                      borderColor: '#ffffff',
                      borderStyle: 'solid',
                      borderWidth: 1,
                      padding: 7,
                      verticalAlign: 'middle',
                      width: 223
                    }}
                  >
                    <p style={{ textAlign: 'center' }}>9.600.000 đồng/quý</p>
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      backgroundColor: '#a9d0ff',
                      borderColor: '#ffffff',
                      borderStyle: 'solid',
                      borderWidth: 1,
                      padding: 7,
                      verticalAlign: 'middle',
                      width: 135
                    }}
                  >
                    <p style={{ textAlign: 'center' }}>
                      <strong>Dưới 181</strong>
                    </p>
                  </td>
                  <td
                    style={{
                      backgroundColor: '#e5f0ff',
                      borderColor: '#ffffff',
                      borderStyle: 'solid',
                      borderWidth: 1,
                      padding: 7,
                      verticalAlign: 'middle',
                      width: 243
                    }}
                  >
                    <p style={{ textAlign: 'center' }}>8.700.000 đồng/quý</p>
                  </td>
                  <td
                    style={{
                      backgroundColor: '#e5f0ff',
                      borderColor: '#ffffff',
                      borderStyle: 'solid',
                      borderWidth: 1,
                      padding: 7,
                      verticalAlign: 'middle',
                      width: 223
                    }}
                  >
                    <p style={{ textAlign: 'center' }}>10.500.000 đồng/quý</p>
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      backgroundColor: '#a9d0ff',
                      borderColor: '#ffffff',
                      borderStyle: 'solid',
                      borderWidth: 1,
                      padding: 7,
                      verticalAlign: 'middle',
                      width: 135
                    }}
                  >
                    <p style={{ textAlign: 'center' }}>
                      <strong>Từ 181 trở lên</strong>
                    </p>
                  </td>
                  <td
                    colSpan={2}
                    style={{
                      borderBottom: '1px solid #ffffff',
                      borderLeft: '1px solid #ffffff',
                      borderRight: '1px solid #ffffff',
                      borderTop: '1px solid #ffffff',
                      padding: '7px 7px 7px 7px',
                      verticalAlign: 'middle',
                      width: 243,
                      backgroundColor: '#e5f0ff'
                    }}
                  >
                    <p style={{ textAlign: 'center' }}>Phụ thu 20.000 đồng cho mỗi hóa đơn phát sinh</p>
                  </td>
                </tr>
              </tbody>
            </table>
            <p style={{ textAlign: 'justify' }}>(*) Phí dịch vụ kế toán, báo cáo thuế áp dụng cho quý - 3 tháng.</p>
            <CallNow></CallNow>
            <div>
              <table
                cellSpacing={0}
                className='bang-xanh table-post-custom'
                style={{ borderCollapse: 'collapse', border: 'none', width: '100%' }}
              >
                <tbody>
                  <tr>
                    <td
                      colSpan={3}
                      style={{
                        borderBottom: '1px solid #ffffff',
                        borderLeft: '1px solid #ffffff',
                        borderRight: '1px solid #ffffff',
                        borderTop: '1px solid #ffffff',
                        padding: '7px 7px 7px 7px',
                        verticalAlign: 'middle',
                        width: 138
                      }}
                    >
                      <p style={{ textAlign: 'center' }}>
                        <span style={{ color: '#ffffff' }}>
                          <strong>Nhóm ngành tư vấn dịch vụ</strong>
                        </span>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        backgroundColor: '#a9d0ff',
                        borderColor: '#ffffff',
                        borderStyle: 'solid',
                        borderWidth: 1,
                        padding: 7,
                        verticalAlign: 'middle',
                        width: 138
                      }}
                    >
                      <p style={{ textAlign: 'center' }}>
                        <strong>Số hóa đơn</strong>
                      </p>
                    </td>
                    <td
                      style={{
                        backgroundColor: '#a9d0ff',
                        borderColor: '#ffffff',
                        borderStyle: 'solid',
                        borderWidth: 1,
                        padding: 7,
                        verticalAlign: 'middle',
                        width: 238
                      }}
                    >
                      <p style={{ textAlign: 'center' }}>
                        <strong>Dịch vụ ăn uống</strong>
                      </p>
                    </td>
                    <td
                      style={{
                        backgroundColor: '#a9d0ff',
                        borderColor: '#ffffff',
                        borderStyle: 'solid',
                        borderWidth: 1,
                        padding: 7,
                        verticalAlign: 'middle',
                        width: 227
                      }}
                    >
                      <p style={{ textAlign: 'center' }}>
                        <strong>Tư vấn - dịch vụ khác</strong>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        backgroundColor: '#a9d0ff',
                        borderColor: '#ffffff',
                        borderStyle: 'solid',
                        borderWidth: 1,
                        padding: 7,
                        verticalAlign: 'middle',
                        width: 138
                      }}
                    >
                      <p style={{ textAlign: 'center' }}>
                        <strong>Không có hóa đơn</strong>
                      </p>
                    </td>
                    <td
                      style={{
                        backgroundColor: '#e5f0ff',
                        borderColor: '#ffffff',
                        borderStyle: 'solid',
                        borderWidth: 1,
                        padding: 7,
                        verticalAlign: 'middle',
                        width: 238
                      }}
                    >
                      <p style={{ textAlign: 'center' }}>1.800.000 đồng/quý</p>
                    </td>
                    <td
                      style={{
                        backgroundColor: '#e5f0ff',
                        borderColor: '#ffffff',
                        borderStyle: 'solid',
                        borderWidth: 1,
                        padding: 7,
                        verticalAlign: 'middle',
                        width: 227
                      }}
                    >
                      <p style={{ textAlign: 'center' }}>1.800.000 đồng/quý</p>
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        backgroundColor: '#a9d0ff',
                        borderColor: '#ffffff',
                        borderStyle: 'solid',
                        borderWidth: 1,
                        padding: 7,
                        verticalAlign: 'middle',
                        width: 138
                      }}
                    >
                      <p style={{ textAlign: 'center' }}>
                        <strong>Dưới 10</strong>
                      </p>
                    </td>
                    <td
                      style={{
                        backgroundColor: '#e5f0ff',
                        borderColor: '#ffffff',
                        borderStyle: 'solid',
                        borderWidth: 1,
                        padding: 7,
                        verticalAlign: 'middle',
                        width: 238
                      }}
                    >
                      <p style={{ textAlign: 'center' }}>3.600.000 đồng/quý</p>
                    </td>
                    <td
                      style={{
                        backgroundColor: '#e5f0ff',
                        borderColor: '#ffffff',
                        borderStyle: 'solid',
                        borderWidth: 1,
                        padding: 7,
                        verticalAlign: 'middle',
                        width: 227
                      }}
                    >
                      <p style={{ textAlign: 'center' }}>2.700.000 đồng/quý</p>
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        backgroundColor: '#a9d0ff',
                        borderColor: '#ffffff',
                        borderStyle: 'solid',
                        borderWidth: 1,
                        padding: 7,
                        verticalAlign: 'middle',
                        width: 138
                      }}
                    >
                      <p style={{ textAlign: 'center' }}>
                        <strong>Dưới 16</strong>
                      </p>
                    </td>
                    <td
                      style={{
                        backgroundColor: '#e5f0ff',
                        borderColor: '#ffffff',
                        borderStyle: 'solid',
                        borderWidth: 1,
                        padding: 7,
                        verticalAlign: 'middle',
                        width: 238
                      }}
                    >
                      <p style={{ textAlign: 'center' }}>4.200.000 đồng/quý</p>
                    </td>
                    <td
                      style={{
                        backgroundColor: '#e5f0ff',
                        borderColor: '#ffffff',
                        borderStyle: 'solid',
                        borderWidth: 1,
                        padding: 7,
                        verticalAlign: 'middle',
                        width: 227
                      }}
                    >
                      <p style={{ textAlign: 'center' }}>3.600.000 đồng/quý</p>
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        backgroundColor: '#a9d0ff',
                        borderColor: '#ffffff',
                        borderStyle: 'solid',
                        borderWidth: 1,
                        padding: 7,
                        verticalAlign: 'middle',
                        width: 138
                      }}
                    >
                      <p style={{ textAlign: 'center' }}>
                        <strong>Dưới 31</strong>
                      </p>
                    </td>
                    <td
                      style={{
                        backgroundColor: '#e5f0ff',
                        borderColor: '#ffffff',
                        borderStyle: 'solid',
                        borderWidth: 1,
                        padding: 7,
                        verticalAlign: 'middle',
                        width: 238
                      }}
                    >
                      <p style={{ textAlign: 'center' }}>5.100.000 đồng/quý</p>
                    </td>
                    <td
                      style={{
                        backgroundColor: '#e5f0ff',
                        borderColor: '#ffffff',
                        borderStyle: 'solid',
                        borderWidth: 1,
                        padding: 7,
                        verticalAlign: 'middle',
                        width: 227
                      }}
                    >
                      <p style={{ textAlign: 'center' }}>4.500.000 đồng/quý</p>
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        backgroundColor: '#a9d0ff',
                        borderColor: '#ffffff',
                        borderStyle: 'solid',
                        borderWidth: 1,
                        padding: 7,
                        verticalAlign: 'middle',
                        width: 138
                      }}
                    >
                      <p style={{ textAlign: 'center' }}>
                        <strong>Dưới 46</strong>
                      </p>
                    </td>
                    <td
                      style={{
                        backgroundColor: '#e5f0ff',
                        borderColor: '#ffffff',
                        borderStyle: 'solid',
                        borderWidth: 1,
                        padding: 7,
                        verticalAlign: 'middle',
                        width: 238
                      }}
                    >
                      <p style={{ textAlign: 'center' }}>6.300.000 đồng/quý</p>
                    </td>
                    <td
                      style={{
                        backgroundColor: '#e5f0ff',
                        borderColor: '#ffffff',
                        borderStyle: 'solid',
                        borderWidth: 1,
                        padding: 7,
                        verticalAlign: 'middle',
                        width: 227
                      }}
                    >
                      <p style={{ textAlign: 'center' }}>5.400.000 đồng/quý</p>
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        backgroundColor: '#a9d0ff',
                        borderColor: '#ffffff',
                        borderStyle: 'solid',
                        borderWidth: 1,
                        padding: 7,
                        verticalAlign: 'middle',
                        width: 138
                      }}
                    >
                      <p style={{ textAlign: 'center' }}>
                        <strong>Dưới 61</strong>
                      </p>
                    </td>
                    <td
                      style={{
                        backgroundColor: '#e5f0ff',
                        borderColor: '#ffffff',
                        borderStyle: 'solid',
                        borderWidth: 1,
                        padding: 7,
                        verticalAlign: 'middle',
                        width: 238
                      }}
                    >
                      <p style={{ textAlign: 'center' }}>7.500.000 đồng/quý</p>
                    </td>
                    <td
                      style={{
                        backgroundColor: '#e5f0ff',
                        borderColor: '#ffffff',
                        borderStyle: 'solid',
                        borderWidth: 1,
                        padding: 7,
                        verticalAlign: 'middle',
                        width: 227
                      }}
                    >
                      <p style={{ textAlign: 'center' }}>6.000.000 đồng/quý</p>
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        backgroundColor: '#a9d0ff',
                        borderColor: '#ffffff',
                        borderStyle: 'solid',
                        borderWidth: 1,
                        padding: 7,
                        verticalAlign: 'middle',
                        width: 138
                      }}
                    >
                      <p style={{ textAlign: 'center' }}>
                        <strong>Dưới 76</strong>
                      </p>
                    </td>
                    <td
                      style={{
                        backgroundColor: '#e5f0ff',
                        borderColor: '#ffffff',
                        borderStyle: 'solid',
                        borderWidth: 1,
                        padding: 7,
                        verticalAlign: 'middle',
                        width: 238
                      }}
                    >
                      <p style={{ textAlign: 'center' }}>8.400.000 đồng/quý</p>
                    </td>
                    <td
                      style={{
                        backgroundColor: '#e5f0ff',
                        borderColor: '#ffffff',
                        borderStyle: 'solid',
                        borderWidth: 1,
                        padding: 7,
                        verticalAlign: 'middle',
                        width: 227
                      }}
                    >
                      <p style={{ textAlign: 'center' }}>6.600.000 đồng/quý</p>
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        backgroundColor: '#a9d0ff',
                        borderColor: '#ffffff',
                        borderStyle: 'solid',
                        borderWidth: 1,
                        padding: 7,
                        verticalAlign: 'middle',
                        width: 138
                      }}
                    >
                      <p style={{ textAlign: 'center' }}>
                        <strong>Dưới 91</strong>
                      </p>
                    </td>
                    <td
                      style={{
                        backgroundColor: '#e5f0ff',
                        borderColor: '#ffffff',
                        borderStyle: 'solid',
                        borderWidth: 1,
                        padding: 7,
                        verticalAlign: 'middle',
                        width: 238
                      }}
                    >
                      <p style={{ textAlign: 'center' }}>9.600.000 đồng/quý</p>
                    </td>
                    <td
                      style={{
                        backgroundColor: '#e5f0ff',
                        borderColor: '#ffffff',
                        borderStyle: 'solid',
                        borderWidth: 1,
                        padding: 7,
                        verticalAlign: 'middle',
                        width: 227
                      }}
                    >
                      <p style={{ textAlign: 'center' }}>7.200.000 đồng/quý</p>
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        backgroundColor: '#a9d0ff',
                        borderColor: '#ffffff',
                        borderStyle: 'solid',
                        borderWidth: 1,
                        padding: 7,
                        verticalAlign: 'middle',
                        width: 138
                      }}
                    >
                      <p style={{ textAlign: 'center' }}>
                        <strong>Dưới 121</strong>
                      </p>
                    </td>
                    <td
                      style={{
                        backgroundColor: '#e5f0ff',
                        borderColor: '#ffffff',
                        borderStyle: 'solid',
                        borderWidth: 1,
                        padding: 7,
                        verticalAlign: 'middle',
                        width: 238
                      }}
                    >
                      <p style={{ textAlign: 'center' }}>10.800.000 đồng/quý</p>
                    </td>
                    <td
                      style={{
                        backgroundColor: '#e5f0ff',
                        borderColor: '#ffffff',
                        borderStyle: 'solid',
                        borderWidth: 1,
                        padding: 7,
                        verticalAlign: 'middle',
                        width: 227
                      }}
                    >
                      <p style={{ textAlign: 'center' }}>7.800.000 đồng/quý</p>
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        backgroundColor: '#a9d0ff',
                        borderColor: '#ffffff',
                        borderStyle: 'solid',
                        borderWidth: 1,
                        padding: 7,
                        verticalAlign: 'middle',
                        width: 138
                      }}
                    >
                      <p style={{ textAlign: 'center' }}>
                        <strong>Dưới 151</strong>
                      </p>
                    </td>
                    <td
                      style={{
                        backgroundColor: '#e5f0ff',
                        borderColor: '#ffffff',
                        borderStyle: 'solid',
                        borderWidth: 1,
                        padding: 7,
                        verticalAlign: 'middle',
                        width: 238
                      }}
                    >
                      <p style={{ textAlign: 'center' }}>12.000.000 đồng/quý</p>
                    </td>
                    <td
                      style={{
                        backgroundColor: '#e5f0ff',
                        borderColor: '#ffffff',
                        borderStyle: 'solid',
                        borderWidth: 1,
                        padding: 7,
                        verticalAlign: 'middle',
                        width: 227
                      }}
                    >
                      <p style={{ textAlign: 'center' }}>8.700.000 đồng/quý</p>
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        backgroundColor: '#a9d0ff',
                        borderColor: '#ffffff',
                        borderStyle: 'solid',
                        borderWidth: 1,
                        padding: 7,
                        verticalAlign: 'middle',
                        width: 138
                      }}
                    >
                      <p style={{ textAlign: 'center' }}>
                        <strong>Dưới 181</strong>
                      </p>
                    </td>
                    <td
                      style={{
                        backgroundColor: '#e5f0ff',
                        borderColor: '#ffffff',
                        borderStyle: 'solid',
                        borderWidth: 1,
                        padding: 7,
                        verticalAlign: 'middle',
                        width: 238
                      }}
                    >
                      <p style={{ textAlign: 'center' }}>13.200.000 đồng/quý</p>
                    </td>
                    <td
                      style={{
                        backgroundColor: '#e5f0ff',
                        borderColor: '#ffffff',
                        borderStyle: 'solid',
                        borderWidth: 1,
                        padding: 7,
                        verticalAlign: 'middle',
                        width: 227
                      }}
                    >
                      <p style={{ textAlign: 'center' }}>9.600.000 đồng/quý</p>
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        backgroundColor: '#a9d0ff',
                        borderColor: '#ffffff',
                        borderStyle: 'solid',
                        borderWidth: 1,
                        padding: 7,
                        verticalAlign: 'middle',
                        width: 138
                      }}
                    >
                      <p style={{ textAlign: 'center' }}>
                        <strong>Từ 181 trở lên</strong>
                      </p>
                    </td>
                    <td
                      style={{
                        backgroundColor: '#e5f0ff',
                        borderColor: '#ffffff',
                        borderStyle: 'solid',
                        borderWidth: 1,
                        padding: 7,
                        verticalAlign: 'middle',
                        width: 238
                      }}
                    >
                      <p style={{ textAlign: 'center' }}>Phụ thu 30.000 đồng/hóa đơn</p>
                    </td>
                    <td
                      style={{
                        backgroundColor: '#e5f0ff',
                        borderColor: '#ffffff',
                        borderStyle: 'solid',
                        borderWidth: 1,
                        padding: 11,
                        verticalAlign: 'middle',
                        width: 227
                      }}
                    >
                      <p style={{ textAlign: 'center' }}>Phụ thu 20.000 đồng/hóa đơn</p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p style={{ textAlign: 'justify' }}>
                (*) Phí dịch vụ kế toán, báo cáo thuế áp dụng cho quý - 3 tháng.&nbsp;
                <br />
                &nbsp;
              </p>
              <table
                cellSpacing={0}
                className='bang-xanh table-post-custom'
                style={{ borderCollapse: 'collapse', border: 'none', width: '100%' }}
              >
                <tbody>
                  <tr>
                    <td
                      colSpan={3}
                      style={{
                        borderBottom: '1px solid #ffffff',
                        borderLeft: '1px solid #ffffff',
                        borderRight: '1px solid #ffffff',
                        borderTop: '1px solid #ffffff',
                        padding: '7px 7px 7px 7px',
                        verticalAlign: 'middle',
                        width: 137
                      }}
                    >
                      <p style={{ textAlign: 'center' }}>
                        <span style={{ color: '#ffffff' }}>
                          <strong>
                            Nhóm ngành thi công xây dựng - trang trí nội thất - sản xuất - gia công - lắp đặt
                          </strong>
                        </span>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        backgroundColor: '#a9d0ff',
                        borderColor: '#ffffff',
                        borderStyle: 'solid',
                        borderWidth: 1,
                        padding: 7,
                        verticalAlign: 'middle',
                        width: 137
                      }}
                    >
                      <p style={{ textAlign: 'center' }}>
                        <strong>Số hóa đơn</strong>
                      </p>
                    </td>
                    <td
                      style={{
                        backgroundColor: '#a9d0ff',
                        borderColor: '#ffffff',
                        borderStyle: 'solid',
                        borderWidth: 1,
                        padding: 7,
                        verticalAlign: 'middle',
                        width: 232
                      }}
                    >
                      <p style={{ textAlign: 'center' }}>
                        <strong>
                          Thi công xây dựng - sản xuất
                          <br />
                          (bao gồm sản xuất phần mềm)
                        </strong>
                      </p>
                    </td>
                    <td
                      style={{
                        backgroundColor: '#a9d0ff',
                        borderColor: '#ffffff',
                        borderStyle: 'solid',
                        borderWidth: 1,
                        padding: 7,
                        verticalAlign: 'middle',
                        width: 232
                      }}
                    >
                      <p style={{ textAlign: 'center' }}>
                        <strong>
                          Trang trí nội thất
                          <br />
                          Lắp đặt - gia công
                        </strong>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        backgroundColor: '#a9d0ff',
                        borderColor: '#ffffff',
                        borderStyle: 'solid',
                        borderWidth: 1,
                        padding: 7,
                        verticalAlign: 'middle',
                        width: 137
                      }}
                    >
                      <p style={{ textAlign: 'center' }}>
                        <strong>Không có hóa đơn</strong>
                      </p>
                    </td>
                    <td
                      style={{
                        backgroundColor: '#e5f0ff',
                        borderColor: '#ffffff',
                        borderStyle: 'solid',
                        borderWidth: 1,
                        padding: 7,
                        verticalAlign: 'middle',
                        width: 232
                      }}
                    >
                      <p style={{ textAlign: 'center' }}>2.400.000 đồng/quý</p>
                    </td>
                    <td
                      style={{
                        backgroundColor: '#e5f0ff',
                        borderColor: '#ffffff',
                        borderStyle: 'solid',
                        borderWidth: 1,
                        padding: 7,
                        verticalAlign: 'middle',
                        width: 232
                      }}
                    >
                      <p style={{ textAlign: 'center' }}>2.400.000 đồng/quý</p>
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        backgroundColor: '#a9d0ff',
                        borderColor: '#ffffff',
                        borderStyle: 'solid',
                        borderWidth: 1,
                        padding: 7,
                        verticalAlign: 'middle',
                        width: 137
                      }}
                    >
                      <p style={{ textAlign: 'center' }}>
                        <strong>Dưới 10</strong>
                      </p>
                    </td>
                    <td
                      style={{
                        backgroundColor: '#e5f0ff',
                        borderColor: '#ffffff',
                        borderStyle: 'solid',
                        borderWidth: 1,
                        padding: 7,
                        verticalAlign: 'middle',
                        width: 232
                      }}
                    >
                      <p style={{ textAlign: 'center' }}>3.600.000 đồng/quý</p>
                    </td>
                    <td
                      style={{
                        backgroundColor: '#e5f0ff',
                        borderColor: '#ffffff',
                        borderStyle: 'solid',
                        borderWidth: 1,
                        padding: 7,
                        verticalAlign: 'middle',
                        width: 232
                      }}
                    >
                      <p style={{ textAlign: 'center' }}>3.000.000 đồng/quý</p>
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        backgroundColor: '#a9d0ff',
                        borderColor: '#ffffff',
                        borderStyle: 'solid',
                        borderWidth: 1,
                        padding: 7,
                        verticalAlign: 'middle',
                        width: 137
                      }}
                    >
                      <p style={{ textAlign: 'center' }}>
                        <strong>Dưới 16</strong>
                      </p>
                    </td>
                    <td
                      style={{
                        backgroundColor: '#e5f0ff',
                        borderColor: '#ffffff',
                        borderStyle: 'solid',
                        borderWidth: 1,
                        padding: 7,
                        verticalAlign: 'middle',
                        width: 232
                      }}
                    >
                      <p style={{ textAlign: 'center' }}>4.200.000 đồng/quý</p>
                    </td>
                    <td
                      style={{
                        backgroundColor: '#e5f0ff',
                        borderColor: '#ffffff',
                        borderStyle: 'solid',
                        borderWidth: 1,
                        padding: 7,
                        verticalAlign: 'middle',
                        width: 232
                      }}
                    >
                      <p style={{ textAlign: 'center' }}>3.600.000 đồng/quý</p>
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        backgroundColor: '#a9d0ff',
                        borderColor: '#ffffff',
                        borderStyle: 'solid',
                        borderWidth: 1,
                        padding: 7,
                        verticalAlign: 'middle',
                        width: 137
                      }}
                    >
                      <p style={{ textAlign: 'center' }}>
                        <strong>Dưới 31</strong>
                      </p>
                    </td>
                    <td
                      style={{
                        backgroundColor: '#e5f0ff',
                        borderColor: '#ffffff',
                        borderStyle: 'solid',
                        borderWidth: 1,
                        padding: 7,
                        verticalAlign: 'middle',
                        width: 232
                      }}
                    >
                      <p style={{ textAlign: 'center' }}>5.100.000 đồng/quý</p>
                    </td>
                    <td
                      style={{
                        backgroundColor: '#e5f0ff',
                        borderColor: '#ffffff',
                        borderStyle: 'solid',
                        borderWidth: 1,
                        padding: 7,
                        verticalAlign: 'middle',
                        width: 232
                      }}
                    >
                      <p style={{ textAlign: 'center' }}>4.500.000 đồng/quý</p>
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        backgroundColor: '#a9d0ff',
                        borderColor: '#ffffff',
                        borderStyle: 'solid',
                        borderWidth: 1,
                        padding: 7,
                        verticalAlign: 'middle',
                        width: 137
                      }}
                    >
                      <p style={{ textAlign: 'center' }}>
                        <strong>Dưới 46</strong>
                      </p>
                    </td>
                    <td
                      style={{
                        backgroundColor: '#e5f0ff',
                        borderColor: '#ffffff',
                        borderStyle: 'solid',
                        borderWidth: 1,
                        padding: 7,
                        verticalAlign: 'middle',
                        width: 232
                      }}
                    >
                      <p style={{ textAlign: 'center' }}>6.300.000 đồng/quý</p>
                    </td>
                    <td
                      style={{
                        backgroundColor: '#e5f0ff',
                        borderColor: '#ffffff',
                        borderStyle: 'solid',
                        borderWidth: 1,
                        padding: 7,
                        verticalAlign: 'middle',
                        width: 232
                      }}
                    >
                      <p style={{ textAlign: 'center' }}>5.700.000 đồng/quý</p>
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        backgroundColor: '#a9d0ff',
                        borderColor: '#ffffff',
                        borderStyle: 'solid',
                        borderWidth: 1,
                        padding: 7,
                        verticalAlign: 'middle',
                        width: 137
                      }}
                    >
                      <p style={{ textAlign: 'center' }}>
                        <strong>Dưới 61</strong>
                      </p>
                    </td>
                    <td
                      style={{
                        backgroundColor: '#e5f0ff',
                        borderColor: '#ffffff',
                        borderStyle: 'solid',
                        borderWidth: 1,
                        padding: 7,
                        verticalAlign: 'middle',
                        width: 232
                      }}
                    >
                      <p style={{ textAlign: 'center' }}>7.500.000 đồng/quý</p>
                    </td>
                    <td
                      style={{
                        backgroundColor: '#e5f0ff',
                        borderColor: '#ffffff',
                        borderStyle: 'solid',
                        borderWidth: 1,
                        padding: 7,
                        verticalAlign: 'middle',
                        width: 232
                      }}
                    >
                      <p style={{ textAlign: 'center' }}>6.900.000 đồng/quý</p>
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        backgroundColor: '#a9d0ff',
                        borderColor: '#ffffff',
                        borderStyle: 'solid',
                        borderWidth: 1,
                        padding: 7,
                        verticalAlign: 'middle',
                        width: 137
                      }}
                    >
                      <p style={{ textAlign: 'center' }}>
                        <strong>Dưới 76</strong>
                      </p>
                    </td>
                    <td
                      style={{
                        backgroundColor: '#e5f0ff',
                        borderColor: '#ffffff',
                        borderStyle: 'solid',
                        borderWidth: 1,
                        padding: 7,
                        verticalAlign: 'middle',
                        width: 232
                      }}
                    >
                      <p style={{ textAlign: 'center' }}>8.400.000 đồng/quý</p>
                    </td>
                    <td
                      style={{
                        backgroundColor: '#e5f0ff',
                        borderColor: '#ffffff',
                        borderStyle: 'solid',
                        borderWidth: 1,
                        padding: 7,
                        verticalAlign: 'middle',
                        width: 232
                      }}
                    >
                      <p style={{ textAlign: 'center' }}>8.100.000 đồng/quý</p>
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        backgroundColor: '#a9d0ff',
                        borderColor: '#ffffff',
                        borderStyle: 'solid',
                        borderWidth: 1,
                        padding: 7,
                        verticalAlign: 'middle',
                        width: 137
                      }}
                    >
                      <p style={{ textAlign: 'center' }}>
                        <strong>Dưới 91</strong>
                      </p>
                    </td>
                    <td
                      style={{
                        backgroundColor: '#e5f0ff',
                        borderColor: '#ffffff',
                        borderStyle: 'solid',
                        borderWidth: 1,
                        padding: 7,
                        verticalAlign: 'middle',
                        width: 232
                      }}
                    >
                      <p style={{ textAlign: 'center' }}>9.600.000 đồng/quý</p>
                    </td>
                    <td
                      style={{
                        backgroundColor: '#e5f0ff',
                        borderColor: '#ffffff',
                        borderStyle: 'solid',
                        borderWidth: 1,
                        padding: 7,
                        verticalAlign: 'middle',
                        width: 232
                      }}
                    >
                      <p style={{ textAlign: 'center' }}>9.300.000 đồng/quý</p>
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        backgroundColor: '#a9d0ff',
                        borderColor: '#ffffff',
                        borderStyle: 'solid',
                        borderWidth: 1,
                        padding: 7,
                        verticalAlign: 'middle',
                        width: 137
                      }}
                    >
                      <p style={{ textAlign: 'center' }}>
                        <strong>Dưới 121</strong>
                      </p>
                    </td>
                    <td
                      style={{
                        backgroundColor: '#e5f0ff',
                        borderColor: '#ffffff',
                        borderStyle: 'solid',
                        borderWidth: 1,
                        padding: 7,
                        verticalAlign: 'middle',
                        width: 232
                      }}
                    >
                      <p style={{ textAlign: 'center' }}>10.800.000 đồng/quý</p>
                    </td>
                    <td
                      style={{
                        backgroundColor: '#e5f0ff',
                        borderColor: '#ffffff',
                        borderStyle: 'solid',
                        borderWidth: 1,
                        padding: 7,
                        verticalAlign: 'middle',
                        width: 232
                      }}
                    >
                      <p style={{ textAlign: 'center' }}>10.500.000 đồng/quý</p>
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        backgroundColor: '#a9d0ff',
                        borderColor: '#ffffff',
                        borderStyle: 'solid',
                        borderWidth: 1,
                        padding: 7,
                        verticalAlign: 'middle',
                        width: 137
                      }}
                    >
                      <p style={{ textAlign: 'center' }}>
                        <strong>Dưới 151</strong>
                      </p>
                    </td>
                    <td
                      style={{
                        backgroundColor: '#e5f0ff',
                        borderColor: '#ffffff',
                        borderStyle: 'solid',
                        borderWidth: 1,
                        padding: 7,
                        verticalAlign: 'middle',
                        width: 232
                      }}
                    >
                      <p style={{ textAlign: 'center' }}>12.000.000 đồng/quý</p>
                    </td>
                    <td
                      style={{
                        backgroundColor: '#e5f0ff',
                        borderColor: '#ffffff',
                        borderStyle: 'solid',
                        borderWidth: 1,
                        padding: 7,
                        verticalAlign: 'middle',
                        width: 232
                      }}
                    >
                      <p style={{ textAlign: 'center' }}>11.700.000 đồng/quý</p>
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        backgroundColor: '#a9d0ff',
                        borderColor: '#ffffff',
                        borderStyle: 'solid',
                        borderWidth: 1,
                        padding: 7,
                        verticalAlign: 'middle',
                        width: 137
                      }}
                    >
                      <p style={{ textAlign: 'center' }}>
                        <strong>Dưới 181</strong>
                      </p>
                    </td>
                    <td
                      style={{
                        backgroundColor: '#e5f0ff',
                        borderColor: '#ffffff',
                        borderStyle: 'solid',
                        borderWidth: 1,
                        padding: 7,
                        verticalAlign: 'middle',
                        width: 232
                      }}
                    >
                      <p style={{ textAlign: 'center' }}>13.200.000 đồng/quý</p>
                    </td>
                    <td
                      style={{
                        backgroundColor: '#e5f0ff',
                        borderColor: '#ffffff',
                        borderStyle: 'solid',
                        borderWidth: 1,
                        padding: 7,
                        verticalAlign: 'middle',
                        width: 232
                      }}
                    >
                      <p style={{ textAlign: 'center' }}>12.900.000 đồng/quý</p>
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        backgroundColor: '#a9d0ff',
                        borderColor: '#ffffff',
                        borderStyle: 'solid',
                        borderWidth: 1,
                        padding: 7,
                        verticalAlign: 'middle',
                        width: 137
                      }}
                    >
                      <p style={{ textAlign: 'center' }}>
                        <strong>Từ 181 trở lên</strong>
                      </p>
                    </td>
                    <td
                      colSpan={2}
                      style={{
                        borderBottom: '1px solid #ffffff',
                        borderLeft: '1px solid #ffffff',
                        borderRight: '1px solid #ffffff',
                        borderTop: '1px solid #ffffff',
                        padding: '7px 7px 7px 7px',
                        verticalAlign: 'middle',
                        width: 232
                      }}
                    >
                      <p style={{ textAlign: 'center' }}>Phụ thu 30.000 đồng cho mỗi hóa đơn phát sinh</p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p style={{ textAlign: 'justify' }}>(*) Phí dịch vụ kế toán, báo cáo thuế áp dụng cho quý - 3 tháng.</p>
            </div>
          </div>
          <div>
            <p style={{ textAlign: 'justify' }}>
              Với kim chỉ nam “Khi khách hàng cần Kế toán Anpha có mặt”, chúng tôi luôn cam kết mọi khó khăn, vướng mắc
              về kế toán, thuế và các thủ tục pháp lý liên quan sẽ được giải quyết một cách triệt để và nhanh chóng
              nhất.&nbsp;
            </p>
            <p style={{ textAlign: 'justify' }}>
              Dưới đây là những việc mà Anpha sẽ thay bạn thực hiện. Đồng thời, Anpha sẽ chịu trách nhiệm với khách hàng
              doanh nghiệp và pháp luật về tất cả hồ sơ mà Anpha thực hiện.
            </p>
          </div>
          <div className='mb-4 ratio ratio-16x9 h-[300px]'>
            <iframe
              className='w-full h-full'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              src='https://www.youtube.com/embed/7g1UbiruvFY'
              title='YouTube video player'
            ></iframe>
          </div>
          <span className='text-[24px] text-[#2a4d9f] leading-6 font-semibold '>
            Nhiệm vụ của Anpha khi cung cấp dịch vụ kế toán (dịch vụ báo cáo thuế)
          </span>
          <ol className='mb-10'>
            <div>
              <li aria-level={1} className='my-1' style={{ textAlign: 'justify' }}>
                1. Miễn phí tư vấn sử dụng hóa đơn đầu vào, đầu ra hợp lý;
              </li>
              <li aria-level={1} className='my-1' style={{ textAlign: 'justify' }}>
                2. Nhận hóa đơn, chứng từ kế toán tận nơi;
              </li>
              <li aria-level={1} className='my-1' style={{ textAlign: 'justify' }}>
                3. Phân loại, kiểm tra tính hợp lệ của chứng từ gốc;
              </li>
              <li aria-level={1} className='my-1' style={{ textAlign: 'justify' }}>
                4. Cân đối thuế GTGT đầu vào, đầu ra;
              </li>
              <li aria-level={1} className='my-1' style={{ textAlign: 'justify' }}>
                5. Lập tờ khai báo cáo thuế, khai báo thuế TNCN, tạm tính thuế TNDN;
              </li>
              <li aria-level={1} className='my-1' style={{ textAlign: 'justify' }}>
                6. Nộp báo cáo thuế lên cơ quan thuế theo quy định;
              </li>
              <li aria-level={1} className='my-1' style={{ textAlign: 'justify' }}>
                7. Hoàn thiện chứng từ và lập sổ sách kế toán, cụ thể:
                <br />
                -&nbsp;Lập các chứng từ kế toán: nhập, xuất, thu, chi;
                <br />
                -&nbsp;Lập các sổ chi tiết tính giá thành sản phẩm, sổ kho hàng hóa, phải thu, phải trả;
                <br />
                -&nbsp;Lập các mẫu biểu phân bổ, khấu hao… theo quy định;
                <br />
                -&nbsp;Lập sổ cái các tài khoản;
                <br />
                -&nbsp;Lập sổ nhật ký chung;
                <br />
                -&nbsp;Lập quyết toán thuế TNDN, thuế TNCN.
              </li>
              <li aria-level={1} className='my-1' style={{ textAlign: 'justify' }}>
                8. Lập báo cáo tài chính cuối năm.
              </li>
            </div>
          </ol>
          <span className='text-[24px] text-[#2a4d9f] leading-6 font-semibold '>
            Khách hàng cần cung cấp gì khi sử dụng dịch vụ kế toán - báo cáo thuế
          </span>
          <div className='mb-10'>
            <p className='mb-5 mt-2' style={{ textAlign: 'justify' }}>
              Bạn chỉ cần cung cấp cho Anpha 2 thông tin đơn giản như sau:
            </p>
            <ol className='ml-4'>
              <li aria-level={1} className='my-1' style={{ textAlign: 'justify' }}>
                1. Hóa đơn đầu vào, đầu ra;
              </li>
              <li aria-level={1} className='my-1' style={{ textAlign: 'justify' }}>
                2. Thiết bị chữ ký số để Anpha nộp báo báo thuế qua mạng.
              </li>
            </ol>
          </div>

          <span className='text-[24px] text-[#2a4d9f] leading-6 font-semibold '>
            Cam kết trách nhiệm của Anpha khi cung cấp dịch vụ kế toán thuế
          </span>
          <div className='mb-10'>
            <p className='mt-3 mb-4' style={{ textAlign: 'justify' }}>
              Với kinh nghiệm hơn 16&nbsp;năm trong ngành dịch vụ kế toán, Anpha hiểu rằng vấn đề quan trọng nhất trong
              việc cung cấp dịch vụ kế toán thuế là tính kịp thời và trách nhiệm đối với khách hàng.&nbsp;
            </p>
            <p className='mb-3' style={{ textAlign: 'justify' }}>
              Vì vậy, trong tất cả hợp đồng dịch vụ kế toán, Anpha luôn cam kết 8 chỉ mục quan trọng sau:
            </p>
            <ol>
              <li aria-level={1} className='my-1' style={{ textAlign: 'justify' }}>
                1. Chịu trách nhiệm thực hiện đầy đủ và đúng tiến độ các công việc sau:&nbsp;&nbsp;
                <br />
                -&nbsp;Sắp xếp, phân loại chứng từ;
                <br />
                -&nbsp;Lập và bàn giao các loại sổ sách kế toán như: sổ chi tiết các tài khoản, sổ tổng hợp… theo đúng
                quy định và chuẩn mực kế toán hiện hành.
              </li>
              <li aria-level={1} className='my-1' style={{ textAlign: 'justify' }}>
                2. Soạn thảo các văn bản, tài liệu theo yêu cầu của cơ quan có thẩm quyền khi thực hiện nội dung dịch vụ
                kế toán;
              </li>
              <li aria-level={1} className='my-1' style={{ textAlign: 'justify' }}>
                3. Chịu trách nhiệm trên tất cả các chứng từ, hồ sơ, báo cáo tài chính, báo cáo kế toán do Kế toán Anpha
                thực hiện trên cơ sở số liệu, chứng từ do khách hàng cung cấp (chứng từ hóa đơn hợp lệ theo quy định của
                pháp luật);
              </li>
              <li aria-level={1} className='my-1' style={{ textAlign: 'justify' }}>
                4. Chịu trách nhiệm giải trình hồ sơ kế toán thuế khi cơ quan nhà nước có yêu cầu về số liệu kế toán do
                Anpha thực hiện;
              </li>
              <li aria-level={1} className='my-1' style={{ textAlign: 'justify' }}>
                5. Chịu trách nhiệm chi trả toàn bộ các khoản phạt trường hợp khách hàng bị cơ quan nhà nước xử phạt do
                sai sót hồ sơ, chứng từ được thực hiện bởi Kế toán Anpha;
              </li>
              <li aria-level={1} className='my-1' style={{ textAlign: 'justify' }}>
                6. Định kỳ mỗi tháng hoặc mỗi quý, chuyên viên của Kế toán Anpha sẽ đến trực tiếp địa chỉ của khách hàng
                để nhận chứng từ. Vậy nên, khách hàng không phải mất thời gian di chuyển và chi phí chuyển phát
                nhanh.&nbsp;
              </li>
              <li aria-level={1} className='my-1' style={{ textAlign: 'justify' }}>
                7. Khách hàng có thể chủ động tiếp nhận trực tiếp các thông tin, vấn đề về kê khai thuế từ cơ quan thuế,
                bởi Kế toán Anpha sẽ cung cấp địa chỉ email của bạn cho cơ quan thuế;
              </li>
              <li aria-level={1} className='my-1' style={{ textAlign: 'justify' }}>
                8. Chịu trách nhiệm bảo mật thông tin kế toán của khách hàng, ngay cả khi kết thúc hợp đồng cung cấp
                dịch vụ kế toán.
              </li>
            </ol>
          </div>
          <div className='mb-4 ratio h-[300px] ratio-16x9'>
            <iframe
              className='w-full h-full'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              src='https://www.youtube.com/embed/sMRts_NBAIY'
              title='YouTube video player'
            ></iframe>
          </div>
          <span className='text-[24px] text-[#2a4d9f] leading-6 font-semibold '>
            10 câu hỏi thường gặp về dịch vụ kế toán của Anpha
          </span>
          <div className='border-b pb-3'>
            <div>
              <span className='mr-2 font-bold text-[20px] text-[#e5451b]'>+</span>
              <span className='font-semibold'>1. Công ty không xuất hoá đơn có phải nộp báo cáo thuế không?</span>
            </div>
            <p className='pl-3 mt-3 border-[#e5451b] border-l-[2px]'>
              Có. Theo quy định, dù không xuất hoá đơn hay không có hoá đơn đầu vào thì doanh nghiệp vẫn phải nộp báo
              cáo thuế hàng quý và báo cáo tài chính cuối năm.
            </p>
          </div>
          <div className='border-b pb-3'>
            <div>
              <span className='mr-2 font-bold text-[20px] text-[#e5451b]'>+</span>
              <span className='font-semibold'>
                2. Tôi có thể gọi Anpha khi tôi gặp các vấn đề không hiểu về thuế và hóa đơn không?
              </span>
            </div>
            <p className='pl-3 mt-3 border-[#e5451b] border-l-[2px]'>
              Có. Ngay sau khi ký hợp đồng, chuyên viên kế toán của Anpha sẽ lập tức theo dõi và xử lý hồ sơ của công ty
              bạn.
            </p>
            <p className='pl-3 mt-3 border-[#e5451b] border-l-[2px]'>
              Đồng thời, trong quá trình hoạt động, chuyên viên kế toán sẽ tư vấn tất cả các vấn đề liên quan đến thuế
              và hóa đơn để doanh nghiệp vừa có thể tối ưu thuế, vừa đảm bảo sổ sách kế toán luôn đúng theo quy định
              hiện hành.
            </p>
          </div>
          <div className='border-b pb-3'>
            <div>
              <span className='mr-2 font-bold text-[20px] text-[#e5451b]'>+</span>
              <span className='font-semibold'>3. Anpha có chịu trách nhiệm nếu làm sai báo cáo của tôi?</span>
            </div>
            <p className='pl-3 mt-3 border-[#e5451b] border-l-[2px]'>
              Có. Kế toán Anpha sẽ chịu hoàn toàn trách nhiệm nếu báo cáo thuế, báo cáo tài chính của khách hàng bị sai
              do lỗi của Kế toán Anpha.
            </p>
          </div>
          <div className='border-b pb-3'>
            <div>
              <span className='mr-2 font-bold text-[20px] text-[#e5451b]'>+</span>
              <span className='font-semibold'>
                4. Số hóa đơn trong bảng giá là tính hóa đơn đầu ra hay cả hóa đơn đầu ra và đầu vào?
              </span>
            </div>
            <p className='pl-3 mt-3 border-[#e5451b] border-l-[2px]'>
              Số hóa đơn trong bảng phí dịch vụ kế toán bao gồm hóa đơn đầu ra và hóa đơn đầu vào.
            </p>
          </div>
          <div className='border-b pb-3'>
            <div>
              <span className='mr-2 font-bold text-[20px] text-[#e5451b]'>+</span>
              <span className='font-semibold'>
                5. Phí dịch vụ kế toán trọn của Anpha có bao gồm phí dịch vụ báo cáo cuối năm?
              </span>
            </div>
            <p className='pl-3 mt-3 border-[#e5451b] border-l-[2px]'>
              Có. Phí dịch vụ trên đã bao gồm báo cáo cuối năm (hay còn gọi là báo cáo tài chính), nghĩa là sử dụng dịch
              vụ kế toán của Anpha bạn không phải trả thêm phí làm báo cáo tài chính cuối năm như các đơn vị khác.
            </p>
          </div>
          <p className='mt-4'>
            Gọi cho chúng tôi theo số <strong className='text-[#3f76d8]'>0901 042 555 (Miền Bắc)</strong>,{' '}
            <strong className='text-[#3f76d8]'>0939 35 6866 (Miền Trung)</strong> và{' '}
            <strong className='text-[#3f76d8]'>0902 60 2345 (Miền Nam)</strong> để được hỗ trợ.
          </p>
        </div>
        <div>
          <h3 className='text-[#2a4e9a] pb-3 border-b pl-3 leading-5 border-l-[#e5451b] border-l-[2px] text-[20px] font-semibold'>
            BÀI VIẾT LIÊN QUAN
          </h3>
          <div className='md:grid md:grid-cols-2 gap-6 lg:flex lg:flex-col lg:gap-y-0'>
            <ViewestItem
              showBig
              title='Dịch vụ thành lập công ty, doanh nghiệp Giá Rẻ -【 250.000đ 】'
              img={ThanhLapCongTY}
            />
            <ViewestItem
              showBig
              title='Dịch Vụ Kế Toán (Báo Cáo Thuế) Trọn Gói - Từ 500.000đ/tháng'
              img={DichVuKeToanTronGoi}
            />
            <ViewestItem
              showBig
              title='Dịch vụ thành lập công ty hợp danh - Phí 250.000 đồng, 3 ngày'
              img={CongTyHopDanh}
            />
            <ViewestItem
              showBig
              title='Dịch vụ báo cáo thuế, BCTC cuối năm - Chỉ từ 500.000đ/tháng'
              img={DichVuBaoCao}
            />
          </div>
        </div>
        <Rating></Rating>
      </div>
      <div className='lg:col-span-1'></div>
    </div>
  )
}

export default DichVuKeToan
