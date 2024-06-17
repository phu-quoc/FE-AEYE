"use client";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {Send} from "lucide-react";
import {motion} from 'framer-motion';
import {fadeIn} from "../../variants";


export default function Introduction() {
    return (
        <section id='intro' className='py-12 xl:pt-28'>
            <div className='container mx-auto'>
                <div className='flex flex-col items-center gap-x-8'>
                    <iframe
                        className="w-full h-[200px] xl:h-[400px] max-w-[700px]"
                        src="https://youtu.be/mQx6iJDeKmA"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    />
                    <motion.p
                        variants={fadeIn('up', 0.1)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{once: false, amount: 0}}
                        className="text-[#8A3EAF] text-3xl xl:text-[40px] xl:leading-[80px] tracking-[-2px] font-bold mt-12 xl:mt-8">Tại
                        sao chọn chúng tôi?
                    </motion.p>
                    <motion.p
                        variants={fadeIn('up', 0.2)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{once: false, amount: 0}}
                        className="xl:text-2xl my-8 mx-auto xl:mx-0 text-center">AEye giúp giảm nguy cơ tai nạn giao
                        thông bằng cách giám sát tình trạng mất tập trung và buồn ngủ của lái xe. Sản phẩm của chúng tôi
                        cung cấp những gợi ý và cảnh báo kịp thời để lái xe có thể giải quyết tình trạng này, đảm bảo an
                        toàn cho lái xe và hành khách.
                    </motion.p>
                    <motion.div
                        variants={fadeIn('up', 0.4)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{once: false, amount: 0}}>
                        <Link href='#contact'>
                            <Button className='gap-x-2'>Nhận tư vấn <Send size={18}/> </Button>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
