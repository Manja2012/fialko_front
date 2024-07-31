import OneCourse from "../../components/Course/OneCourse";
import StripeCheckout from "../../stripe/stripe-checkout"

const OneCoursePage = () => {
  return (
    <>
      <OneCourse />
      <StripeCheckout/>
    </>
  );
};
export default OneCoursePage;
