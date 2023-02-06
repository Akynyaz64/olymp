import React from "react";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";

import "./Home.css";

function HomePage() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
    };

    return (
        <>
            <div className="banner">
                <div className="container">
                    <div className="banner-content text-center">
                        <h1 className="banner-title">
                            Ýaşlaryň arasynda ylmy işler boýunça Halkara
                            bäsleşigi
                        </h1>
                        <div className="banner-text mb-35">
                            Ylymda we bilimde halypa-şägirtlik ýörelgelerini
                            ösdürmekde, döwrebap tehnologiýalardan oňat baş
                            çykarýan, başarjaň, intellektual taýdan ösen
                            hünärmenleri taýýarlamakda ýokary netijeleri
                            gazanmak maksady bilen ýaşlaryň arasynda ylmy işler
                            boýunça Halkara bäsleşigi yglan edilýär.
                        </div>
                        <div className="btn-part p-0">
                            <NavLink to="/login" className="fw-bold">
                                Ýüz tutmak
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about pb-100 md-pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 order-last">
                            <div className="notice-bord">
                                <h4 className="title">Seneler</h4>
                                <ul>
                                    <li>
                                        <div className="date">
                                            <span>01</span>Aprel
                                        </div>
                                        <div className="text">
                                            Halkara bäsleşige taslamalaryň kabul
                                            ediş wagtynyň başlangyjy
                                        </div>
                                    </li>
                                    <li>
                                        <div className="date">
                                            <span>01</span>Awgust
                                        </div>
                                        <div className="text">
                                            Halkara bäsleşige taslamalaryň kabul
                                            ediş wagtynyň soňy
                                        </div>
                                    </li>
                                    <li>
                                        <div className="date">
                                            <span>01</span>Sentýabr
                                        </div>
                                        <div className="text">
                                            Halkara bäsleşigiň birinji
                                            tapgyrynyň başlangyjy
                                        </div>
                                    </li>
                                    <li>
                                        <div className="date">
                                            <span>01</span>Noýabr
                                        </div>
                                        <div className="text">
                                            Halkara bäsleşigiň ikinji tapgyrynyň
                                            başlangyjy
                                        </div>
                                    </li>
                                    <li>
                                        <div className="date">
                                            <span>12</span>Dekabr
                                        </div>
                                        <div className="text">
                                            Halkara bäsleşigiň ýeňijileriniň
                                            yglan edilmegi
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-8 pr-50 md-pr-15">
                            <div className="about-part me-0 me-lg-4">
                                <div className="sec-title mb-40">
                                    <div className="sub-title primary">
                                        Bäsleşik barada
                                    </div>
                                    <h2 className="title">
                                        Ýaşlaryň arasynda ylmy işler boýunça
                                        Halkara bäsleşigi
                                    </h2>
                                    <div className="desc">
                                        Türkmenistanda ylmyň we tehnologiýalaryň
                                        ileri tutulýan ugurlaryna laýyklykda
                                        halkara derejede ýaş alymlar tarapyndan
                                        täze ylmy pikirleriň üsti bilen
                                        senagat-innowasion çözgütleriň,
                                        maglumat-tehnologiki we
                                        tejribe-konstruktorçylyk işläp
                                        taýýarlamalarynyň giňden
                                        ornaşdyrylmagyny üpjün etmek, şeýle hem
                                        ylymda we bilimde halypa-şägirtlik
                                        ýörelgelerini ösdürmekde, döwrebap
                                        tehnologiýalardan oňat baş çykarýan,
                                        başarjaň, intellektual taýdan ösen
                                        hünärmenleri taýýarlamakda ýokary
                                        netijeleri gazanmak maksady bilen
                                        ýaşlaryň arasynda ylmy işler boýunça
                                        Halkara bäsleşigi yglan edilýär.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="categories gray-bg pt-94 md-pt-64 md-pb-40">
                <div className="container">
                    <div className="row md-mb-30">
                        <div className="col-md-6 sm-mb-30">
                            <div className="sec-title">
                                <div className="sub-title primary">Ugurlar</div>
                                <h2 className="title mb-0">
                                    Bäsleşigiň ugurlary
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6 mb-30">
                            <a className="categories-item" href="index2.html#">
                                <div className="icon-part">
                                    <img
                                        src="assets/images/categories/icons/1.png"
                                        alt=""
                                    />
                                </div>
                                <div className="content-part">
                                    <h4 className="title">
                                        Nanotehnologiýalar, himiki
                                        tehnologiýalar, täze materiallary
                                        öwrenmek we energetika
                                    </h4>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-30">
                            <a className="categories-item" href="index2.html#">
                                <div className="icon-part">
                                    <img
                                        src="assets/images/categories/icons/2.png"
                                        alt=""
                                    />
                                </div>
                                <div className="content-part">
                                    <h4 className="title">
                                        Biotehnologiýa, molekulýar biologiýa,
                                        oba hojalygy, ekologiýa we genetika
                                    </h4>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-30">
                            <a className="categories-item" href="index2.html#">
                                <div className="icon-part">
                                    <img
                                        src="assets/images/categories/icons/3.png"
                                        alt=""
                                    />
                                </div>
                                <div className="content-part">
                                    <h4 className="title">
                                        Maglumat we aragatnaşyk ulgamlary,
                                        kompýuter tehnologiýalary
                                    </h4>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="partner pt-100 pb-100 md-pt-70 md-pb-70 gray-bg">
                <div className="container">
                    <div className="rs-carousel owl-carousel">
                        <Slider {...settings}>
                            <div className="partner-item">
                                <a href="index3.html#">
                                    <img
                                        src="assets/images/partner/1.png"
                                        alt=""
                                    />
                                    A
                                </a>
                            </div>
                            <div className="partner-item">
                                <a href="index3.html#">
                                    <img
                                        src="assets/images/partner/2.png"
                                        alt=""
                                    />
                                    B
                                </a>
                            </div>
                            <div className="partner-item">
                                <a href="index3.html#">
                                    <img
                                        src="assets/images/partner/3.png"
                                        alt=""
                                    />
                                    C
                                </a>
                            </div>
                            <div className="partner-item">
                                <a href="index3.html#">
                                    <img
                                        src="assets/images/partner/4.png"
                                        alt=""
                                    />
                                    D
                                </a>
                            </div>
                            <div className="partner-item">
                                <a href="index3.html#">
                                    <img
                                        src="assets/images/partner/5.png"
                                        alt=""
                                    />
                                    E
                                </a>
                            </div>
                            <div className="partner-item">
                                <a href="index3.html#">
                                    <img
                                        src="assets/images/partner/6.png"
                                        alt=""
                                    />
                                    F
                                </a>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
            <h1>My home page</h1>
            <h1>My home page</h1>
        </>
    );
}

export default HomePage;
