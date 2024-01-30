// import GpkdItem from "~/components/GpkdItem/GpkdItem";
import Section from "~/components/Section/Section";
// import ViewestItem from "~/components/Viewest/ViewestItem";
import PhapLuat from "~/assets/images/phapluat.jpg";
// import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImageCompany from "~/assets/images/thanh-lap-cong-ty.jpg";
// import DichVuKeToan from "~/assets/images/dich-vu-ke-toan.jpg";
// import DichVuKeToanTronGoi from "~/assets/images/thanh-lap-ctcp-1.png";
// import DichVuThanhLap from "~/assets/images/thoi-gian-hoan-thanh.png";
// import HoKinhDoanhCaThe from "~/assets/images/ho-kinh-doanh-ca-the.jpg";
// import DauTuNuocNgoai from "~/assets/images/thanh-lap-cong-ty-von-dau-tu-nuoc-ngoai.jpg";
import ThuTucThanhLap from "~/assets/images/thu-tuc-thanh-lap-cong-ty.jpg";
import KT1 from "~/assets/images/kt-1.jpg";
import KT2 from "~/assets/images/kt-2.jpg";
import KT3 from "~/assets/images/kt-3.jpg";
import KT4 from "~/assets/images/kt-4.jpg";
import KT5 from "~/assets/images/kt-5.jpg";
import CachDatTen from "~/assets/images/cach-dat-ten-cong-ty-doanh-nghiep-150x105.jpg";
import ThueLaGi from "~/assets/images/thue-mon-bai-la-gi-150x 05.jpg";
import VonDieuLe from "~/assets/images/von-dieu-le-la-gi-150x105.jpg";
// import CongTyHopDanh from "~/assets/images/cong-ty-hop-danh.png";
// import DichVuBaoCao from "~/assets/images/thành lập công ty TNHH 1.png";
import CongTy from "~/assets/images/cong-ty-tnhh-hay-co-phan.jpg";
import KeToan1 from "~/assets/images/ke-toan-1.jpg";
// import ThanhLapCongTY from "~/assets/images/dich-vu-bo-sung-nganh-nghe-kinh-doanh.jpg";
// import ThanhLapCongTY1 from "~/assets/images/thanh-lap-cong-ty-tnhh-mot-thanh-vien.jpg";
// import ThanhLapCongTY2 from "~/assets/images/thanh-lap-cong-ty-tnhh-hai-thanh-vien-tro-len.jpg";
import HinhDoanhNghiep from "~/assets/images/cac-loai-hinh-doanh-nghiep.jpg";
import HayHoKinhDoanh from "~/assets/images/thanh-lap-cong-ty-hay-ho-kinh-doanh.jpg";
import TraCuuMa from "~/assets/images/tra-cuu-ma-nganh-nghe-kinh-doanh.jpg";
import ThueLaGis from "~/assets/images/thue-la-gi.jpg";
import ThuTucDangKy from "~/assets/images/thu-tuc-dang-ky-ho-kinh-doanh-ca-the.jpg";
import CacLoaiThue from "~/assets/images/cac-loai-thue-va-cach-tinh-thue-cho-ho-kinh-doanh-ca-the.jpg";
// import GiaThe from "~/assets/images/soát xét 1.png";
// import ThayDoiTen from "~/assets/images/dich-vu-thay-doi-ten-cong-ty.jpg";
// import ThayDiaDiem from "~/assets/images/dich-vi-thay-doi-dia-chi-cong-ty.jpg";
// import BoSung from "~/assets/images/dich-vu-bo-sung-nganh-nghe-kinh-doanh.jpg";
// import TangVon from "~/assets/images/dich-vu-lam-thu-tuc-tang-von-dieu-le-cong-ty.jpg";
// import TangDong from "~/assets/images/lam-thu-tuc-tang-giam-co-dong-cong-ty.jpg";
// import DoiDaiDien from "~/assets/images/dich-vu-doi-dai-dien-phap-luat-cong-ty.jpg";
import { Link } from "react-router-dom";
import banner1 from "~/assets/images/banner1.png";
import banner2 from "~/assets/images/banner2.png";
import banner3 from "~/assets/images/banner3.png";
const images = [
  {
    icon: banner1,
    slug: "/ke-toan-thue-tron-goi",
  },
  {
    icon: banner2,
    slug: "/bao-cao-tai-chinh",
  },
  {
    icon: banner3,
    slug: "/quyet-toan-thue",
  },
];

