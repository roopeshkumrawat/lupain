import CustomerSay from "../Componets/CustomerSay";
import EstateAgent from "../Componets/EstateAgent";
import HerroBanner from "../Componets/HerroBanner";
import NewProperties from "../Componets/NewProperties";
import OurPartners from "../Componets/OurPartners";
import WhyUseLupain from "../Componets/WhyUseLupain";

function Home() {
    return (
        <>
            <HerroBanner />
            <EstateAgent />
            <NewProperties/>
            <WhyUseLupain />
            <CustomerSay />
            <OurPartners />
        </>
    )
}
export default Home;