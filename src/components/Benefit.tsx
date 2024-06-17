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
        title: 'Nâng cao an toàn giao thông',
        content: 'AEye giám sát tình trạng mất tập trung và buồn ngủ của lái xe, cung cấp cảnh báo kịp thời để giúp lái xe duy trì trạng thái tập trung và giảm nguy cơ tai nạn giao thông.',
        delay: 0.1
    },
    {
        image: '/image/2.png',
        title: 'Giảm rủi ro tai nạn',
        content: 'Cảnh báo lái xe khi phát hiện tình trạng mất tập trung và buồn ngủ. Điều này giúp ngăn chặn các tình huống nguy hiểm và giữ cho lái xe và hành khách an toàn trên đường.',
        delay: 0.3
    },
    {
        image: '/image/3.png',
        title: 'Cải thiện hiệu suất lái xe',
        content: 'AEye không chỉ giúp ngăn chặn tai nạn giao thông, mà còn cung cấp thông tin liên quan đến thói quen lái xe và hiệu suất lái xe của người dùng.',
        delay: 0.5
    },
    {
        image: '/image/2.png',
        title: 'Hỗ trợ khẩn cấp',
        content: 'AEye có khả năng gửi cảnh báo và yêu cầu giúp đỡ trong trường hợp khẩn cấp. Trong tình huống cần sự can thiệp nhanh chóng, hệ thống này có thể thông báo cho gia đình, cảnh sát hoặc bệnh viện để đảm bảo sự hỗ trợ kịp thời và cứu trợ.',
        delay: 0.1
    },
    {
        image: '/image/3.png',
        title: 'Ghi lại dữ liệu lái xe',
        content: 'AEye có khả năng ghi lại dữ liệu về thói quen lái xe và các sự kiện xảy ra trong quá trình lái xe. ',
        delay: 0.3
    },
    {
        image: '/image/1.png',
        title: 'Tăng cường trải nghiệm người dùng',
        content: 'AEye mang lại trải nghiệm lái xe an toàn và thuận tiện hơn cho người dùng. Với khả năng cảnh báo và hỗ trợ trong trường hợp khẩn cấp, người dùng có thể lái xe một cách tự tin và yên tâm hơn.',
        delay: 0.5
    },
]

const features = [
    {
        text: 'Giám sát mất tập trung và buồn ngủ',
    },
    {
        text: 'Cảnh báo và hỗ trợ kịp thời',
    },
    {
        text: 'Ghi lại dữ liệu lái xe',
    },
    {
        text: 'Tích hợp với hệ thống xe và ứng dụng di động',
    },
    {
        text: 'Tự động thực hiện cuộc gọi khẩn cấp.',
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
