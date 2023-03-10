import React from "react";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";

import "./Home.css";

function HomePage() {
    const settings = {
        arrows: false,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        swipeToSlide: true,
        pauseOnHover: true,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <>
            <div className="banner">
                <div className="container">
                    <div className="banner-content text-center">
                        <h1 className="banner-title">Ýaşlaryň arasynda ylmy işler boýunça Halkara bäsleşigi</h1>
                        <div className="banner-text mb-35">Ylymda we bilimde halypa-şägirtlik ýörelgelerini ösdürmekde, döwrebap tehnologiýalardan oňat baş çykarýan, başarjaň, intellektual taýdan ösen hünärmenleri taýýarlamakda ýokary netijeleri gazanmak maksady bilen ýaşlaryň arasynda ylmy işler boýunça Halkara bäsleşigi yglan edilýär.</div>
                        <div className="btn-part p-0">
                            <NavLink to="/profile" className="fw-bold">
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
                                        <div className="text">Halkara bäsleşige taslamalaryň kabul ediş wagtynyň başlangyjy</div>
                                    </li>
                                    <li>
                                        <div className="date">
                                            <span>01</span>Awgust
                                        </div>
                                        <div className="text">Halkara bäsleşige taslamalaryň kabul ediş wagtynyň soňy</div>
                                    </li>
                                    <li>
                                        <div className="date">
                                            <span>01</span>Sentýabr
                                        </div>
                                        <div className="text">Halkara bäsleşigiň birinji tapgyrynyň başlangyjy</div>
                                    </li>
                                    <li>
                                        <div className="date">
                                            <span>01</span>Noýabr
                                        </div>
                                        <div className="text">Halkara bäsleşigiň ikinji tapgyrynyň başlangyjy</div>
                                    </li>
                                    <li>
                                        <div className="date">
                                            <span>12</span>Dekabr
                                        </div>
                                        <div className="text">Halkara bäsleşigiň ýeňijileriniň yglan edilmegi</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-8 pr-50 md-pr-15">
                            <div className="about-part me-0 me-lg-4">
                                <div className="sec-title mb-40">
                                    <div className="sub-title primary">Bäsleşik barada</div>
                                    <h2 className="title">Ýaşlaryň arasynda ylmy işler boýunça Halkara bäsleşigi</h2>
                                    <div className="desc">Türkmenistanda ylmyň we tehnologiýalaryň ileri tutulýan ugurlaryna laýyklykda halkara derejede ýaş alymlar tarapyndan täze ylmy pikirleriň üsti bilen senagat-innowasion çözgütleriň, maglumat-tehnologiki we tejribe-konstruktorçylyk işläp taýýarlamalarynyň giňden ornaşdyrylmagyny üpjün etmek, şeýle hem ylymda we bilimde halypa-şägirtlik ýörelgelerini ösdürmekde, döwrebap tehnologiýalardan oňat baş çykarýan, başarjaň, intellektual taýdan ösen hünärmenleri taýýarlamakda ýokary netijeleri gazanmak maksady bilen ýaşlaryň arasynda ylmy işler boýunça Halkara bäsleşigi yglan edilýär.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="categories gray-bg">
                <div className="container">
                    <div className="row md-mb-30">
                        <div className="col-md-6 sm-mb-30">
                            <div className="sec-title">
                                <div className="sub-title primary">Ugurlar</div>
                                <h2 className="title mb-0">Bäsleşigiň ugurlary</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6 mb-30">
                            <a className="categories-item" href="index2.html#">
                                <div className="icon-part">
                                    <img src="assets/images/categories/icons/1.png" alt="" />
                                </div>
                                <div className="content-part">
                                    <h4 className="title">Nanotehnologiýalar, himiki tehnologiýalar, täze materiallary öwrenmek we energetika</h4>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-30">
                            <a className="categories-item" href="index2.html#">
                                <div className="icon-part">
                                    <img src="assets/images/categories/icons/2.png" alt="" />
                                </div>
                                <div className="content-part">
                                    <h4 className="title">Biotehnologiýa, molekulýar biologiýa, oba hojalygy, ekologiýa we genetika</h4>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-30">
                            <a className="categories-item" href="index2.html#">
                                <div className="icon-part">
                                    <img src="assets/images/categories/icons/3.png" alt="" />
                                </div>
                                <div className="content-part">
                                    <h4 className="title">Maglumat we aragatnaşyk ulgamlary, kompýuter tehnologiýalary</h4>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="faq-part style1 pt-100 pb-100 md-pt-70 md-pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 padding-0">
                            <div className=" main-part">
                                <div className="title mb-40 md-mb-15">
                                    <h2 className="text-part">Ýaryşa gatnaşmagyň şertleri</h2>
                                </div>
                                <div className="faq-content">
                                    <div id="accordion" className="accordion">
                                        <div className="row">
                                            <div className="col-lg-6 col-12">
                                                <div className="card">
                                                    <div className="card-header">
                                                        <div className="card-link">What are the requirements ?</div>
                                                    </div>
                                                </div>
                                                <div className="card">
                                                    <div className="card-header">
                                                        <div className="card-link">What are the requirements ?</div>
                                                    </div>
                                                </div>
                                                <div className="card">
                                                    <div className="card-header">
                                                        <div className="card-link">What are the requirements ?</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-12">
                                                <div className="card">
                                                    <div className="card-header">
                                                        <div className="card-link">What are the requirements ?</div>
                                                    </div>
                                                </div>
                                                <div className="card">
                                                    <div className="card-header">
                                                        <div className="card-link">What are the requirements ?</div>
                                                    </div>
                                                </div>
                                                <div className="card">
                                                    <div className="card-header">
                                                        <div className="card-link">What are the requirements ?</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="rs-featured-courses" className="rs-featured-courses pt-100 pb-100 md-pt-70 md-pb-70">
                <div className="container">
                    <div className="sec-title2 text-center">
                        <h2 className="title mb-30">Baýraklar</h2>
                    </div>
                    <div className="rs-carousel row">
                        <div className="courses-item col-lg-4">
                            <div className="px-4">
                                <div className="img-part">
                                    <img src="https://www.edudwar.com/wp-content/uploads/2021/07/awards.jpg" alt="" />
                                </div>
                                <div className="content-part">
                                    <span>
                                        <a className="categories bg1" href="index8.html#">
                                            Web Development
                                        </a>
                                    </span>
                                    <h3 className="title">
                                        <a href="https://keenitsolutions.com/products/html/educavo/course-singe.html">Basic Mathemetics Studies and Accounting</a>
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="courses-item col-lg-4">
                            <div className="px-4">
                                <div className="img-part">
                                    <img src="https://www.edudwar.com/wp-content/uploads/2021/07/awards.jpg" alt="" />
                                </div>
                                <div className="content-part">
                                    <span>
                                        <a className="categories bg2" href="index8.html#">
                                            Web Development
                                        </a>
                                    </span>
                                    <h3 className="title">
                                        <a href="course-single.html">Basic Mathemetics Studies and Accounting</a>
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="courses-item col-lg-4">
                            <div className="px-4">
                                <div className="img-part">
                                    <img src="https://www.edudwar.com/wp-content/uploads/2021/07/awards.jpg" alt="" />
                                </div>
                                <div className="content-part">
                                    <span>
                                        <a className="categories bg3" href="index8.html#">
                                            Web Development
                                        </a>
                                    </span>
                                    <h3 className="title">
                                        <a href="course-single.html">Basic Mathemetics Studies and Accounting</a>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="partner">
                <div className="container">
                    <div className="sec-title">
                        <div className="sub-title">Hyzmatdaşlar</div>
                        <h2 className="title mb-0">Biziň hyzmatdaşlarymyz</h2>
                    </div>
                    <div className="rs-carousel owl-carousel">
                        <Slider {...settings}>
                            <div className="partner-item">
                                <img src="https://www.mfa.gov.tm/img/dim_logo.png" alt="" />
                            </div>
                            <div className="partner-item">
                                <img src="https://education.gov.tm/img/tm_gerb.svg" alt="" />
                            </div>
                            <div className="partner-item">
                                <img src="https://yashlar.gov.tm/source/img/png/logo.png" alt="" />
                            </div>
                            <div className="partner-item">
                                <img src="https://www.mfa.gov.tm/img/dim_logo.png" alt="" />
                            </div>
                            <div className="partner-item">
                                <img src="https://education.gov.tm/img/tm_gerb.svg" alt="" />
                            </div>
                            <div className="partner-item">
                                <img src="https://yashlar.gov.tm/source/img/png/logo.png" alt="" />
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
            <div className="cta">
                <div className="cta-img">
                    <img src="https://as1.ftcdn.net/v2/jpg/03/65/17/50/1000_F_365175029_hPmiZIgVMYdZumpjnmqN3FgbESLXrM4O.jpg" alt="" />
                </div>
                <div className="cta-content text-center">
                    <div className="sec-title">
                        <h2 className="title">Bäsleşige hasaba alyş açyk!</h2>
                        <div className="desc">Ýaşlaryň arasynda ylmy işler boýunça geçirilýän Halkara bäsleşigine gatnaşmak üçin aşaky düwmä basyň!</div>
                    </div>
                    <div className="btn-part p-0">
                        <NavLink to="/profile" className="fw-bold">
                            Ýüz tutmak
                        </NavLink>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomePage;
