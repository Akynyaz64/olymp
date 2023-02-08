import React from "react";

import Navbar from "../components/UI/Navbar";
import Footer from "../components/UI/Footer";

function ErrorPage() {
    return (
        <>
            <Navbar />
            <main>
                <h1>Bagyşlaň!</h1>
                <p>Gözleýän sahypaňyz tapylmady.</p>
            </main>
            <Footer />
        </>
    );
}

export default ErrorPage;
