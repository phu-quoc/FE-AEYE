"use client";

import {fadeIn} from "../../variants";
import {motion} from 'framer-motion';

export default function Guide() {
    return (
        <section id='guide' className='py-12 xl:pt-16'>
            <div className='container mx-auto'>
                <motion.div
                    variants={fadeIn('up', 0.1)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{once: false, amount: 0}} className='flex flex-col items-center gap-x-8'>
                    <p className="text-[#42495b] xl:text-[40px] text-3xl font-bold text-center pb-14">HƯỚNG DẪN</p>
                    <iframe
                        className="w-full h-[200px] xl:h-[400px] max-w-[700px]"
                        src="https://www.youtube.com/embed/mQx6iJDeKmA"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    />
                </motion.div>
            </div>
        </section>
    )
}
