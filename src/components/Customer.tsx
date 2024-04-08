"use client";

import Image from "next/image";
import {motion} from 'framer-motion';
import {fadeIn} from "../../variants";

const customers = [
    {
        image: '/image/customer_1.png',
    },
    {
        image: '/image/customer_2.png',
    },
    {
        image: '/image/customer_3.png',
    },
    {
        image: '/image/customer_4.png',
    },
    {
        image: '/image/customer_5.png',
    },
    {
        image: '/image/customer_6.png',
    },
    {
        image: '/image/customer_7.png',
    },
    {
        image: '/image/customer_8.png',
    },
    {
        image: '/image/customer_9.png',
    },
    {
        image: '/image/customer_10.png',
    },
    {
        image: '/image/customer_11.png',
    },
    {
        image: '/image/customer_12.png',
    },
    {
        image: '/image/customer_13.png',
    },
    {
        image: '/image/customer_14.png',
    },
    {
        image: '/image/customer_15.png',
    },
    {
        image: '/image/customer_16.png',
    },
]
export default function Customer() {
    return (
        <motion.div
            variants={fadeIn('up', 0.1)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0}}
            className='py-12 xl:pt-16 bg-gray-200'>
            <motion.div
                variants={fadeIn('up', 0.1)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once: false, amount: 0}}
                className='container mx-auto'>
                <p className="text-[#42495b] xl:text-[40px] text-3xl font-bold text-center pb-14">KHÁCH HÀNG CỦA
                    CHÚNG TÔI</p>
                <motion.div
                    variants={fadeIn('up', 0.1)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{once: false, amount: 0}}
                    className='grid grid-cols-4 lg:grid-cols-8 xl:grid-cols-8 gap-y-3 gap-x-3 place-items-center'>
                    {customers.map((cus, index) => {
                        return (
                            <Image
                                key={index}
                                src={cus.image} alt="picture" width={100}
                                height={100}/>
                        )
                    })}
                </motion.div>
            </motion.div>
        </motion.div>
    )
}
