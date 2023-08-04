import styles from './Help.module.css';
import helpPeople from '../images/help-people.png'
function Help() {
    return (
        <div className={`${styles.helpMain} mt-5`}>
            <div className="container">
                <div className="row">
                    <div className={`${styles.helpForm} col-md-5 h-100 p-4`}>
                        <h2 className={`${styles.helpMainHeading}`}>Any Questions?</h2>
                        <h3 className={`${styles.helpSecondaryHeading}`}>We're Here To Help!</h3>
                        <form  method="post" action="" className="form mt-3" id="contactForm" noValidate="novalidate">
                            <input className='w-100 py-2 px-1 my-1' type="text" name="name" placeholder="Name" required="" aria-required="true" />
                            <input className='w-100 py-2 px-1 my-1' type="email" name="email" placeholder="Email" required="" aria-required="true" />
                            <input className='w-100 py-2 px-1 my-1' type="text" name="phone" placeholder="Phone" required="" aria-required="true" />
                            <textarea className='w-100 py-2 px-1 my-1' name="message" id="message" cols="30" rows="10" placeholder="Message"></textarea>
                            <input className='w-100 py-2 px-1 my-1' type="hidden" name="subject" defaultValue="Contact Form Enquiry" />
                            <input className='w-100 py-2 px-1 my-1' type="hidden" name="return-path" defaultValue="/" />
                            <button className={`${styles.formSubmitBtn} rounded-0 my-1`} type="submit">Send</button>
                        </form>
                    </div>
                    <div className="col-md-7 d-md-block d-none align-self-end">
                        <img className={`${styles.helpPeopleImg}`} src={helpPeople} alt="help img" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Help;