const settings = {
  ddots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2300,
};
const Home = () => {
  return (
    <div className="px-3 lg:grid lg:grid-cols-3 gap-x-6 mt-3">
      <style>
        {`
        .slider-container {
          animation: moveLeft 40s linear infinite; /* Thay đổi tốc độ ở đây */
        }
        .item-content {
          background-size: cover;
          margin: 0 auto;
          background-position: center;
          transition: transform 5s;
        }
        
        @keyframes moveLeft {
          0% {
            transform: translateX(0);
          }
          12.5% {
            transform: translateX(-100%);
          }
          25% {
            transform: translateX(-200%);
          }
          37.5% {
            transform: translateX(-300%);
          }
          50% {
            transform: translateX(-400%);
          }
          62.5% {
            transform: translateX(-500%);
          }
          75% {
            transform: translateX(-600%);
          }
          87.5% {
            transform: translateX(-700%);
          }
          100% {
            transform: translateX(-800%);
          }
        }
        
          @keyframes openDoor {
            0%, 100% { transform: perspective(1000px) rotateY(0deg); }
            50% { transform: perspective(1000px) rotateY(45deg); }
          }

          @-webkit-keyframes openDoor {
            0%, 100% { transform: perspective(1000px) rotateY(0deg); }
            50% { transform: perspective(1000px) rotateY(45deg); }
          }
        `}
      </style>
      <div className="lg:col-span-3 md:h-[400px] lg:grid grid-cols-1 lg:gap-x-3 lg:mb-6 overflow-hidden">
        <Slider {...settings}>
          {images.map((image, index) => (
            <Link
              key={index}
              to={image.slug}
              className="relative w-full sm:w-full"
            >
              <img
                className="rounded-2xl block border-transparent outline-none bg-transparent bg-none img w-full h-full object-cover"
                src={image.icon}
                alt={`Banner ${index + 1}`}
              />
            </Link>
          ))}
        </Slider>
      </div>
      <div className="lg:col-span-3">
        <Section title="Cập nhật văn bản pháp luật">
          <div className="md:grid md:grid-cols-2 md:gap-x-6">
            <div>
              <Link to="/thanh-lap-cong-ty-tnhh">
                <ComponentImg
                  img={PhapLuat}
                  title="TÓM TẮT CÔNG VĂN 2121/TCT-CS ngày 29/05/2023 của Tổng Cục Thuế 
                  TRƯỜNG HỢP NĂM 2023 LẬP HÓA ĐƠN THUẾ 8 % CHO NĂM 2022"
                  describe="16 năm thành lập hơn 70.000 doanh nghiệp. Alpha tự tin cung cấp dịch vụ thành lập công ty chỉ 250.000đ tại Hà Nội, Tphcm và các tỉnh lân cận"
                />
              </Link>
            </div>
            <div>
              <Link to={"/thanh-lap-cong-ty-tnhh"}>
                <ItemSmall
                  img={KT1}
                  title="Thuế môn bài là gì? Các bậc thuế & hạn nộp thuế môn bài 2024"
                  day="22/01/2024"
                />
              </Link>
              <Link to={"/thay-doi-gpkd"}>
                <ItemSmall
                  img={KT2}
                  title="Khi doanh nghiệp kê khai thuế mà phát hiện tờ khai đã nộp có sai sót đều được kê khai bổ sung sửa đổi điều chỉnh không phân biệt nguyên nhân gì"
                  day="22/01/2024"
                />
              </Link>
              <Link to={"/quyet-toan-thue"}>
                <ItemSmall
                  img={KT3}
                  title="Cách giảm tiền phạt vphc thuế"
                  day="14/05/2023"
                />
              </Link>
              <Link to={"/hoan-thue"}>
                <ItemSmall
                  img={KT4}
                  title="Kê khai bổ sung theo quy định tại thông tư 80/2021/tt-btc của bộ tài chính"
                  day="16/10/2023"
                />
              </Link>
              <Link to={"/thanh-lap-cong-ty-tnhh"}>
                <ItemSmall
                  img={KT5}
                  title="Các khoản bị khống chế về thuế "
                  day="22/03/2023"
                />
              </Link>
            </div>
          </div>
        </Section>
        <Section title="Chia sẻ kinh nghiệm">
          <div className="md:grid md:grid-cols-2 md:gap-x-6">
            <div>
              <Link to="/thanh-lap-cong-ty-tnhh">
                <ComponentImg
                  img={ThuTucThanhLap}
                  title="Những phần mềm hỗ trợ kế toán dịch vụ trong công việc"
                  describe="Hiện nay, sự ra đời của các phần mềm kế toán đã phần nào tiết kiệm được thời gian xử lý các số liệu và mang lại độ chính xác cao. Và đây, là một số phần mềm có những tiện ích ưu việt nhất."
                />
              </Link>
            </div>
            <div>
              <Link to={"/thay-doi-gpkd"}>
                <ItemSmall
                  img={CachDatTen}
                  title="Tại sao nên sử dụng dịch vụ kế toán"
                  day="22/01/2024"
                />
              </Link>
              <Link to={"/quyet-toan-thue"}>
                <ItemSmall
                  img={ThueLaGi}
                  title="Khi nào cần sử dụng quyết toán thuế cuối năm, kiểm tra sổ sách, báo cáo thuế"
                  day="14/10/2023"
                />
              </Link>
              <Link to={"/hoan-thue"}>
                <ItemSmall
                  img={VonDieuLe}
                  title="Các doanh nghiệm cần lưu ý gì khi làm quyết toán thuế cuối năm ?"
                  day="16/07/2023"
                />
              </Link>
              <Link to={"/thanh-lap-cong-ty-tnhh"}>
                <ItemSmall
                  img={CongTy}
                  title="Các yếu tố giúp khách hàng tin tưởng, sử dụng dịch vụ tại Công ty Kế Toán Alpha"
                  day="22/03/2023"
                />
              </Link>
              <Link to={"/thanh-lap-cong-ty-tnhh"}>
                <ItemSmall
                  img={KeToan1}
                  title="Các công việc cần làm khi kế toán cho nhiều doanh nghiệp"
                  day="22/01/2023"
                />
              </Link>
            </div>
          </div>
        </Section>
        <Section title="Hồ sơ - thủ tục">
          <div>
            <div className="md:grid md:grid-cols-2 md:gap-x-6">
              <Link to="/thay-doi-gpkd">
                <ComponentImg
                  img={HinhDoanhNghiep}
                  describe="Bài viết tập trung phân tích ưu nhược điểm của các loại hình doanh nghiệp tại Việt Nam gồm công ty TNHH 1 thành viên, công ty TNHH 2 thành viên trở lên, công ty cổ phần và doanh nghiệp tư nhân, công ty hợp danh. Nếu có dự định thành lập công ty bạn không thể bỏ qua bài viết này."
                  title="Các loại hình Doanh Nghiệp và ưu nhược điểm - Ngắn, dễ hiểu"
                />
              </Link>
              <Link to="/thanh-lap-cong-ty-co-phan">
                <ComponentImg
                  img={HayHoKinhDoanh}
                  describe="Bạn nên thành lập công ty hay đăng ký hộ kinh doanh cá thể? Ưu điểm và nhược điểm của từng loại hình này như thế nào? Hiện nay, đăng ký theo loại hình nào thì phổ biến hơn? Đọc xong bài viết này bạn sẽ trả lời được những câu hỏi trên."
                  title="Nên thành lập công ty hay hộ kinh doanh - Đọc xong bạn sẽ BIẾT"
                />
              </Link>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-x-6">
              <Link to="/thay-doi-gpkd">
                <ItemSmall
                  img={TraCuuMa}
                  title="Tra cứu thông tin mã ngành nghề kinh doanh Việt Nam"
                  day="15/05/2023"
                />
              </Link>
              <Link to="/ke-toan-thue-tron-goi">
                <ItemSmall
                  img={ThueLaGis}
                  title="Thuế là gì? Các khoản thuế phải nộp sau khi thành lập công ty"
                  day="05/07/2024"
                />
              </Link>
              <Link to="/quyet-toan-thue">
                <ItemSmall
                  img={CacLoaiThue}
                  title="Các loại thuế và cách tính thuế cho Hộ Kinh Doanh Cá Thể - Mới Nhất"
                  day="24/07/2023"
                />
              </Link>
              <Link to="/bao-cao-tai-chinh">
                <ItemSmall
                  img={ThuTucDangKy}
                  title="Thủ tục đăng ký hộ kinh doanh cá thể và những lưu ý phải biết"
                  day="10/01/2024"
                />
              </Link>
            </div>
          </div>
        </Section>
      </div>
      {/* <div className="lg:col-span-1">
        <Section title="Công ty TNHH">
          <div className="mb-8">
            <Link to="/thanh-lap-cong-ty-co-phan">
              <div className="relative">
                <img src={ThanhLapCongTY} alt="ThanhLapCongTY" />
                <div className="absolute bottom-0 h-full w-full bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.4)]"></div>
                <p className="absolute bottom-4 left-4 font-medium text-white text-[17px]">
                  Dịch Vụ Thành Lập Công Ty TNHH, 250.000đ, 1 - 3 Ngày Xong
                </p>
              </div>
            </Link>
            <div className="grid grid-cols-2 gap-x-4">
              <div className="mt-4">
                <Link to="/thanh-lap-cong-ty-tnhh">
                  <div>
                    <img src={ThanhLapCongTY1} alt="ImageCompany-s" />
                  </div>
                  <p className="mt-2 text-[16px] text-[#2a4e9a]">
                    Thành lập công ty TNHH 1 thành viên - 250.000đ (Không Phát
                    Sinh)
                  </p>
                </Link>
              </div>
              <div className="mt-4">
                <Link to="/thanh-lap-cong-ty-tnhh">
                  <div>
                    <img src={ThanhLapCongTY2} alt="ImageCompany-s" />
                  </div>
                  <p className="mt-2 text-[16px] text-[#2a4e9a]">
                    Dịch vụ thành lập Công ty TNHH 2 thành viên trở lên năm 2023
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </Section>
        <Section title="Bài viết xem nhiều">
          <div className="md:grid md:grid-cols-2 gap-6 lg:flex lg:flex-col lg:gap-y-0">
            <Link to="/thanh-lap-cong-ty-tnhh">
              <ViewestItem
                title="Dịch vụ thành lập công ty, doanh nghiệp Giá Rẻ -【 250.000đ 】"
                img={ThanhLapCongTY}
              />
            </Link>
            <Link to="/ke-toan-thue-tron-goi">
              <ViewestItem
                title="Dịch Vụ Kế Toán (Báo Cáo Thuế) Trọn Gói - Từ 500.000đ/tháng"
                img={DichVuKeToanTronGoi}
              />
            </Link>
            <Link to="/thanh-lap-cong-ty-co-phan">
              <ViewestItem
                title="Dịch vụ thành lập công ty hợp danh - Phí 250.000 đồng, 3 ngày"
                img={CongTyHopDanh}
              />
            </Link>
            <Link to="/quyet-toan-thue">
              <ViewestItem
                title="Dịch vụ báo cáo thuế, BCTC cuối năm - Chỉ từ 500.000đ/tháng"
                img={DichVuBaoCao}
              />
            </Link>
            <Link to="/soat-xet-so-sach">
              <ViewestItem
                title="Dịch vụ làm thủ tục giải thể công ty, doanh nghiệp - 1.500.000đ"
                img={GiaThe}
              />
            </Link>
          </div>
        </Section>
      </div> */}
      {/* <div className="lg:col-span-3">
        <Section title="">
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-3 pb-8">
            <Link to="/thay-doi-gpkd">
              <GpkdItem
                title="Dịch vụ Thay Đổi Tên Công Ty - Chỉ 500.000đ (Không Phát Sinh Phí)"
                img={ThayDoiTen}
              />
            </Link>
            <Link to="/contact">
              <GpkdItem
                title="Dịch vụ thay đổi địa chỉ công ty - Chỉ 500.000đ (Không Phát Sinh)"
                img={ThayDiaDiem}
              />
            </Link>
            <Link to="/intro">
              <GpkdItem
                title="Dịch Vụ Bổ Sung Ngành Nghề Kinh Doanh 2023 - PHÍ CHỈ 500.000đ"
                img={BoSung}
              />
            </Link>
            <Link to="/thay-doi-gpkd">
              <GpkdItem
                title="Dịch vụ làm thủ tục tăng vốn điều lệ công ty, doanh nghiệp - 500.000đ"
                img={TangVon}
              />
            </Link>
            <Link to="/thanh-lap-cong-ty-co-phan">
              <GpkdItem
                title="Dịch vụ làm thủ tục tăng giảm cổ đông công ty - Trọn gói 500.000đ"
                img={TangDong}
              />
            </Link>
            <Link to="/thay-doi-gpkd">
              <GpkdItem
                title="Dịch Vụ Đổi Đại Diện Pháp Luật (giám đốc) Công Ty - Phí 500.000đ"
                img={DoiDaiDien}
              />
            </Link>
          </div>
        </Section>
      </div> */}
    </div>
  );
};
export const ItemSmall = ({
  title,
  img,
  day,
}: {
  title: string;
  img: string;
  day: string;
}) => {
  return (
    <div className="py-4 lg:py-0 lg:mb-6 flex border-b md:border-none">
      <div className="md:w-[20%]">
        <img src={img} alt="ImageTest1" />
      </div>
      <div className="w-[80%] ml-auto">
        {" "}
        <div className="w-[95%] ml-auto">{title}</div>
        <div style={{ color: "#6c757d" }} className="w-[95%] py-2 ml-auto">
          {day}
        </div>
      </div>
    </div>
  );
};
interface PropsComponentImg {
  img: string;
  describe: string;
  title: string;
}
export const ComponentImg = ({ img, describe, title }: PropsComponentImg) => {
  return (
    <div>
      <div className="mb-2">
        <img src={img || ImageCompany} alt="ádasd" />
      </div>
      <h2 className="border-b py-4 text-[20px] text-[#2a4e9a] mb-2">{title}</h2>
      <p className="text-[#6c757d] mb-8">{describe}</p>
    </div>
  );
};
export default Home;
