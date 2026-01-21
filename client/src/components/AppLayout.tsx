import React from 'react'
import { Outlet } from "react-router"
import Header from './Header'
const AppLayout = () => {
    return (
        <div>
            <Header />
            <Outlet />
            {/* <ButtomNav /> */}
        </div>
    )
}

export default AppLayout