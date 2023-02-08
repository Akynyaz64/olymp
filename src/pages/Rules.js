import React from "react";
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronRight} from "@fortawesome/free-solid-svg-icons";

import "./About.css";

const RulesPage = () => {
    return (
        <div className="main-content">
            <div className="breadcrumbs breadcrumbs-overlay">
                <div className="breadcrumbs-img">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6dRDLVoNW3D6AlXgsfjNkC_LqYARCc2q15PbmMGlIfiNvJFWl86sD2GAEqZEnG7XWBdk&usqp=CAU" alt="Breadcrumb" />
                </div>
                <div className="breadcrumbs-text white-color">
                    <h1 className="page-title white-color">Düzgünnama</h1>
                    <ul>
                        <li>
                            <NavLink to="/" className="active" end>
                                Baş sahypa
                            </NavLink>
                        </li>
                        <li>Düzgünnama</li>
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
                            <h2 className="title text-center mt-4 mb-40">«Ýaşlaryň arasynda ylmy işler boýunça Halkara bäsleşiginiň» DÜZGÜNNAMASY</h2>
                            <div className="blog-desc">
                                <p>Garaşsyz, hemişelik Bitarap Türkmenistan döwletimizde hormatly Prezidentimiziň parasatly baştutanlygynda ylmyň we tehnologiýalaryň ösüşine, halkymyzyň aň-bilim derejesiniň ýokarlandyrylmagyna, ylmyň, tehnikanyň we önümçiligiň bitewüliginiň üpjün edilmegine aýratyn ähmiýet berilýär.</p>
                            </div>
                            <div className="blog-desc mb-40">
                                <p>Täze taryhy döwürde Türkmenistanyň ykdysady we durmuş ösüşi babatda dünýäniň iň ösen döwletlerine mahsus bolan sepgitlere çykmagyna gönükdirilen giň gerimli maksatnamalar we meýilnamalar düýpli ylmy esaslara daýanýar. Nebit-gaz, oba hojalyk, gurluşyk, energetika, dokma, ykdysadyýet, maliýe, bank toplumlaryna, söwda, ulag, aragatnaşyk, himiýa, medeniýet, ylym, bilim, saglygy goraýyş, sport, syýahatçylyk ulgamlaryna ylmyň we tehnologiýalaryň öňdebaryjy tejribeleri we gazananlary ornaşdyrylýar.</p>
                            </div>
                            <div className="blog-desc mb-40">
                                <p>Türkmen ýaşlarynyň halkara hyzmatdaşlyk Strategiýasynyň baş maksadyna laýyklykda ýurdumyzyň ýaşlarynyň daşary ýurtlaryň ýaşlary bilen gatnaşyklaryny ösdürmek arkaly, halkara medeni, ykdysady, ylym- bilim babatda hereketlere has işjeň gatnaşmaklaryny üpjün etmek göz öňünde tutulýar. Bu ugurda täze, innowasion çemeleşmeler zerur.</p>
                            </div>
                            <div className="blog-desc mb-40">
                                <p>
                                    Şeýlelik bilen, Türkmenistanda ylmyň we tehnologiýalaryň ileri tutulýan ugurlaryna laýyklykda halkara derejede ýaş alymlar tarapyndan täze ylmy pikirleriň üsti bilen senagat-innowasion çözgütleriň, maglumat-tehnologiki we tejribe-konstruktorçylyk işläp taýýarlamalarynyň giňden ornaşdyrylmagyny üpjün etmek, şeýle hem ylymda we bilimde halypa- şägirtlik ýörelgelerini ösdürmekde, döwrebap tehnologiýalardan oňat baş çykarýan, başarjaň, intellektual taýdan ösen hünärmenleri taýýarlamakda ýokary netijeleri gazanmak maksady bilen <b>ýaşlaryň arasynda ylmy işler boýunça Halkara bäsleşigi</b> yglan edilýär.
                                </p>
                            </div>
                            <h3 className="text-center mt-4 mb-40">I. Umumy düzgünler</h3>
                            <div className="blog-desc mb-40">
                                <p>
                                    I.1. «<b>Ýaşlarynyň arasynda ylmy işler boýunça Halkara bäsleşiginiň</b>» (mundan beýläk -{" "}
                                    <b>
                                        <i>Bäsleşik</i>
                                    </b>
                                    ) düzgünnamasy bäsleşige ylmy işleri hödürlemegiň we resmileşdirmegiň tertibini, olary seljermegiň talaplaryny, eminler toparynyň işini hem-de ýeňijileri kesgitlemegiň kadalaryny görkezýär.
                                </p>
                            </div>
                            <div className="blog-desc mb-40">
                                <p>I.2. Bäsleşigiň geçirilişi barada maglumatlary şu web saýtlarynda görmek bolar:</p>
                            </div>
                            <ul className="unorder-list mt-4">
                                <li>
                                    <FontAwesomeIcon icon={faChevronRight} />{" "}
                                    <a href="https://mfa.gov.tm" target={"_blank"} rel="noreferrer">
                                        www.mfa.gov.tm
                                    </a>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faChevronRight} />{" "}
                                    <a href="https://education.gov.tm" target={"_blank"} rel="noreferrer">
                                        www.education.gov.tm
                                    </a>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faChevronRight} />{" "}
                                    <a href="https://science.gov.tm" target={"_blank"} rel="noreferrer">
                                        www.science.gov.tm
                                    </a>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faChevronRight} />{" "}
                                    <a href="https://yashlar.gov.tm" target={"_blank"} rel="noreferrer">
                                        www.yashlar.gov.tm
                                    </a>
                                </li>
                            </ul>
                            <div className="blog-desc mb-40">
                                <p>I.3. Ýurdumyzyň we daşary ýurtlaryň talyplary, magistrantlary, aspirantlary, ylymlaryň kandidaty alymlyk derejesine dalaşgärleri, ýaş alymlaryň we hünärmenleriň hem-de ylym bilen meşgullanýan beýleki ýaşlar alyp barýan ylmy-barlag işlerine laýyklykda bu bäsleşige aşakda görkezilen ugurlar boýunça özleriniň işlerini hödürläp bilerler:</p>
                            </div>
                            <ul className="unorder-list mt-4">
                                <li>
                                    <FontAwesomeIcon icon={faChevronRight} /> nanotehnologiýalar, himiki tehnologiýalar, täze materiallary öwrenmek we energetika;
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faChevronRight} /> biotehnologiýa, molekulýar biologiýa, oba hojalygy, ekologiýa we genetika;
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faChevronRight} /> maglumat we aragatnaşyk ulgamlary, kompýuter tehnologiýalary;
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faChevronRight} /> häzirki zaman lukmançylyk we derman serişdelerini öndürmek tehnologiýalary;
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faChevronRight} /> innowasiýa ykdysadyýeti;
                                </li>
                            </ul>
                            <div className="blog-desc mb-40">
                                <p>
                                    I.4. Türkmenistanda ylmyň we tehnologiýalaryň ileri tutulýan ugurlary hakynda{" "}
                                    <a href="https://science.gov.tm/tm/policy/laws/list_effective/" target={"_blank"} rel="noreferrer">
                                        {" "}
                                        https://science.gov.tm/tm/policy/laws/list_effective/
                                    </a>{" "}
                                    salgy boýunça giňişleýin maglumaty alyp bolar.
                                </p>
                            </div>
                            <h3 className="text-center mt-4 mb-40">II. Ylmy işleri bäsleşige hödürlemegiň we resmileşdirmegiň tertibi</h3>
                            <div className="blog-desc mb-40">
                                <p>II.1. Ýaşlar tarapyndan alnyp barylýan innowasion-tehnologik, inženerçilik we tejribe-konstruktorçylyk ylmy-barlag işleri netijesinde ýurtlaryň durmuş-ykdysady we jemgyýetçilik ösüşini üpjün edýän ylmy çözgütlere bagyşlanyp, ýokarda görkezilen degişli ugurlaryň haýsydyr biri boýunça ýerine ýetirilen ylmy işler kabul edilýär.</p>
                            </div>
                            <div className="blog-desc mb-40">
                                <p>II.2. Bäsleşige resminama kabul edilen gününe çenli ýaşy 35-e ýetmedik gatnaşyjynyň ylmy işi hasaba alynýar.</p>
                            </div>
                            <div className="blog-desc mb-40">
                                <p>II.3. Bäsleşige hödürlenýän ylmy işleriň resminamalarynyň sanawyna şulary goşmak hökman bolup, işiň taýýarlanan dilinde bolmagy zerurdyr:</p>
                            </div>
                            <ul className="unorder-list mt-4">
                                <li>
                                    <FontAwesomeIcon icon={faChevronRight} /> Goşundyda görkezilen “Hasaba alyş kagyzyna” laýyklykda maglumatlary;
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faChevronRight} /> Gatnaşyjynyň ylmy ýolbaşçysynyň hödürnamasy;
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faChevronRight} /> Hödürleýän ugry boýunça alymlar tarapyndan berlen azyndan 3 (üç) sany oňyn synlary;
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faChevronRight} /> Ylmy işiň täzeçilligini, amaly gymmatyny tassyklaýan resminamalary (ylmy makalalar, oýlap tapyşlar, senagat nusgalar, patentler we ş.m.);
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faChevronRight} /> Bäsleşige gatnaşyjynyň şahsyýetini tassyklaýan resminamalary;
                                </li>
                            </ul>
                            <div className="blog-desc mb-40">
                                <p>II.4. Hödürlenýän ylmy işler türkmen / rus / iňlis dilleriniň birinde azyndan 30 sahypada taýýarlanyp, aşakda görkezilen kadalara gabat gelýän görnüşinde taýýarlanmaly:</p>
                            </div>
                            <ul className="unorder-list mt-4">
                                <li>
                                    <FontAwesomeIcon icon={faChevronRight} /> *.pdf we *.rtf formatda;
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faChevronRight} /> Times New Roman şriftinde;
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faChevronRight} /> ýazgylar 14 kegl ululykda;
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faChevronRight} /> setirarasy 1,5 aralygynda we abzas 1,25 sm;
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faChevronRight} /> A4 sahypanyň ýokarky we aşaky böleginde 2 sm, çepde 3 sm, sagda 1,5 sm goýulmaly;
                                </li>
                            </ul>
                            <div className="blog-desc mb-40">
                                <p>II.5. Ylmy işiň gurluşy aşakdaky görkezilen talaplara laýyk bolmaly:</p>
                            </div>
                            <ul className="unorder-list mt-4">
                                <li>
                                    <FontAwesomeIcon icon={faChevronRight} /> Ady (Title);
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faChevronRight} /> Annotasiýa, awtoryň rezýumesi (Abstract);
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faChevronRight} /> Giriş (Introduction);
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faChevronRight} /> Barlagyň usulyýeti (enjamlar girýär) Research methods (including equipment);
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faChevronRight} /> Netijeler (Results) we ara alyp maslahatlaşmak (Discussion);
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faChevronRight} /> Jemleme (Conclusion);
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faChevronRight} /> Ulanylan edebiýatlar (References);
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faChevronRight} /> Goşundylar.
                                </li>
                            </ul>
                            <div className="blog-desc mb-40">
                                <p>II.6. Gatnaşyjylar özleriniň ylmy işi barada gysgaça wideo çykyşyny ýa-da tanyşdyryş toplumyny aşakdaky görkezilen kadalara laýyklykda iberip bilerler:</p>
                            </div>
                            <ul className="unorder-list mt-4">
                                <li>
                                    <FontAwesomeIcon icon={faChevronRight} /> *.mp4 ýa-da *.pptx formatda;
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faChevronRight} /> dowamlylygy 7 (ýedi) minuda ýa-da 30 slaýda çenli;
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faChevronRight} /> ylmy işiň mazmunyna laýyk taýýarlanmaly;
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faChevronRight} /> çykyşda gatnaşyjynyň şekili görkezilip bilner.
                                </li>
                            </ul>
                            <h3 className="text-center mt-4 mb-40">III. Işleri seljermegiň we bäsleşigiň netijelerini jemlemegiň tertibi</h3>
                            <div className="blog-desc mb-40">
                                <p>III.1. Bäsleşik üçin hödürlenjek ylmy işler 01.04.2023-01.08.2023 ý. seneler aralygynda example@gmail.com salgysy boýunça kabul ediler we iki tapgyrda geçiriler;</p>
                            </div>
                            <div className="blog-desc mb-40">
                                <p>III.2. Bäsleşigi ýokary derejede geçirmek maksady bilen, ylmy işleri hödürlemegiň talaplaryna laýyklykda ylmy işleri toplamak hem-de ol işleri halkara eminler toparyna seljermäge ibermek üçin degişli 5 ministrlikleriň, jemgyýetçilik guramalaryň, ýokary okuw mekdepleriniň we ylmy-barlag institutlarynyň wekillerinden düzülen guramaçylyk topary dörediler;</p>
                            </div>
                            <div className="blog-desc mb-40">
                                <p>III.3. Dürli ýurtlaryň ýaşlary tarapyndan bäsleşige hödürlenen ylmy işleri seljermek üçin ýokarda görkezilen ugurlar boýunça alymlyk derejesi bar bolan daşary ýurtlaryň hem-de ýurdumyzyň alymlaryndan düzülen halkara eminler topary dörediler;</p>
                            </div>
                            <div className="blog-desc mb-40">
                                <p>III.4. Halkara eminler topary hödürlenen ylmy işleri şu görkezijiler boýunça seljererler:</p>
                            </div>
                            <ul className="unorder-list mt-4">
                                <li>
                                    <FontAwesomeIcon icon={faChevronRight} /> işiň wajyplygyna we täzeçilligine;
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faChevronRight} /> ylmy garaýşyň beýan edilişine we ylmy sowatlylygyna;
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faChevronRight} /> ylmy işiň nazary we amaly ähmiýetine;
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faChevronRight} /> seljermeleriň geçirilişine we netijeleriň beýan edilişine;
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faChevronRight} /> ornaşdyrmagyň mümkinçiliklerine we ykdysady bähbitliligine;
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faChevronRight} /> ýerine ýetirilen işiň usullaryna (metodlaryna) we olaryň döwrebaplylygyna;
                                </li>
                            </ul>
                            <div className="blog-desc mb-40">
                                <p>III.5. Bäsleşigiň birinji tapgyrynda 2023-nji ýylyň sentýabr-oktýabr aýlarynda eminler tarapyndan ylmy işler seljeriler hem-de görkezijilere laýyklykda eminler toparyň netijenamasyna görä saýlananlar indiki tapgyra geçiriler;</p>
                            </div>
                            <div className="blog-desc mb-40">
                                <p>III.6. Bäsleşigiň ikinji tapgyrynda 2023-nji ýylyň noýabr aýynda birinji tapgyrdan geçen ylmy işleriň awtorlary işiň mazmunyny doly açyp görkezmek üçin onlaýn görnüşinde halkara eminler topary tarapyndan diňleniler we beýanlar arkaly gutarnykly netijeler çykarylyp, ýeňijiler kesgitlener;</p>
                            </div>
                            <div className="blog-desc mb-40">
                                <p>III.7. Halkara eminler toparynyň başlygynyň çözgüdi boýunça bäsleşigiň ýeňijilerini sylaglamak üçin Türkmenistanyň Ylymlar akademiýasynyň we Türkmenistanyň Magtymguly adyndaky Ýaşlar guramasynyň Merkezi Geňeşiniň garamagyna hödürlener;</p>
                            </div>
                            <div className="blog-desc mb-40">
                                <p>
                                    III.8. Bäsleşigiň ýeňijileri <b>«Arkadag Serdarly bagtyýar ýaşlar ýylynda»</b> Halkara Bitaraplyk güni mynasybetli yglan ediler;
                                </p>
                            </div>
                            <div className="blog-desc mb-40">
                                <p>III.9. Bäsleşigiň netijeleri köpçülikleýin habar beriş serişdeleriniň we Internet ulgamynyň üsti bilen halk köpçüligine ýetiriler;</p>
                            </div>
                            <div className="blog-desc mb-40">
                                <p>III.10. Bäsleşigiň ýeňijileri Türkmenistanyň Magtymguly adyndaky Ýaşlar guramasynyň serişdeleriniň hasabyna gymmat bahaly sowgatlar we diplomlar bilen sylaglanar.</p>
                            </div>
                            <h4 className="mt-4 pt-4">
                                Habarlaşmak üçin <NavLink to="/contact"> şu ýere</NavLink> basyň.
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RulesPage;
