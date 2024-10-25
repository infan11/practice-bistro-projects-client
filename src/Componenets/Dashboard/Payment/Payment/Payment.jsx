import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../SectionTiltle/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "../CheckOutForm";


const Payment = () => {
    const stepPormise = loadStripe(import.meta.env.VITE_STRIPE_PAYMENT)
    return (
        <div>
            <SectionTitle heading={"---Pending---"} subHeading={"PAYMENT"} />

            <div>
                <Elements stripe={stepPormise} >

                    <CheckOutForm />

                </Elements>
            </div>
        </div>
    );
};

export default Payment;