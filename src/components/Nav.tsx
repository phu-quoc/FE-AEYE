"use client";


import { links } from "@/lib/data";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useCookies } from 'react-cookie';

export default function Nav({ containerStyles, linkStyles, underlineStyles }: any) {
    const [activeSection, setActiveSection] = useState('#intro');
    const [cookies, setCookies] = useCookies(['user']);
    const [user, setUser] = useState<any>();

    function logout() {
        setCookies("user", "");
        setInterval(() => {
            window.location.reload();
        }, 2000)
    }

    useEffect(() => {
        setUser(cookies.user);
    }, []);
    return (
        <nav className={`${containerStyles}`}>
            <Link href='#intro' onClick={() => setActiveSection('#intro')}>
                <p className={`${linkStyles}`}>Giới thiệu</p>
            </Link>
            <Link href='#feature' onClick={() => setActiveSection('#feature')}>
                <p className={`${linkStyles}`}>Tính năng</p>
            </Link>
            <Link href='#benefit' onClick={() => setActiveSection('#benefit')}>
                <p className={`${linkStyles}`}>Lợi ích</p>
            </Link>
            <Link href='#guide' onClick={() => setActiveSection('#guide')}>
                <p className={`${linkStyles}`}>Hướng dẫn</p>
            </Link>
            <Link href='#contact' onClick={() => setActiveSection('#contact')}>
                <p className={`${linkStyles}`}>Liên hệ</p>
            </Link>
            <Link href='blogs' onClick={() => setActiveSection('blogs')}>
                <p className={`${linkStyles}`}>Blog</p>
            </Link>
            {user &&
                <Link href='conversion' onClick={() => setActiveSection('conversion')}>
                    <p className={`${linkStyles}`}>Chuyển đổi</p>
                </Link>
            }
            {user ?
                <button onClick={logout}>
                    <p className={`${linkStyles}`}>Đăng xuất</p>
                </button>
                :
                <Link href={'sign-in'}
                    onClick={() => setActiveSection('sign-in')}>
                    <p className={`${linkStyles}`}>Đăng nhập</p>
                </Link>
            }
        </nav>
    )
}
