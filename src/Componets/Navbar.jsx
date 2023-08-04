import styles from './Navbar.module.css';
import DeMin from '../images/DE-min.png';
import EnMin from '../images/EN-min.png';
import EsMin from '../images/ES-min.png';
import FrMin from '../images/FR-min.png';
import ItMin from '../images/IT-min.png';
import NlMin from '../images/NL-min.png';
import SvMin from '../images/SV-min.png';
import Logo from '../images/logo-new.png';
import { Link } from 'react-router-dom';
function displayNone() {
    document.getElementsByClassName(`${styles.fixedTopbarMain}`)[0].classList.add("d-none");
}
function Navbar() {
    return (
        <div className={styles.mainNavbar}>
            <div className={`${styles.fixedTopbarMain} w-100`}>
                <div className={`${styles.fixedTopbar} w-100`}>
                    <div className="d-flex justify-content-between align-items-center h-100">
                        <p className={`${styles.message} text-light`}>This website uses cookies to ensure you get the best experience on our website </p>
                        <button type="button" onClick={displayNone} className={`${styles.gotItBtn} btn btn-warning ms-2`}>Got it!</button> </div>
                </div>
            </div>
            <div className={styles.navbarInner}>
                <div className={`${styles.navbarInnerChild} container-lg-fluid`}>
                    <div className="container">
                        <div className={`${styles.flagIcons} d-flex justify-content-between`}>
                            <div className={`${styles.flag} d-flex`}>
                                <Link to="/"><img className={`${styles.flagImg}`} src={EnMin} alt="flag" /></Link>
                                <Link to="/"><img className={`${styles.flagImg}`} src={EsMin} alt="flag" /></Link>
                                <Link to="/"><img className={`${styles.flagImg}`} src={DeMin} alt="flag" /></Link>
                                <Link to="/"><img className={`${styles.flagImg}`} src={FrMin} alt="flag" /></Link>
                                <Link to="/"><img className={`${styles.flagImg}`} src={ItMin} alt="flag" /></Link>
                                <Link to="/"><img className={`${styles.flagImg}`} src={NlMin} alt="flag" /></Link>
                                <Link to="/"><img className={`${styles.flagImg}`} src={SvMin} alt="flag" /></Link>
                            </div>
                            <div className={`${styles.icons} d-flex`}>
                                <Link to="/" className={`${styles.TopBarIcons} d-flex align-self-start`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512" style={{ fill: "#ffffff" }}><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" /></svg>
                                </Link>
                                <Link to="/" className={`${styles.TopBarIcons} d-flex align-self-start`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" style={{ fill: "#ffffff" }}><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" /></svg>
                                </Link>
                                <Link to="/" className={`${styles.TopBarIcons} d-flex align-self-start`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" style={{ fill: "#ffffff" }}><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" /></svg>
                                </Link>
                            </div>
                        </div>
                        <div className={styles.logoCallBtns}>
                            <div className="row">
                                <div className="col-lg-4 d-flex justify-content-between justify-content-lg-start">
                                    {/* <img src={Logo} alt="logo" /> */}
                                    <Link to="/"><img className={styles.mainLogo} src={Logo} alt="logo" /></Link>
                                    <button className={`${styles.navbarToggler} navbar-toggler d-lg-none d-block`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className={`${styles.navbarTogglerIcon} navbar-toggler-icon`}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                                            </svg>
                                        </span>
                                    </button>
                                </div>
                                <div className="col-lg-4 d-flex justify-content-lg-end justify-content-center">
                                    <Link className={styles.tel} to="tel:+34 922 796 527">Call Today +34 922 796 527</Link>
                                </div>
                                <div className="col-lg-4 d-flex justify-content-lg-end justify-content-center gap-2">
                                    <div className={`${styles.userButtons}`}>
                                        <Link to="/" className='d-flex justify-content-center align-items-center'><svg xmlns="http://www.w3.org/2000/svg" width="1.4em" height="1.4em" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                                            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                                        </svg></Link>
                                    </div>
                                    <div className={`${styles.currencyLogoButtons} dropdown`}>
                                        <Link className={`${styles.logoButtonsToggle} dropdown-toggle`} to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">€</Link>
                                        <ul className={`${styles.currencyLogoButtonsList} dropdown-menu`}>
                                            <li><Link className="dropdown-item" to="/">$</Link></li>
                                            <li><Link className="dropdown-item" to="/">£</Link></li>
                                        </ul>
                                    </div>
                                    {/* </div> */}
                                    <div className={styles.sellingButtons}>
                                        <Link to="/">Selling? <br />Book A FREE Valuation</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.navbarLinks}>
                        <nav className={`${styles.navMain} navbar navbar-expand-lg navbar-light p-0`}>
                            <div className="container">
                                {/* <button className={`${styles.navbarToggler} navbar-toggler`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button> */}
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav mb-2 mb-lg-0  d-flex justify-content-between w-100">
                                        <li className="nav-item">
                                            <Link className="nav-link active" aria-current="page" to="/">HOME</Link>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                TERMERIFE PROPERTIES
                                            </Link>
                                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                <li><Link className="dropdown-item" to="/">Action</Link></li>
                                                <li><Link className="dropdown-item" to="/">Another action</Link></li>
                                                <li><hr className="dropdown-divider" /></li>
                                                <li><Link className="dropdown-item" to="/">Something else here</Link></li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                SELLING
                                            </Link>
                                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                <li><Link className="dropdown-item" to="/">Action</Link></li>
                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/">RENTALS</Link>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                ABOUT US
                                            </Link>
                                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                <li><Link className="dropdown-item" to="/">Action</Link></li>
                                                <li><Link className="dropdown-item" to="/">Another action</Link></li>
                                                <li><hr className="dropdown-divider" /></li>
                                                <li><Link className="dropdown-item" to="/">Something else here</Link></li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                INFORMATION
                                            </Link>
                                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                <li><Link className="dropdown-item" to="/">Action</Link></li>
                                                <li><Link className="dropdown-item" to="/">Another action</Link></li>
                                                <li><hr className="dropdown-divider" /></li>
                                                <li><Link className="dropdown-item" to="/">Something else here</Link></li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                SERVICES
                                            </Link>
                                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                <li><Link className="dropdown-item" to="/">Action</Link></li>
                                                <li><Link className="dropdown-item" to="/">Another action</Link></li>
                                                <li><hr className="dropdown-divider" /></li>
                                                <li><Link className="dropdown-item" to="/">Something else here</Link></li>
                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" aria-current="page" to="/">BLOG</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" aria-current="page" to="/">CONTACT</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Navbar;