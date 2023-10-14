import Banner from "~/assets/images/Banner-lien-he.jpg";
import Lienhe from "~/assets/images/bt-lien-he.png";
const Contact = () => {
  return (
      <div className="container">
        <div className="col-span-2 md:col-span-1" style={{marginTop: "1.2rem"}} >
          <img src={Banner} className="w-full mb-3" alt="Banner Liên Hệ" />
        </div>
        <div className="grid grid-cols-3 md:grid-cols-3 gap-4" style={{marginTop: "1.8rem"}}>
          <div className="col-span-2 md:col-span-1 ">
            <h3 className="font-bold text-primary text-2xl">
              LIÊN HỆ VỚI CHÚNG TÔI
            </h3>
            <p className="text-muted my-3">
              Hãy để lại thông tin, chuyên viên của chúng tôi sẽ nhanh chóng hỗ
              trợ bạn.
            </p>
            <div className='px-6 py-6 lg:px-8'>
            <h3 className='mb-4 text-xl font-medium text-gray-900 dark:text-white'>Xem bình luận</h3>
            <form className='space-y-6' action='#' autoComplete='false'>
              <div>
                <label htmlFor='title' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                  Email
                </label>
                <input
                  type='text'
                  name='title'
                  id='title'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'
                  placeholder='Tiêu đề'
                  // value={data?.email}
                />
              </div>
              <div>
                <label htmlFor='price' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                  Địa chỉ
                </label>
                <input
                  type='number'
                  name='price'
                  id='price'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'
                  placeholder='Không ghi địa chỉ'
                  // value={data?.address}
                />
              </div>
              <div>
                <label htmlFor='link' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                  Số điện thoại
                </label>
                <input
                  type='text'
                  name='link'
                  id='link'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'
                  placeholder='link'
                  // value={data?.phone}
                />
              </div>
              <div>
                <label htmlFor='default-search' className=' text-sm font-medium text-gray-900  dark:text-white'>
                  Nội dung
                </label>
                <div className='mt-2'>
                  <div className='relative'>
                    <textarea
                      id='default-search'
                      // value={data?.content}
                      className='block min-h-max w-full px-4 py-4  text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                      placeholder='Nội dung'
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
            {/* <div className="mb-3">
              <input
                type="text"
                className="form-input bg-light mb-4"
                id="hoten"
                placeholder="Họ và Tên"
              />
              <input
                type="text"
                className="form-input bg-light mb-4"
                id="txtdt"
                placeholder="Số điện thoại"
              />
              <input
                type="email"
                className="form-input bg-light mb-4"
                id="txtemail"
                placeholder="Email"
              />
              <textarea
                className="form-input bg-light mb-4"
                placeholder="Nội dung"
                id="txtnoidung"
                rows={5}
                defaultValue={""}
              />
            </div> */}
            <div className="text-center">
              <a role="button" id="btnclick">
                <img
                  src={Lienhe}
                  alt="Liên Hệ"
                  className="w-40"
                />
              </a>
            </div>
          </div>
          <div className="col-span-2 md:col-span-2 ">
            <h4 className="font-bold text-primary text-2xl mb-4">
              CÔNG TY DỊCH VỤ KẾ TOÁN ANPHA
            </h4>
            <div className="flex mb-2">
              <div className="badge rounded-full bg-light avatar-comment me-2">
                <i className="fa text-secondary fa-phone" aria-hidden="true" />
              </div>
              <div>
                <p className="text-primary font-bold mb-2">DỊCH VỤ PHÁP LÝ</p>
                <p className="mb-2">
                  <small className="text-lg">
                    <b>Miền Bắc:</b> <a href="tel:0984477711">098 44 777 11</a> |{" "}
                    <b>Miền Trung:</b> <a href="tel:0903003779">0903 003 779</a> |{" "}
                    <b>Miền Nam:</b> <a href="tel:0938268123">0938 268 123</a>
                  </small>
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="badge rounded-full bg-light avatar-comment me-2">
                <i className="fa text-secondary fa-phone" aria-hidden="true" />
              </div>
              <div>
                <p className="text-primary font-bold mb-2">DỊCH VỤ KẾ TOÁN</p>
                <p className="mb-2">
                  <small className="text-lg">
                    <b>Miền Bắc:</b> <a href="tel:0901042555">0901 042 555</a> |{" "}
                    <b>Miền Trung:</b> <a href="tel:0939356866">0939 35 6866</a> |{" "}
                    <b>Miền Nam:</b> <a href="tel:0902602345">0902 60 2345</a>
                  </small>
                </p>
              </div>
            </div>
            <div className="mb-3">
              <div className="badge rounded-full bg-light avatar-comment me-2">
                <i className="fa text-secondary fa-envelope" aria-hidden="true" />
              </div>
              <small className="text-lg">
                <b>cskh@ketoananpha.vn</b>
              </small>
              <div className="badge rounded-full bg-light avatar-comment mx-2">
                <i
                  className="fab text-secondary fa-facebook-f"
                  aria-hidden="true"
                />
              </div>
              <small className="text-lg">
                <b>
                  <a href="//fb.com/ketoananpha" target="_blank" rel="nofollow">
                    fb.com/ketoananpha
                  </a>
                </b>
              </small>
            </div>
            <div className="mb-10" style={{height: "430px"}}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.7826384090004!2d106.6648483748205!3d10.979772655410496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d735e1167645%3A0x624d4798123de4d1!2zNDI5IMSQ4bqhaSBs4buZIELDrG5oIETGsMahbmcsIFBow7ogQ8aw4budbmcsIFRo4bunIEThuqd1IE3hu5l0LCBCw6xuaCBExrDGoW5nLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1697260829191!5m2!1svi!2s"
                style={{ border: 0, width: "100%", height: "100%",}}
                allowFullScreen
                loading="lazy"
                title="Google Maps"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Contact;
