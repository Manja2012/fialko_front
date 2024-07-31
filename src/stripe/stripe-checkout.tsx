import { useState } from "react"
import { useStripe } from "@stripe/react-stripe-js"
import { fetchFromApi } from "../utils/helpers/stripe"

const StripeCheckout = () => {
    const [email, setEmail] = useState('')
    const stripe = useStripe()
    // const {panier} = useContext(PanierContext)
   const handleCheckout = async (event) => {
        event.preventDefault();
        
        const panier = [
            {
                name: 'Chemise',
                quantity: 3,
                price: 118,
                content: 'dsfjdsjjfhsdjkfghdsjgdhghsdjg',
                picture: [ {img: 'https://pixabay.com/photos/skateboard-skateboarder-skae-2271295/'} ]
            }
        ]

        const line_items = panier.map(article => {
            return {
                quantity: article.quantity,
                price_data: {
                    currency: 'eur',
                    unit_amount: article.price,
                    product_data: {
                        name: article.name,
                        description: article.content,
                        images: [article.picture[0].img]
                    }
                }
            }
        })

        // CALL API
        const { sessionId } = await fetchFromApi('create-checkout-session', {
            body: { line_items: line_items, customer_email: email }
        })

        const { error } = await stripe.redirectToCheckout( { sessionId } )

        if(error)
            console.log(error);

    }
    
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
}

export default StripeCheckout