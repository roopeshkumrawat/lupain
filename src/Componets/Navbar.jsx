import styles from './Navbar.module.css';
import DeMin from '../images/DE-min.png';
import EnMin from '../images/EN-min.png';
import EsMin from '../images/ES-min.png';
import FrMin from '../images/FR-min.png';
import ItMin from '../images/IT-min.png';
import NlMin from '../images/NL-min.png';
import Logo from '../images/logo-new.png';
import { Link } from 'react-router-dom';
function Navbar() {
    return (
        <div className={styles.mainNavbar}>
            <div className={`${styles.fixedTopbar} w-100`}>
                <div className="d-flex justify-content-between align-items-center h-100">
                    <p className={`${styles.message} text-light`}>This website uses cookies to ensure you get the best experience on our website </p>
                    <button type="button" className={`${styles.gotItBtn} btn btn-warning ms-2`}>Got it!</button> </div>
            </div>
            <div className={styles.navbarInner}>
                <div className={`${styles.navbarInnerChild} container-lg-fluid`}>
                    <div className="container">
                        <div className={`${styles.flagIcons} d-flex justify-content-between`}>
                            <div className={`${styles.flag} d-flex gap-2`}>
                                <Link to="/"><img className={`${styles.flagImg}`} src={DeMin} alt="flag" /></Link>
                                <Link to="/"><img className={`${styles.flagImg}`} src={EnMin} alt="flag" /></Link>
                                <Link to="/"><img className={`${styles.flagImg}`} src={EsMin} alt="flag" /></Link>
                                <Link to="/"><img className={`${styles.flagImg}`} src={FrMin} alt="flag" /></Link>
                                <Link to="/"><img className={`${styles.flagImg}`} src={ItMin} alt="flag" /></Link>
                                <Link to="/"><img className={`${styles.flagImg}`} src={NlMin} alt="flag" /></Link>
                            </div>
                            <div className={`${styles.icons} d-flex gap-2`}>
                                <Link to="/" className='text-light align-self-center d-flex'> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                </svg></Link>
                                <Link to="/" className='text-light align-self-center d-flex'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                                </svg></Link>
                                <Link to="/" className='text-light align-self-center d-flex'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                                </svg></Link>
                            </div>
                        </div>
                        <div className={styles.logoCallBtns}>
                            <div className="row">
                                <div className="col-lg-4 d-flex justify-content-between justify-content-lg-start">
                                    {/* <img src={Logo} alt="logo" /> */}
                                    <Link to="/"><img src={Logo} alt="logo" /></Link>
                                    <button className={`${styles.navbarToggler} navbar-toggler d-lg-none d-block`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className={`${styles.navbarTogglerIcon} navbar-toggler-icon`}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                                            </svg>
                                        </span>
                                    </button>
                                </div>
                                <div className="col-lg-4 d-flex justify-content-lg-end justify-content-center align-items-center">
                                    <Link className={styles.tel} to="tel:+34 922 796 527">Call Today +34 922 796 527</Link>
                                </div>
                                <div className="col-lg-4 d-flex justify-content-lg-end justify-content-center align-items-center gap-2">
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