import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import DarkmodeToggle from '../components/DarkmodeToggle'

export default function Layout({ children }) {
    return <>
        <Navbar />
        <div className="overflow-hidden">
            <Outlet>
                {children}
            </Outlet>
        </div>
        {/* <Footer /> */}
        <div className="fixed lg:top-10 lg:right-14 bottom-5 right-5 z-50">
            <DarkmodeToggle />
        </div>
    </>
}
