import tick from '../assets/footer2-tick.png'
import paypal from '../assets/Paypal.png'
import master from '../assets/Master Card.png'
import visa from '../assets/Visa.png'
import discover from '../assets/Disccover.png'
import jsb from '../assets/JCB.png'
const Footer2 = () => {
    return (
        <div className="bg-orange-600 h-20 flex items-center justify-evenly py-3 px-10">
            <div>
                <h2 className="text-white/75">©2022 <span className='underline text-white/90'>Kavinax Property.</span> All Rights Reserved.</h2>
            </div>
            <div className='flex items-center gap-2'>
                <div className='flex items-center gap-2'>
                    <img src={tick} alt="" />
                    <h3 className="text-white/95 text-xs">Secure Payments</h3>
                </div>
                <img src={paypal} alt="" />
                <img src={master} alt="" />
                <img src={visa} alt="" />
                <img src={discover} alt="" />
                <img src={jsb} alt="" />
            </div>
        </div>
    );
};

export default Footer2;