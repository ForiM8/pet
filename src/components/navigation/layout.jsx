import React from "react";
import { Outlet } from "react-router-dom";

import { Footer } from "../../pages/footer/footer";
import { Header } from "../../pages/header/header";


export const Layout = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer/>
        </div>
    );
};


