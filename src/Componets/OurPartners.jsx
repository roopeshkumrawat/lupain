import styles from './OurPartners.module.css';
import { Link } from 'react-router-dom';
import partnersLogo1 from '../images/partnersLogo1.jpg';
import partnersLogo2 from '../images/partnersLogo2.jpg';
import partnersLogo3 from '../images/partnersLogo3.jpg';
import partnersLogo4 from '../images/partnersLogo4.jpg';
import partnersLogo5 from '../images/partnersLogo5.jpg';

const ourPartners = [partnersLogo1,partnersLogo2,partnersLogo3,partnersLogo4,partnersLogo5];
function OurPartners() {
    return (
        <div className={styles.ourPartnersMain}>
            <div className="container">
                <h1 className={`${styles.mainHeading} mt-md-5 mt-3`}>Our Partners</h1>
                <div className={`${styles.partnersLogoMain} d-flex justify-content-around  flex-wrap  mb-4`}>
                   {ourPartners.map((logo) => (
                        <div className="col-6 col-md-2 text-center d-flex justify-content-center align-items-center">
                            <Link to="/">
                        <img src={logo} alt='logo' className='w-100' />
                        </Link>
                        </div>
                   ))}
                </div>
               
     
            </div>
        </div>
    )
}
export default OurPartners;