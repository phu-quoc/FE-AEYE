"use client";
import Image from "next/image";
import {Button} from "@/components/ui/button";
import {Send} from "lucide-react";
import Link from "next/link";
import feature from "../../public/image/feature.png";
import {motion} from 'framer-motion';
import {fadeIn} from "../../variants";

const data = [
    {
        image: '/image/1.png',
        title: 'Quét thông tin khách hàng của đối thủ',
        content: 'Không chỉ quét thông tin khách hàng của bạn, chúng tôi còn hỗ trợ bạn quét khách hàng trong các quảng cáo đang chạy, các livestream trực tiếp của đối thủ.',
        delay: 0.1
    },
    {
        image: '/image/2.png',
        title: 'Tốc độ và tỉ lệ quét vượt trội',
        content: 'Áp dụng Công Nghệ Social Lisening giúp hệ thống thu thập được tất cả dữ liệu khách hàng mà đối thủ vừa chạy quảng cáo ra với tốc độ nhanh nhất ( 0s -3s sau khi khách để lại thông tin) và tỉ lệ quét hết comment ẩn đạt trên 96% ( ở các hệ thống khác tỉ lệ này chỉ khoảng 50-60 %)',
        delay: 0.3
    },
    {
        image: '/image/3.png',
        title: 'Tỷ lệ thành công cao trên 80%',
        content: 'Với kho dữ liệu lớn và cập nhật thường xuyên. Chúng tôi cam kết tỷ lệ chuyển đổi, tra cứu cực kì cao và chính xác nhất.',
        delay: 0.5
    },
    {
        image: '/image/2.png',
        title: 'Quét tất cả mọi tương tác',
        content: 'Bất kì đâu, bất kì hình thức nào (comment, like, share, inbox) thì hệ thống đều có thể quét được thông tin khách hàng.',
        delay: 0.1
    },
    {
        image: '/image/3.png',
        title: 'Sử dụng dễ dàng, linh hoạt',
        content: 'Với dự án vuamarketing.com 1 bà mẹ bỉm sữa hay 1 người mù công nghệ mới bắt tay vào kinh doanh Online đều sử dụng vô cùng dễ dàng.',
        delay: 0.3
    },
    {
        image: '/image/1.png',
        title: 'Thông tin tra cứu cụ thể, đầy đủ',
        content: 'Chúng tôi cung cấp cho bạn các thông tin chi tiết của khách hàng như họ tên, SĐT, địa chỉ, ngày sinh, giới tính, hành vi mua hàng.',
        delay: 0.5
    },
]

const features = [
    {
        text: 'Tự động quét SĐT khách hàng trên quảng cáo đối thủ',
    },
    {
        text: 'Quét được tất cả các comment ẩn bài quảng cáo đối thủ (các hệ thống khác chỉ quét được 1 phần)',
    },
    {
        text: 'Quét tất cả khách hàng comment trên live stream có ẩn tự động comment',
    },
    {
        text: 'Dữ liệu cập nhật tự động liên tục',
    },
    {
        text: 'Rất nhiều chức năng giúp quản lý, vận hành cực kỳ hiệu quả dữ liệu thu được và chốt sale linh hoạt đem lại doanh thu vượt trội.',
    },
]
export default function Benefit() {
    return (
        <section id='benefit' className='py-12 xl:pt-16'>
            <div className='container mx-auto'>
                <motion.p
                    variants={fadeIn('up', 0.1)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{once: false, amount: 0}}
                    className="text-[#42495b] xl:text-[40px] text-3xl font-bold text-center pb-14">NHỮNG LỢI ÍCH CỦA HỆ
                    THỐNG MANG LẠI
                </motion.p>
                <div className='grid lg:grid-cols-2 xl:grid-cols-3 gap-y-3 gap-x-3'>
                    {data.map((post, index) => {
                        return (
                            <motion.div
                                variants={fadeIn('up', post.delay)}
                                initial='hidden'
                                whileInView={'show'}
                                viewport={{once: false, amount: 0}}
                                key={index}
                                className="p-5 rounded-lg mr-5 hover:bg-violet-100 text-center">
                                <div className="flex justify-center">
                                    <Image className="w-[100px]" src={post.image} alt="picture" width={100}
                                           height={100}/>
                                </div>
                                <p className="text-[#42495b] text-lg font-semibold my-2">{post.title}</p>
                                <p className="text-[#42495b]">
                                    {post.content}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
                <motion.div
                    variants={fadeIn('up', 0.4)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{once: false, amount: 0}} className='text-center mt-4'>
                    <Link href='#contact'>
                        <Button className='gap-x-2'>Nhận tư vấn <Send size={18}/> </Button>
                    </Link>
                </motion.div>
                <div className='flex justify-between gap-x-8 mt-20'>
                    <motion.div
                        variants={fadeIn('right', 0.1)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{once: false, amount: 0}}
                        className='flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0'>
                        <p className="text-[#8A3EAF] text-3xl font-bold">Với các chức năng nổi bật</p>
                        {features.map((feature, index) => {
                            return (
                                <p
                                    key={index}
                                    className="text-[#42495b] pt-5 text-lg font-semibold">
                                    {feature.text}
                                </p>
                            )
                        })}
                    </motion.div>
                    <motion.div
                        variants={fadeIn('left', 0.1)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{once: false, amount: 0}}
                        className='hidden md:flex xl:flex relative'>
                        <div className="bg-orange-200 rounded-full">
                            <Image className="w-[400px] h-[400px]" src={feature} alt="picture"/>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
