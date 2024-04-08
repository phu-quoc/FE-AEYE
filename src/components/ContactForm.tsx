"use client";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {motion} from 'framer-motion';
import {fadeIn} from "../../variants";

export default function ContactForm() {
    return (
        <motion.div
            variants={fadeIn('left', 0.1)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.4}}
            className='w-full bg-white shadow-lg max-h-max flex flex-col border border-outline rounded-[20px] p-10'>
            <div className='mb-[20px]'>
                <Label htmlFor='name'>Họ và tên</Label>
                <div>
                    <Input id='name'/>
                </div>
            </div>
            <div className='mb-[20px]'>
                <Label htmlFor='phone'>Số điện thoại</Label>
                <div>
                    <Input id='phone'/>
                </div>
            </div>
            <div className='mb-[20px]'>
                <Label htmlFor='request'>Yêu cầu</Label>
                <div>
                    <Input id='request'/>
                </div>
            </div>
            <Button size='lg'>
                Submit
            </Button>
        </motion.div>
    )
}
