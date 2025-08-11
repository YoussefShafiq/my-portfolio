import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }) {
    return <>
        <Navbar />
        <div className="pt-20 overflow-hidden">
            <Outlet>
                {children}
            </Outlet>
        </div>
        {/* <Footer /> */}
    </>
}
