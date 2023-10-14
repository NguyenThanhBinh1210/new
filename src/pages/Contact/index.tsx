import Banner from "~/assets/images/Banner-lien-he.jpg";

const Contact = () => {
  return (
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="col-span-2 md:col-span-1">
          <img
            src={Banner}
            className="w-full mb-3"
            alt="Banner Liên Hệ"
          />
        </div>
        <div className="col-span-2 md:col-span-1">
          <img
            src="/images/icon-lien-he.png"
            className="mb-2"
            alt="Icon Liên Hệ"
          />
          <h3 className="font-bold text-primary text-2xl">
            LIÊN HỆ VỚI CHÚNG TÔI
          </h3>
          <p className="text-muted my-3">
            Hãy để lại thông tin, chuyên viên của chúng tôi sẽ nhanh chóng hỗ
            trợ bạn.
          </p>
          <div className="mb-3">
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
          </div>
          <div className="text-center">
            <a role="button" id="btnclick">
              <img
                src="/images/bt-lien-he.png"
                alt="Button Liên Hệ"
                className="w-40"
              />
            </a>
          </div>
        </div>
        <div className="col-span-2 md:col-span-1">
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
          <div className="ratio ratio-21/9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7839.106495025981!2d106.690436!3d10.768873!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb6de62968c62a08d!2zROG7i2NoIFbhu6UgVGjDoG5oIEzhuq1wIEPDtG5nIFR5IC0gMjUwLjAwMMSRIC0gS-G6vyBUb8OhbiBBbnBoYQ!5e0!3m2!1svi!2sus!4v1636899320143!5m2!1svi!2sus"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Google Maps"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
