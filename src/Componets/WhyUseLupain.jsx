import styles from './WhyUseLupain.module.css';
import home from '../images/homeImg.png';
import handshake from '../images/handshake.png';
import pound from '../images/pound.png';

function WhyUseLupain() {
    return (
        <div className={`${styles.whyUseMain} py-4`}>
            <div className="container">
                <h2 className={`${styles.secondaryHeading} text-center mb-md-4 mb-3`}>Why Use Lupain Tenerife Estate Agents?</h2>
                <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-4 d-flex flex-column  align-items-center py-3">
                        <img className={`${styles.whyUseImg}`} src={home} alt="img" />
                        <h3 className={`${styles.whyUseHeading} text-center`}>Wide Range Of Properties</h3>
                        <p className={`${styles.whyUseDescription} text-center`}>We welcome all our clients with a wide portfolio of fresh properties gathered by our experienced estate agents from the best areas of Tenerife</p>
                    </div>
                    <div className="col-md-6 col-lg-4 d-flex flex-column  align-items-center py-3">
                        <img className={`${styles.whyUseImg}`} src={handshake} alt="img" />
                        <h3 className={`${styles.whyUseHeading} text-center`}>Experienced Estate Agents</h3>
                        <p className={`${styles.whyUseDescription} text-center`}>We have been in the business here for 14 years. We speak the language and know comprehensively the Spanish Real Estate system. Our staff are fluent in many other languages and are well qualified to help and advise you.</p>
                    </div>
                    <div className="col-md-6 col-lg-4 d-flex flex-column  align-items-center py-3">
                        <img className={`${styles.whyUseImg}`} src={pound} alt="img" />
                        <h3 className={`${styles.whyUseHeading} text-center`}>Wide Range Of Properties</h3>
                        <p className={`${styles.whyUseDescription} text-center`}>We commit to a successful transaction and we always go the extra mile. All properties require a thorough background check, and we will do it.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default WhyUseLupain;