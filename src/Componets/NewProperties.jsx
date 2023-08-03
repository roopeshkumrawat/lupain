import styles from './NewProperties.module.css';
import np1 from '../images/np1.jpg';
import np2 from '../images/np2.jpg';
import np3 from '../images/np3.jpg';
import np4 from '../images/np4.jpg';
import np5 from '../images/np5.jpg';
import np6 from '../images/np6.jpg';
import np7 from '../images/np7.jpg';
import np8 from '../images/np8.jpg';
import np9 from '../images/np9.jpg';
import np10 from '../images/np10.jpg';
import np11 from '../images/np11.jpg';
import np12 from '../images/np12.JPG';
import { Link } from 'react-router-dom';

const newProperise = [
    { image: np1, price: '€285,000', nameAddress: '1 Bedroom Apartment In Crisol Complex For Sale In Los Cristianos LP13045' },
    { image: np2, price: '€370,000', nameAddress: '2 Bedroom Apartment In The Sunset Complex For Sale In Torviscas LP23716' },
    { image: np3, price: '€450,000', nameAddress: '1 Bedroom Apartment IN Parque Santiago I Complex For Sale In Las Americas LP13044' },
    { image: np4, price: '€399,000', nameAddress: '2 Bedroom Duplex in Parque Santiago II Complex For Sale In Las Americas LP23715' },
    { image: np5, price: '€380,000', nameAddress: '3 Bedroom Villa For Sale In Costa Del Silencio LP33528' },
    { image: np6, price: '€86,925', nameAddress: '1 Bedroom Apartment For Sale In Cabo Blanco LP13043' },
    { image: np7, price: '€138,000', nameAddress: '2 Bedroom Apartment For Sale In San Isidro LP23714' },
    { image: np8, price: '€285,000', nameAddress: '3 bedroom Apartment For Sale In Fanabe Pueblo LP33527' },
    { image: np9, price: '€275,000', nameAddress: '1 Bedroom Apartment in Labranda Suites Complex For Sale In Las Americas LP13042' },
    { image: np10, price: '€139,900', nameAddress: '1 Bedroom Apartment in Chayofita Complex For Sale In Costa Del Silencio LP13041' },
    { image: np11, price: '€365,000', nameAddress: '1 Bedroom Apartment in Comodoro Complex For Sale In Los Cristianos LP13040' },
    { image: np12, price: '€900,000', nameAddress: 'New Build. 3 Bedroom Penthouse Apartment in Atlantic Homes Complex For Sale In Costa Adeje LP33526' }

]
function NewProperties() {
    return (
        <div className={`${styles.newPropertiesMain}`}>
            <div className="container">
                <h1 className={`${styles.secondaryHeading} mt-md-5 mt-3 text-center`}>New Tenerife Properties</h1>
                <p className={`${styles.descriptionPara}  text-center`}>We invite you to experience and view all our new properties. Just click on any of the images below to see the full details.</p>
                <div className="row">
                    {newProperise.map((properties) =>
                        <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                            <Link to="/" className={`${styles.propertieLink} h-100 w-100 d-inline-block`}>
                                <img src={properties.image} className={`${styles.propertiesImg} w-100 h-100`} alt="new properties" />
                                <h3 className={`${styles.nameAddress}`}>{properties.nameAddress}</h3>
                                <p className={`${styles.propertiePrice}`}>{properties.price}</p>
                            </Link>
                        </div>
                    )}
                </div>
                <h1 className={`${styles.secondaryHeading} mt-md-5  border-0 mt-3 pb-0 text-center`}>About Lupain Tenerife Estate Agency Service</h1>
                <p className={`${styles.descriptionPara}  text-center px-md-5 px-0`}>Lupain Tenerife Estate Agents is the leading Tenerife estate agency with almost twenty years of experience in offering professional and transparent services to international clients. Since 1996, we have helped thousands of clients to buy or sell property in Tenerife.</p>
                <div className='text-center mb-5'><Link to="/" className='text-decoration-none'>Read More</Link></div>
            </div>
        </div>
    )
}
export default NewProperties;