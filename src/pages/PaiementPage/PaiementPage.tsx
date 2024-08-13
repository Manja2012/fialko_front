import StripeCheckout from "../../stripe/stripe-checkout";

const PaiementPage = () => {
 
  return (
    <>
      <div className="container">
       <StripeCheckout/>
      </div>
    </>
  );
}
export default PaiementPage;
