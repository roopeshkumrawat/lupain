import styles from './Footer.module.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className={`${styles.footerMain}`}>
            <div className="container">
                <div className="row flex-column flex-md-row">
                    <div className="col border-1 mt-3 mt-md-0">
                        <div className={`${styles.address} mb-2`}>
                            <strong className='mb-2'>Lupain Tenerife Estate Agents</strong>
                            <p>Edifico Cristian Sur, Av. de Ámsterdam, 4,
                                <br />
                                38650 Los Cristianos,
                                <br />
                                Santa Cruz de Tenerife, Spain
                            </p>
                        </div>
                        <div className={`${styles.tel} d-flex gap-2 mb-2`}>
                            <strong>Tel:</strong>
                            <Link className={`${styles.emailTel} text-decoration-none text-light`} to="tel:+34922796527">+34 922 796 527</Link>
                        </div>
                        <div className={`${styles.email} d-flex gap-2 mb-2`}>
                            <strong>Email:</strong> <Link className={`${styles.emailTel} text-decoration-none text-light`} to="mailto:info@lupain.com">info@lupain.com</Link>
                        </div>
                    </div>
                    <div className="col border-1 mt-3 mt-md-0">
                        <div className={`${styles.hours}`}>
                            <strong className='mb-2'>Office Opening Hours:</strong>
                            <p>Mon - Thursday: 9.30 to 18.30 GMT<br />
                                Friday: 9.30 to 18.00 GMT<br />
                                Saturday: 9.30 to 13.30 GMT</p>
                        </div>
                    </div>
                    <div className="col-md-5 col border-1 mt-3 mt-md-0">
                        <h3 className={`${styles.newsLetterHeadig}`}>Sign up to our Newsletter</h3>
                        <p className={`${styles.newsLetterPara}`}>Get all the latest properties, news and more</p>
                        <div className="input-group mb-3 ">
                            <span className="input-group-text rounded-0 bg-warning w-25 d-flex justify-content-center" id="inputGroup-sizing-default">Name</span>
                            <input type="text" className="form-control rounded-0" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                        </div>
                        <div className="input-group mb-3 ">
                            <span className="input-group-text rounded-0 bg-warning w-25 d-flex justify-content-center" id="inputGroup-sizing-default">Email</span>
                            <input type="text" className="form-control rounded-0" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                        </div>
                        <button type='button' className={`${styles.subcribeBtn} btn btn-warning rounded-0 float-end`}>subscribe</button>
                    </div>
                </div>
            </div>
            <div className={`${styles.footerBottom} mt-5`}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <p className={`${styles.copyRightText} py-md-4 pt-2 pb-0 `}>Copyright © 2023 Lupain Tenerife Estate Agents. All Rights Reserved.</p>
                        </div>
                        <div className="col-md-6 d-flex flex-wrap align-items-center py-md-4 pb-2 pt-0 gap-1">
                            <Link className={`${styles.bottomLinks} d-inline-block`} to='/'>Privacy Policy</Link>|
                            <Link className={`${styles.bottomLinks} d-inline-block`} to='/'>Terms & Conditions</Link>|
                            <Link className={`${styles.bottomLinks} d-inline-block`} to='/'>Locations</Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Footer;