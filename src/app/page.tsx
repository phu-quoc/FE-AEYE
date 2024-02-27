import { Button, Col, Row } from "antd";
import Image from "next/image";
import { useCallback } from "react";
import trangchu from "../component/image/02-1-2.png"
import trangchu1 from "../component/image/1.png"
import trangchu2 from "../component/image/2.png"
import trangchu3 from "../component/image/3.png"

export default function Home() {

  return (
    <main>
      <div className="min-h-[800px] bg-gradient-to-r from-[#8A3EAF] to-[#552CC1]">
        <div className="max-w-screen-xl mx-auto p-5 pt-[150px] text-center text-white">
          <Row>
            <Col xs={24} xl={12} className="pt-[100px]">
              <p className="font-bold text-5xl">VUA MARKETING</p>
              <p className="font-none text-2xl pt-5">Dịch vụ khai thác số điện thoại, thông tin</p>
              <p className="font-none text-2xl pb-5"> khách hàng từ chiến dịch quảng cáo của đối thủ.</p>
              <button className="border rounded-full mx-2 px-4 hover:text-black hover:bg-white">
                <p className="font-semibold text-xl p-2">Nhận tư vấn</p>
              </button>
              <button className="border rounded-full mx-2 px-4 hover:text-black hover:bg-white">
                <p className="font-semibold text-xl p-2">Dùng thử ngay</p>
              </button>
            </Col>
            <Col xs={24} xl={12} className="flex justify-center">
              <div className="bg-orange-200 rounded-full">
                <Image className="w-[500px] h-[500px]" src={trangchu} alt="picture"/>
              </div>
            </Col>
          </Row> 
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto p-5 py-[100px] text-white">
        <div>
          <Row>
            <Col xs={24} xl={12}>
              <iframe
                className="h-[300px] w-[500px]"
                src="https://www.youtube.com/embed/2s_2aIjNXew?si=gzboL_Z0VFaCBSOp" 
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </Col>
            <Col xs={24} xl={12} className="pt-5">
              <p className="text-[#8A3EAF] text-2xl font-bold">Tại sao chọn chúng tôi?</p>
              <p className="text-[#42495b] pt-5 text-lg font-semibold">Vua marketing là một dự án cực kỳ hiệu quả giúp bạn không cần chạy quảng cáo mà vẫn có
              số nóng cho sale chốt đem lại doanh thu vượt trội và chi phí tối thiểu. Hệ thống hoàn toàn tự động, dễ dàng
              thao tác, dễ dàng sử dụng, dễ dàng quản lý. Bạn hoàn toàn chủ động được mọi thứ, việc bạn cần chỉ là
              chốt đơn, còn lại hệ thống đã lo hết cho bạn.</p>
              <button className="bg-gradient-to-r from-[#8A3EAF] to-[#552CC1] border hover:from-black hover:to-black rounded-full mx-2 px-4 mt-5">
                <p className="font-semibold text-xl p-2">Nhận tư vấn</p>
              </button>
            </Col>
          </Row> 
        </div>
        <div className="pt-[100px]">
          <p className="text-[#42495b] text-4xl font-bold text-center pb-14">CÓ PHẢI BẠN ĐANG GẶP KHÓ KHĂN ?</p>
          <Row>
            <Col xs={24} xl={6}>
              <div className="flex justify-center">
                <Image className="w-[200px]" src={trangchu1} alt="picture"/>
              </div>
              <p className="text-[#42495b] p-5 text-lg font-semibold">
                Bạn chi quá nhiều tiền quảng cáo nhưng vẫn không có khách hàng gọi chốt đơn?
              </p>
            </Col>
            <Col xs={24} xl={6}>
              <div className="flex justify-center">
                <Image className="w-[200px]" src={trangchu2} alt="picture"/>
              </div>
              <p className="text-[#42495b] p-5 text-lg font-semibold">
                Mỗi lần nhân viên marketing nghỉ, face "bão" chết camp, test camp mới,... đều tốn cả đống chi phí, thời gian?
              </p>
            </Col>
            <Col xs={24} xl={6}>
              <div className="flex justify-center">
                <Image className="w-[200px]" src={trangchu3} alt="picture"/>
              </div>
              <p className="text-[#42495b] p-5 text-lg font-semibold">
                Chat, nhắn tin với khách nhưng mãi không có sđt để chốt đơn?
              </p>
            </Col>
            <Col xs={24} xl={6}>
              <div className="flex justify-center">
                <Image className="w-[200px]" src={trangchu1} alt="picture"/>
              </div>
              <p className="text-[#42495b] p-5 text-lg font-semibold">
                Việc quản lý, lưu trữ thông tin khách hàng khó khăn, quản lý nhân viên phức tạp?
              </p>
            </Col>
          </Row> 
        </div>
      </div>
      <div className="bg-[#f1f1f1]">
        <div className="max-w-screen-xl mx-auto p-5 py-[60px]">
          <p className="text-[#42495b] text-4xl font-bold text-center pb-14">NHỮNG LỢI ÍCH CỦA HỆ THỐNG MANG LẠI</p>
          <Row>
            <Col xs={24} xl={14}>
              <div className="flex">
                <div>
                  <div className="p-5 bg-white w-[300px] rounded-lg mr-5 hover:bg-violet-100">
                    <div className="flex justify-center">
                      <Image className="w-[100px]" src={trangchu3} alt="picture"/>
                    </div>
                    <p className="text-[#42495b] text-lg font-semibold">Quét thông tin khách hàng của đối thủ</p>
                    <p className="text-[#42495b]">
                      Không chỉ quét thông tin khách hàng của bạn, chúng tôi còn hỗ trợ bạn quét khách hàng trong các quảng cáo đang chạy, các livestream trực tiếp của đối thủ.
                    </p>
                  </div>
                  <div className="p-5 bg-white w-[300px] rounded-lg mt-5 hover:bg-violet-100">
                    <div className="flex justify-center">
                      <Image className="w-[100px]" src={trangchu3} alt="picture"/>
                    </div>
                    <p className="text-[#42495b] text-lg font-semibold">Quét tất cả mọi tương tác</p>
                    <p className="text-[#42495b]">
                      Bất kì đâu, bất kì hình thức nào(comment, like, share, inbox) thì hệ thống đều có thể quét được thông tin khách hàng.
                    </p>
                  </div>
                </div>
                <div className="mt-10">
                  <div className="p-5 bg-white w-[300px] rounded-lg mr-5 hover:bg-violet-100">
                    <div className="flex justify-center">
                      <Image className="w-[100px]" src={trangchu3} alt="picture"/>
                    </div>
                    <p className="text-[#42495b] text-lg font-semibold">Tỷ lệ thành công cao trên 80%</p>
                    <p className="text-[#42495b]">
                      Với kho dữ liệu lớn và cập nhật thường xuyên. Chúng tôi cam kết tỷ lệ chuyển đổi, tra cứu cực kì cao và chính xác nhất.
                    </p>
                  </div>
                  <div className="p-5 bg-white w-[300px] rounded-lg mt-5 hover:bg-violet-100">
                    <div className="flex justify-center">
                      <Image className="w-[100px]" src={trangchu3} alt="picture"/>
                    </div>
                    <p className="text-[#42495b] text-lg font-semibold">Tốc độ và tỉ lệ quét vượt trội</p>
                    <p className="text-[#42495b]">
                      Áp dụng Công Nghệ Social Lisening giúp hệ thống thu thập được tất cả dữ liệu khách hàng mà đối thủ vừa chạy quảng cáo ra với tốc độ nhanh nhất 
                      ( 0s -3s sau khi khách để lại thông tin) và tỉ lệ quét hết comment ẩn đạt trên 96% ( ở các hệ thống khác tỉ lệ này chỉ khoảng 50-60 %)
                    </p>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={24} xl={10} className="pt-5">
              <div className="mt-10">
                <p className="text-[#8A3EAF] text-2xl font-bold">Sử dụng dễ dàng, linh hoạt</p>
                <p className="text-[#42495b] pt-5 text-lg font-semibold">
                  Với dự án vuamarketing.com 1 bà mẹ bỉm sữa hay 1 người mù công nghệ mới bắt tay vào kinh doanh Online đều sử dụng vô cùng dễ dàng.
                </p>
              </div>
              <div className="mt-10">
                <p className="text-[#8A3EAF] text-2xl font-bold">Thông tin tra cứu cụ thể, đầy đủ</p>
                <p className="text-[#42495b] pt-5 text-lg font-semibold">
                  Chúng tôi cung cấp cho bạn các thông tin chi tiết của khách hàng như họ tên, SĐT, địa chỉ, ngày sinh, giới tính, hành vi mua hàng.
                </p>
              </div>
            </Col>
          </Row> 
        </div>
      </div>
    </main>
  );
}
