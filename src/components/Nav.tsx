"use client";


import {links} from "@/lib/data";
import Link from "next/link";
import {useState} from "react";

export default function Nav({containerStyles, linkStyles, underlineStyles}: any) {
    const [activeSection, setActiveSection] = useState('#intro');
    return (
        <nav className={`${containerStyles}`}>
            {links.map((link, index) => {
                return (
                    <Link href={link.href} key={index}
                          onClick={() => setActiveSection(link.href)}>
                        <p className={`${linkStyles}`}>{link.name}</p>
                    </Link>
                );
            })}
        </nav>
    )
}
