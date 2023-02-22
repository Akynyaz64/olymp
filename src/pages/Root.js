import React from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";

import { DataProvider } from "../context/authContext";
import Navbar from "../components/UI/Navbar";
import Footer from "../components/UI/Footer";

function RootLayout() {
    return (
        <DataProvider>
            <ScrollRestoration />
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </DataProvider>
    );
}

export default RootLayout;
