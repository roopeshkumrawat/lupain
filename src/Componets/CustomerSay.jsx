import styles from './CustomerSay.module.css';
import customerSay1 from '../images/customerSay1.jpg';
import { Link } from 'react-router-dom';

function CustomerSay() {
    return (
        <div className={`${styles.customerSayMain} mt-5`}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 ">
                        <div id="carouselExampleControls" className="carousel slide position-relative h-100 overflow-hidden" data-bs-ride="carousel">
                            <h3 className={`${styles.sliderHeading}`}>What Our Customers Say</h3>
                            <button className={`${styles.prevBtn} carousel-control-prev position-absolute`} type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                <span className={`${styles.prev} carousel-control-prev-icon`} aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className={`${styles.nextBtn} carousel-control-next position-absolute`} type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                <span className={`${styles.next} carousel-control-next-icon`} aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                            <div className="carousel-inner p-3 bg-light h-100">
                                <div className="carousel-item  active">

                                    <p> <img className='float-start me-3 my-1 w-25' src={customerSay1} alt="" /> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat vel, doloribus deleniti nesciunt praesentium, enim nulla aliquam ducimus ratione dolorum, mollitia doloremque architecto iure similique. Debitis delectus nihil voluptatibus quo laudantium molestias earum magnam nemo excepturi unde? Ipsa, facilis iusto! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat vel, doloribus deleniti nesciunt praesentium, enim nulla aliquam ducimus ratione dolorum, mollitia doloremque architecto iure similique. Debitis delectus nihil voluptatibus quo laudantium molestias earum magnam nemo excepturi unde? Ipsa, facilis iusto!</p>
                                </div>
                                <div className="carousel-item">
                                    <p> <img className='float-start me-3 my-1 w-25' src={customerSay1} alt="" /> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat vel, doloribus deleniti nesciunt praesentium, enim nulla aliquam ducimus ratione dolorum, mollitia doloremque architecto iure similique. Debitis delectus nihil voluptatibus quo laudantium molestias earum magnam nemo excepturi unde? Ipsa, facilis iusto! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat vel, doloribus deleniti nesciunt praesentium, enim nulla aliquam ducimus ratione dolorum, mollitia doloremque architecto iure similique. Debitis delectus nihil voluptatibus quo laudantium molestias earum magnam nemo excepturi unde? Ipsa, facilis iusto!</p>
                                </div>
                                <div className="carousel-item">
                                    <p> <img className='float-start me-3 my-1 w-25' src={customerSay1} alt="" /> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat vel, doloribus deleniti nesciunt praesentium, enim nulla aliquam ducimus ratione dolorum, mollitia doloremque architecto iure similique. Debitis delectus nihil voluptatibus quo laudantium molestias earum magnam nemo excepturi unde? Ipsa, facilis iusto! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat vel, doloribus deleniti nesciunt praesentium, enim nulla aliquam ducimus ratione dolorum, mollitia doloremque architecto iure similique. Debitis delectus nihil voluptatibus quo laudantium molestias earum magnam nemo excepturi unde? Ipsa, facilis iusto!</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className={`${styles.post}`}>
                            <h4 className={`${styles.postHeading}`}>Property Investments in Tenerife</h4>
                            <p className={`${styles.postPara}`}>Property Investments in TenerifeIf you are seriously thinking about investing in
                                property in Tenerife then here at Lupain Estate Agents we have designed a program to ensure
                                that your investment in.
                            </p>
                            <Link to='/' className={`${styles.postReadMore}`}>Read More</Link>
                        </div>
                        <div className={`${styles.post}`}>
                            <h4 className={`${styles.postHeading}`}>Apartments for sale in Tenerife</h4>
                            <p className={`${styles.postPara}`}>Apartments for sale in TenerifeThe apartment sales in Tenerife especially in Los Cristianos and Las Americas have increased in the last couple of
                            </p>
                            <Link to='/' className={`${styles.postReadMore}`}>Read More</Link>
                        </div>
                        <div className={`${styles.post}`}>
                            <h4 className={`${styles.postHeading}`}>Villas for sale in Tenerife</h4>
                            <p className={`${styles.postPara}`}>Villas for sale in TenerifeVillas for sale in Tenerife have also increased considerably for locations such as Torviscas Alto, Fañabe, Palm Mar,
                            </p>
                            <Link to='/' className={`${styles.postReadMore}`}>Read More</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CustomerSay;