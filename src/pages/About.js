import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import "./About.css";

const AboutPage = () => {
    return (
        <div className="main-content">
            <div className="breadcrumbs breadcrumbs-overlay">
                <div className="breadcrumbs-img">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6dRDLVoNW3D6AlXgsfjNkC_LqYARCc2q15PbmMGlIfiNvJFWl86sD2GAEqZEnG7XWBdk&usqp=CAU"
                        alt="Breadcrumb"
                    />
                </div>
                <div className="breadcrumbs-text white-color">
                    <h1 className="page-title white-color">Bäsleşik barada</h1>
                    <ul>
                        <li>
                            <NavLink to="/" className="active" end>
                                Baş sahypa
                            </NavLink>
                        </li>
                        <li>Bäsleşik barada</li>
                    </ul>
                </div>
            </div>

            <div className="inner-blog">
                <div className="container">
                    <div className="blog-deatails">
                        {/* <div className="bs-img">
                            <a href="blog-single.html#">
                                <img
                                    src="assets/images/blog/inner/1.jpg"
                                    alt=""
                                />
                            </a>
                        </div> */}
                        <div className="blog-full">
                            <h2 className="title text-center mt-4 mb-40">
                                Ýaşlaryň arasynda ylmy işler boýunça Halkara
                                bäsleşigi
                            </h2>
                            <div className="blog-desc">
                                <p>
                                    Garaşsyz, hemişelik Bitarap Türkmenistan
                                    döwletimizde hormatly Prezidentimiziň
                                    parasatly baştutanlygynda ylmyň we
                                    tehnologiýalaryň ösüşine, halkymyzyň
                                    aň-bilim derejesiniň ýokarlandyrylmagyna,
                                    ylmyň, tehnikanyň we önümçiligiň
                                    bitewüliginiň üpjün edilmegine aýratyn
                                    ähmiýet berilýär.
                                </p>
                            </div>
                            <div className="blog-desc mb-40">
                                <p>
                                    Täze taryhy döwürde Türkmenistanyň ykdysady
                                    we durmuş ösüşi babatda dünýäniň iň ösen
                                    döwletlerine mahsus bolan sepgitlere
                                    çykmagyna gönükdirilen giň gerimli
                                    maksatnamalar we meýilnamalar düýpli ylmy
                                    esaslara daýanýar. Nebit-gaz, oba hojalyk,
                                    gurluşyk, energetika, dokma, ykdysadyýet,
                                    maliýe, bank toplumlaryna, söwda, ulag,
                                    aragatnaşyk, himiýa, medeniýet, ylym, bilim,
                                    saglygy goraýyş, sport, syýahatçylyk
                                    ulgamlaryna ylmyň we tehnologiýalaryň
                                    öňdebaryjy tejribeleri we gazananlary
                                    ornaşdyrylýar.
                                </p>
                            </div>
                            <div className="blog-desc mb-40">
                                <p>
                                    Türkmen ýaşlarynyň halkara hyzmatdaşlyk
                                    Strategiýasynyň baş maksadyna laýyklykda
                                    ýurdumyzyň ýaşlarynyň daşary ýurtlaryň
                                    ýaşlary bilen gatnaşyklaryny ösdürmek
                                    arkaly, halkara medeni, ykdysady, ylym-
                                    bilim babatda hereketlere has işjeň
                                    gatnaşmaklaryny üpjün etmek göz öňünde
                                    tutulýar. Bu ugurda täze, innowasion
                                    çemeleşmeler zerur.
                                </p>
                            </div>
                            <div className="blog-desc mb-40">
                                <p>
                                    Şeýlelik bilen, Türkmenistanda ylmyň we
                                    tehnologiýalaryň ileri tutulýan ugurlaryna
                                    laýyklykda halkara derejede ýaş alymlar
                                    tarapyndan täze ylmy pikirleriň üsti bilen
                                    senagat-innowasion çözgütleriň, maglumat-
                                    tehnologiki we tejribe-konstruktorçylyk
                                    işläp taýýarlamalarynyň giňden
                                    ornaşdyrylmagyny üpjün etmek, şeýle hem
                                    ylymda we bilimde halypa- şägirtlik
                                    ýörelgelerini ösdürmekde, döwrebap
                                    tehnologiýalardan oňat baş çykarýan,
                                    başarjaň, intellektual taýdan ösen
                                    hünärmenleri taýýarlamakda ýokary netijeleri
                                    gazanmak maksady bilen{" "}
                                    <b>
                                        ýaşlaryň arasynda ylmy işler boýunça
                                        Halkara bäsleşigi
                                    </b>{" "}
                                    yglan edilýär.
                                </p>
                            </div>
                            <blockquote>
                                <p>
                                    Globally incubate standards compliant
                                    channels before scalable benefits. Quickly
                                    disseminate superior deliverables whereas
                                    web-enabled applications.
                                </p>
                            </blockquote>
                            <ul className="unorder-list mb-20">
                                <li>
                                    <FontAwesomeIcon icon={faChevronRight} />{" "}
                                    New Construction Benefit of Service
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faChevronRight} />{" "}
                                    Renovations Benefit of Service
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faChevronRight} />{" "}
                                    Historic Renovations and Restorations
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faChevronRight} />{" "}
                                    Additions Benefit of Service
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faChevronRight} />{" "}
                                    Rebuilding from fire or water damage
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
