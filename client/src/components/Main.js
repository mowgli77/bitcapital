import {useState} from "react";
import { Link } from "react-router-dom";
import { BiLogoFacebook, BiLogoTwitter, BiLogoInstagramAlt, BiLogoYoutube } from "react-icons/bi";
import screen from "../img/screen-img.png";
import logo from "../img/logo.png";

const Main = () => {
    const [cookieDate, setCookieDate] = useState(localStorage.getItem("cookieDate"));

    const handleCloseCookies = () => {
        const now = Date.now();
        setCookieDate(now.toString());
        localStorage.setItem("cookieDate", now.toString());
    }

    return (
        <div className="wrapper homepage-wrapper">
            <main className="page">
                <section className="main">
                    <div className="main__container">
                        <div className="main__content">
                            <h1 className="main__title">BITCAPITAL <span> 98% — ймовірність схвалення</span></h1>
                            <p className="main__desc">Рішення приймається до 5 хвилин.</p>
                            <div className="main__buttons">
                                <a href="https://rdr.gointsd.com/in/offer/5088?aid=98503"
                                   className="main__btn lite-btn">IOS</a>
                                <a href="https://rdr.gointsd.com/in/offer/5088?aid=98503"
                                   className="main__btn accent-btn">Android</a>
                            </div>
                        </div>
                        <div className="main__image">
                            <img src={screen} alt="" className="main__pc-img" />
                            <img src={logo} alt="" className="main__mob-img" />
                        </div>
                    </div>
                </section>
            </main>
            <footer className="footer">
                <div className="footer-top">
                    <div className="footer-top__container">
                        <div className="footer-top__item">
                            <div className="footer-top__title">Information</div>
                            <ul className="footer-top__list">
                                <li className="footer-top__list-item"> <Link to="terms-and-conditions" className="footer-top__list-item">Conditions</Link></li>
                                <li className="footer-top__list-item">   <Link to="privacy-policy" className="footer-top__list-item">Privacy Policy</Link></li>
                            </ul>
                        </div>
                        <div className="footer-top__item">
                            <div className="footer-top__title">Contact</div>
                            <ul className="footer-top__contact">
                                <li className="footer-top__list-item"><a href="tel:+19999999999">+3 8067 999 11 99</a>
                                </li>
                                <li className="footer-top__list-item"><a href="tel:+19999999999">+3 8063 999 11 99</a>
                                </li>
                                <li className="footer-top__list-item"><a
                                    href="mailto:admin@yoursite.com">admin@bcapital.com.ua</a></li>
                            </ul>
                        </div>
                        <div className="footer-top__item address">
                            <div className="footer-top__title">Our address</div>
                            <ul className="footer-top__address">
                                <li className="footer-top__list-item">Kyiv, Ukraine</li>
                            </ul>
                        </div>
                        <div className="footer-top__item social">
                            <div className="footer-top__title">Follow us</div>
                            <ul className="footer-top__social">
                                <li className="footer-top__social-item"><a href="https://www.facebook.com/" target="blank"
                                                                           aria-label="Facebook">
                                    <BiLogoFacebook />
                                </a></li>
                                <li className="footer-top__social-item"><a href="https://x.com/" target="blank"
                                                                           aria-label="Twitter">
                                    <BiLogoTwitter />
                                </a></li>
                                <li className="footer-top__social-item"><a href="https://www.instagram.com/"
                                                                           target="blank" aria-label="Instagram">
                                    <BiLogoInstagramAlt />
                                </a></li>
                                <li className="footer-top__social-item"><a href="https://www.youtube.com/" target="blank"
                                                                           aria-label="YouTube">
                                    <BiLogoYoutube />
                                </a></li>
                                {/*<li class="footer-top__social-item"><a href="#" target="blank" aria-label="Linkedin"><svg class="icon-svg"><use xlink:href="img/icon-svg/main.svg#linkedin"></use></svg></a></li>*/}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="footer-bottom__container">
                        <div className="copyright">Сайт bcapital.com.ua є інформаційним ресурсом. Уся інформація, що
                            представлена на сайті, має ознайомлювальний характер. Усі рекомендації є результатом
                            аналітичних досліджень і не мають рекламного характеру. Всі зображення та контент взяті з
                            відкритих джерел. bcapital.com.ua - ми працюємо для вашої користі.© 2024 Copyright.
                        </div>
                    </div>
                </div>
            </footer>
            <div id="cookie_notification" className={`cookie_notification ${cookieDate ? '' : 'show'}`}>
                <div className="cookie_notification__cont">
                    <p>Продовжуючи використовувати цей сайт, ви погоджуєтесь з нашою політикою конфіденційності.</p>
                    <button className="cookie_notification__button button cookie_accept" onClick={handleCloseCookies}>Ok</button>
                </div>
            </div>
        </div>
    )
}

export default Main;
