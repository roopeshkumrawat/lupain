import { Link } from 'react-router-dom';
import styles from './HerroBanner.module.css';
import Bg from '../images/banner5.JPG';
import Bg1 from '../images/banner1.JPG';
import Bg2 from '../images/banner2.JPG';
import Bg3 from '../images/banner3.JPG';
import ratingImg from '../images/rating5_white_shadow.svg';
import LocationIcon from '../images/search.png';
import MapIcon from '../images/map.png';
import DrawIcon from '../images/draw.png'
import nearmeIcon from '../images/nearme.png'
import schoolIcon from '../images/school.png'
import trainIcon from '../images/train.png'
// import MapIcon from '../images/map.png'

function HerroBanner() {
    return (
        <div className={`${styles.bannerSection} position-relative`}>
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={Bg} className={`${styles.sliderImg} d-block w-100`} alt="banner" />
                        <div className={`${styles.sliderCaption} carousel-caption d-block`}>
                            <h2>Find the perfect property for you in
                                <p>Tenerife</p>
                            </h2>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={Bg3} className={`${styles.sliderImg} d-block w-100`} alt="banner" />
                        <div className={`${styles.sliderCaption} carousel-caption d-block`}>
                            <h2>Searching For Your Dream Property In
                                <p>Tenerife</p>
                            </h2>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={Bg1} className={`${styles.sliderImg} d-block w-100`} alt="banner" />
                        <div className={`${styles.sliderCaption} carousel-caption d-block`}>
                            <h2>Please read our
                                <p>reviews</p>
                            </h2>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={Bg2} className={`${styles.sliderImg} d-block w-100`} alt="banner" />
                        <div className={`${styles.sliderCaption} carousel-caption d-block`}>
                            <h2>Tenerife Estate Agents
                                <p>since 2002</p>
                            </h2>
                        </div>
                    </div>

                </div>
                <button className="carousel-control-prev d-block d-lg-none" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next d-block d-lg-none" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className={styles.findDreamHomeMain}>
                <div className="container">
                    <div className={`${styles.findDreamHome} rounded-2`}>
                        <div className={`${styles.findDreamHeading} text-center`}>Find your dream home</div>
                        <img src={ratingImg} className={`${styles.ratingImg} w-100 m-auto`} alt="ratingimg" />
                        <div className={`${styles.searchForms} d-flex flex-wrap gap-2 gap-md-3 m-auto justify-content-center`}>

                            <Link to="/" className={`${styles.searchFormInner} d-flex gap-2 flex-column`}>
                                <img className={`${styles.searchIcon} m-auto d-none d-md-block`} src={LocationIcon} alt="searchformicon" />
                                <h6 className={styles.searchHeading}>Location</h6>
                            </Link>
                            <Link to="/" className={`${styles.searchFormInner} d-flex gap-2 flex-column`}>
                                <img className={`${styles.searchIcon} m-auto d-none d-md-block`} src={MapIcon} alt="searchformicon" />
                                <h6 className={styles.searchHeading}>Complex Name</h6>
                            </Link>
                            <Link to="/" className={`${styles.searchFormInner} d-flex gap-2 flex-column`}>
                                <img className={`${styles.searchIcon} m-auto d-none d-md-block`} src={DrawIcon} alt="searchformicon" />
                                <h6 className={styles.searchHeading}>Property Reference</h6>
                            </Link>
                            <Link to="/" className={`${styles.searchFormInner} d-flex gap-2 flex-column`}>
                                <img className={`${styles.searchIcon} m-auto d-none d-md-block`} src={LocationIcon} alt="searchformicon" />
                                <h6 className={styles.searchHeading}>Recently Added</h6>
                            </Link>
                            <Link to="/" className={`${styles.searchFormInner} d-flex gap-2 flex-column`}>
                                <img className={`${styles.searchIcon} m-auto d-none d-md-block`} src={nearmeIcon} alt="searchformicon" />
                                <h6 className={styles.searchHeading}>Luxury</h6>
                            </Link>
                            <Link to="/" className={`${styles.searchFormInner} d-flex gap-2 flex-column`}>
                                <img className={`${styles.searchIcon} m-auto d-none d-md-block`} src={schoolIcon} alt="searchformicon" />
                                <h6 className={styles.searchHeading}>Selling</h6>
                            </Link>
                            <Link to="/" className={`${styles.searchFormInner} d-flex gap-2 flex-column`}>
                                <img className={`${styles.searchIcon} m-auto d-none d-md-block`} src={trainIcon} alt="searchformicon" />
                                <h6 className={styles.searchHeading}>Contact</h6>
                            </Link>
                        </div>
                        <div className={`${styles.searchFormInputs}`}>
                            <div className="row">
                                <div className="col-lg-5 col-md-4 ">
                                    <label className="fw-bold text-warning" htmlFor="status">Status</label>
                                    <select className="form-select" id='status' aria-label="Default select example">
                                        <option >Sold</option>
                                        <option value="1">For Sale</option>
                                        <option value="2">For Rent</option>
                                    </select>
                                </div>
                                <div className="col-lg-5 col-md-4 ">
                                    <label htmlFor="Location" className="fw-bold text-warning">Location</label>
                                    <input type="email" className="form-control" id="Location" placeholder="E.g. Los Cristianos, Las Americas ... etc." />
                                </div>
                                <div className="col-lg-2 col-md-4 mt-2 mt-md-0 d-flex">
                                    {/* <label htmlFor="" >.</label> */}
                                    <button className='btn btn-warning align-self-end w-100'>Search</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default HerroBanner;