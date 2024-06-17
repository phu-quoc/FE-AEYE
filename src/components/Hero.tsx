"use client";
import {RiArrowDownSLine} from "react-icons/ri";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {Download, Send} from "lucide-react";
import Image from "next/image";
import home from "../../public/image/02-1-2.png"
import {fadeIn} from "../../variants";
import {motion} from 'framer-motion';


export default function Hero() {
    return (
        <section id='home' className='py-12 xl:py-24 h-[92vh] xl:pt-28 bg-gradient-to-r from-[#8A3EAF] to-[#552CC1]'>
            <div className='container mx-auto'>
                <div className='flex justify-between gap-x-8'>
                    <div
                        className='flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center text-white'>
                        <motion.h1
                            variants={fadeIn('down', 0.1)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{once: false, amount: 0}}
                            className='text-6xl xl:text-[72px] xl:leading-[80px] tracking-[-2px] font-bold mt-24 xl:mt-0'>AEYE
                        </motion.h1>
                        <motion.p
                            variants={fadeIn('down', 0.2)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{once: false, amount: 0}}
                            className='xl:text-2xl my-8 max-w-[600px] mx-auto xl:mx-0'>
                            Thiết bị AI cảnh báo và ngăn chặn tình trạng ngủ gật
                        </motion.p>
                        <motion.div
                            variants={fadeIn('down', 0.4)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{once: false, amount: 0.4}}
                            className='flex flex-col gap-y-3 md:flex-row xl:my-12 gap-x-3 mx-auto my-24'>
                            <Link href='#contact'>
                                <Button className='gap-x-2'>Nhận tư vấn <Send size={18}/> </Button>
                            </Link>
                            <Link href='contact'>
                                <Button variant='secondary' className='gap-x-2'>Dùng thử ngay <Download size={18}/>
                                </Button>
                            </Link>
                        </motion.div>
                    </div>
                    <motion.div
                        variants={fadeIn('up', 0.1)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{once: false, amount: 0.4}} className='hidden md:flex xl:flex relative'>
                        <div className="bg-orange-200 rounded-full">
                            <Image className="w-[500px] h-[500px]" src={home} alt="picture"/>
                        </div>
                    </motion.div>
                </div>
                <div className='hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce'>
                    <Link href='#intro'>
                        <RiArrowDownSLine className='text-3xl text-white'/>
                    </Link>
                </div>
            </div>
        </section>
    )
}
