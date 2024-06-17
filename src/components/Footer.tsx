"use client";

import Link from "next/link";
import {BookUser, Home, Mail, Phone} from "lucide-react";

export default function Footer() {
    return (
        <footer
            className='py-6 xl:pt-12 bg-gray-200'>
            <div className='container mx-auto'>
                <div className='flex flex-col justify-between text-center xl:flex-row place-items-center'>
                    <div className='xl:w-[300px] mb-8 xl:mb-0 text-[#8A3EAF] font-semibold '>
                        <p>CÔNG TY TNHH CÔNG NGHỆ VÀ GIẢI PHÁP</p>
                        <p>AEYE</p>
                    </div>
                    <div className='flex-1 grid grid-cols-1 xl:grid-cols-3 gap-[50px] mb-8'>
                        <div>
                            <h4 className='font-semibold mb-5'>DỊCH VỤ</h4>
                            <ul className='flex flex-col gap-y-6 text-sm'>
                                <li>
                                    <Link href='/' className='hover:text-[#8A3EAF]'>
                                        Returns & Shipping Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/' className='hover:text-[#8A3EAF]'>
                                        Terms of Use
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/' className='hover:text-[#8A3EAF]'>
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/' className='hover:text-[#8A3EAF]'>
                                        Contact Us
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div><h4 className='font-semibold mb-5'>QUY ĐỊNH CHUNG</h4>
                            <ul className='flex flex-col gap-y-6 text-sm'>
                                <li>
                                    <Link href='/terms-of-contract' className='hover:text-[#8A3EAF]'>
                                        Điều khoản hợp đồng
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/introduction' className='hover:text-[#8A3EAF]'>
                                        Giới thiệu công ty
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/privacy-policy' className='hover:text-[#8A3EAF]'>
                                        Chính sách riêng tư
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/payment-process' className='hover:text-[#8A3EAF]'>
                                        Quy trình thanh toán
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div><h4 className='font-semibold mb-5'>LIÊN HỆ</h4>
                            <ul className='flex flex-col gap-y-6 text-sm'>
                                <li className='flex flex-row justify-center'>
                                    <Home size={18} className='mr-2'/>
                                    Địa chỉ: Ngũ Hành Sơn, Đà Nẵng
                                </li>
                                <li className='flex flex-row justify-center'>
                                    <Mail size={18} className='mr-2'/>
                                    Hỗ trợ kỹ thuật / khách hàng - support@aeye.com
                                </li>
                                <li className='flex flex-row justify-center'>
                                    <Phone size={18} className='mr-2'/>
                                    0374593373
                                </li>
                                <li className='flex flex-row justify-center'>
                                    <BookUser size={18} className='mr-2'/>
                                    0777244493
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='py-4'>
                    <p className='text-center text-sm'>&copy; 2024 Copyright: Aeye.com</p>
                </div>
            </div>
        </footer>
    )
}
