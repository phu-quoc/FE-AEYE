'use client'
import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import Feature from "@/components/Feature";
import Benefit from "@/components/Benefit";
import Guide from "@/components/Guide";
import Customer from "@/components/Customer";
import Contact from "@/components/Contact";
import { useCookies } from 'react-cookie';

export default function Home() {
    const [cookies, setCookies] = useCookies(['user']);
    return (
        <main>
            <Hero/>
            <Introduction/>
            <Feature/>
            <Benefit/>
            <Guide/>
            <Customer/>
            <Contact/>
        </main>
    );
}
