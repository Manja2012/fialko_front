import { useState } from "react";
import { useStripe } from "@stripe/react-stripe-js";
import { fetchFromApi } from "../utils/helpers/stripe";

const StripeCheckout = () => {
  const [email, setEmail] = useState("");
  const stripe = useStripe();
  // const {panier} = useContext(PanierContext)
  const handleCheckout = async (event) => {
    event.preventDefault();

    const panier = JSON.parse(localStorage.getItem("cart"));

    const line_items = panier.map((article) => {
      return {
        quantity: 1,
        price_data: {
          currency: "eur",
          unit_amount: article.price * 100,
          product_data: {
            name: article.name,
            description: article.content,
            // images: article.picture,
          },
        },
      };
    });
    console.log("line_item", line_items);
    // CALL API
    const { sessionId } = await fetchFromApi("create-checkout-session", {
      body: { line_items, customer_email: email },
    });

    const { error } = await stripe.redirectToCheckout({ sessionId });

    if (error) console.log(error);
  };

  return (
    <>
      <form onSubmit={handleCheckout}>
        <input
          type="email"
          name="email"
          id="email"
          onChange={(event) => setEmail(event.target.value)}
          placeholder="email"
          value={email}
        />
        <button type="submit">CHECKOUT</button>
      </form>
    </>
  );
};

export default StripeCheckout;
