import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookiesProvider from './providers/CookiesProvider'

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "AEYE",
    description: "Safe drive with nice eyes",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <html lang="en" className='!scroll-smooth'>
        <body className="min-h-screen font-sans bg-white">
        <CookiesProvider>
            <Header/>
            {children}
            <Footer/>
        </CookiesProvider>
        </body>
        </html>
    );
}
