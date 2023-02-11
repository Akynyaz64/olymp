import React, { useEffect } from "react";
import { Outlet, useLoaderData } from "react-router-dom";

import Navbar from "../components/UI/Navbar";
import Footer from "../components/UI/Footer";

function RootLayout() {
    const token = useLoaderData();

    useEffect(() => {
      if (!token) {
        return;
      }
    }, [token]);
    


    return (
        <>
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
}

export default RootLayout;
