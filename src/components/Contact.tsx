"use client";
import Image from "next/image";
import contact from "../../public/image/contact.png";
import ContactForm from "@/components/ContactForm";
import {fadeIn} from "../../variants";
import {motion} from "framer-motion";

const features = [
    {
        text: 'Tự động quét SĐT khách hàng trên quảng cáo đối thủ',
    },
    {
        text: 'Quét được tất cả các comment ẩn bài quảng cáo đối thủ ( các hệ thống khác chỉ quét được 1 phần)',
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
export default function Contact() {
    return (
        <section id='contact' className='py-12 xl:pt-16'>
            <div className='container mx-auto'>
                <motion.p
                    variants={fadeIn('up', 0.4)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{once: false, amount: 0}}
                    className="text-[#42495b] xl:text-[40px] text-3xl font-bold text-center pb-14">NHẬN TƯ VẤN NGAY
                </motion.p>
                <div className='flex justify-center gap-x-8'>
                    <motion.div
                        variants={fadeIn('right', 0.1)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{once: false, amount: 0.4}} className='hidden lg:flex xl:flex relative '>
                        <Image className="w-[350px]" src={contact} alt="picture"/>
                    </motion.div>
                    <div className='w-full max-w-[600px]'>
                        <ContactForm/>
                    </div>
                </div>
            </div>
        </section>
    )
}
