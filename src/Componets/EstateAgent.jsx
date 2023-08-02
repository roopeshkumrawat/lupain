import styles from './EstateAgent.module.css';
import locationImg1 from '../images/location1.jpg';
import locationImg2 from '../images/location2.jpg';
import locationImg3 from '../images/location3.jpg';
import locationImg4 from '../images/location4.jpg';
import locationImg5 from '../images/location5.jpg';
import locationImg6 from '../images/location6.png';
function EstateAgent() {
    return (


        <div className={`${styles.estateAgentMain}`}>
            <div className="container">
                <h1 className={`${styles.mainHeading} text-center m-0 mt-5 mb-3`}>Lupain – Tenerife Estate Agents</h1>
                <div className={`${styles.PropertiesMainSection}`}>
                    <h2 className={`${styles.secondaryHeading} text-center`}>
                        Featured Tenerife Properties
                    </h2>
                </div>
                <div className={`${styles.PropertiesLocationMain}`}>
                    <h2 className={`${styles.secondaryHeading} text-center`}>
                        Prime Tenerife Property Location
                    </h2>
                    <div className={`${styles.PropertiesLocationInner}`}>
                        <div className="row justify-content-between">
                            <div className={`${styles.propertiesCol} col-lg-2 col-md-4 col-sm-6 mb-2 mb-lg-2`}>
                                <div className={`${styles.propertiesColInner} position-relative`}>
                                    <img src={locationImg1} className={`${styles.propertiesImg} w-100`} alt="propertiesImages" />
                                    <span className={`${styles.propertiesLocationName} position-absolute`}>Costa Adeje</span>
                                </div>
                            </div>
                            <div className={`${styles.propertiesCol} col-lg-2 col-md-4 col-sm-6 mb-2 mb-lg-2`}>
                                <div className={`${styles.propertiesColInner} position-relative`}>
                                    <img src={locationImg4} className={`${styles.propertiesImg} w-100`} alt="propertiesImages" />
                                    <span className={`${styles.propertiesLocationName} position-absolute`}>Torviscas</span>
                                </div>
                            </div>
                            <div className={`${styles.propertiesCol} col-lg-2 col-md-4 col-sm-6 mb-2 mb-lg-2`}>
                                <div className={`${styles.propertiesColInner} position-relative`}>
                                    <img src={locationImg5} className={`${styles.propertiesImg} w-100`} alt="propertiesImages" />
                                    <span className={`${styles.propertiesLocationName} position-absolute`}>San Eugenio</span>
                                </div>
                            </div>

                            <div className={`${styles.propertiesCol} col-lg-2 col-md-4 col-sm-6 mb-2 mb-lg-2`}>
                                <div className={`${styles.propertiesColInner} position-relative`}>
                                    <img src={locationImg3} className={`${styles.propertiesImg} w-100`} alt="propertiesImages" />
                                    <span className={`${styles.propertiesLocationName} position-absolute`}>Playa de Las Americas</span>
                                </div>
                            </div>

                            <div className={`${styles.propertiesCol} col-lg-2 col-md-4 col-sm-6 mb-2 mb-lg-2`}>
                                <div className={`${styles.propertiesColInner} position-relative`}>
                                    <img src={locationImg6} className={`${styles.propertiesImg} w-100`} alt="propertiesImages" />
                                    <span className={`${styles.propertiesLocationName} position-absolute`}>Fanabe</span>
                                </div>
                            </div>
                            <div className={`${styles.propertiesCol} col-lg-2 col-md-4 col-sm-6 mb-2 mb-lg-2`}>
                                <div className={`${styles.propertiesColInner} position-relative`}>
                                    <img src={locationImg2} className={`${styles.propertiesImg} w-100`} alt="propertiesImages" />
                                    <span className={`${styles.propertiesLocationName} position-absolute`}>Los Cristianos</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default EstateAgent;