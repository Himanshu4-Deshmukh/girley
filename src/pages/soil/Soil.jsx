import React from 'react';
import Layout from '../../components/layout/Layout';

const cardData = [
  {
    id: 1,
    title: 'PM-KISAN Scheme',
    content: 'The PM-KISAN Scheme offers direct income support to small and marginal farmers in India.',
    buttonUrl: 'https://pmkisan.gov.in/'
  },
  {
    id: 2,
    title: 'Pradhan Mantri Kisan Samman Nidhi Scheme',
    content: 'The PM-KISAN Scheme offers direct income support to small and marginal farmers in India.',
    buttonUrl: 'https://pib.gov.in/PressReleaseIframePage.aspx?PRID=1946816'
  },
  {
    id: 3,
    title: 'Card 3',
    content: 'Content for Card 3',
    buttonUrl: 'https://example.com/card3'
  },
  {
    id: 4,
    title: 'Card 3',
    content: 'Content for Card 3',
    buttonUrl: 'https://example.com/card3'
  },
  {
    id: 5,
    title: 'Card 3',
    content: 'Content for Card 3',
    buttonUrl: 'https://example.com/card3'
  },
  {
    id: 6,
    title: 'Card 3',
    content: 'Content for Card 3',
    buttonUrl: 'https://example.com/card3'
  },
  // Add more card data as needed
];

const Card = ({ id, title, content, buttonUrl }) => {
  const handleClick = () => {
    // Handle button click if needed
    window.location.href = buttonUrl; // Redirect to the specified URL
  };

  return (
    <div className="w-1/3 p-4">
      <div className="bg-white shadow-md rounded overflow-hidden transform transition-transform duration-300 hover:scale-105">
        <div className="p-4">
          <h2><b>{title}</b></h2>
          <p>{content}</p>
          <button className="bg-blue-500 text-white p-2 rounded-md mt-4 block w-full text-center" onClick={handleClick}>
            Go to {title}
          </button>
        </div>
      </div>
    </div>
  );
};

const SoilQualityTester = () => {
  return (
    <Layout>
      <header className="bg-blue-500 text-white py-4">
        <h1 className="text-3xl font-semibold mt-16 mb-16 text-center">Refund Policy</h1>
      </header>
      <div className="flex flex-wrap justify-around">
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <p style={{ color: "gray", padding: "50px" }}>
            We at Kanika Play Hub strive to provide you with a quality product of your choice. If for any reason you are not satisfied with your order, please contact us at <a href="mailto:orders@kanikaplayhub.com">orders@kanikaplayhub.com</a>.
          </p>

          <h2>What is Kanika Play Hub's Exchange Policy?</h2>
          <p>
            If you are unhappy with the product you have received or need a size change, you can request a return from your Orders Page.
          </p>
          <p>
            Once the returned item(s) are received, they will be checked, and we will issue credits in your Kanika Play Hub Wallet for the value of the returned products. A return handling charge of Rs. 50 per product will be applied, except in the case of a wrong or defective product sent. Alpha Members are entitled to free returns and will not be charged any return handling fees. Cash on Delivery handling charges and shipping charges are non-refundable. You can use these credits to place a new order.
          </p>
          <p>
            Items must be unused and returned within 15 days of delivery.
          </p>

          <h2>I have received a wrong/defective product. How do I proceed?</h2>
          <p>
            Please request a return from your Orders page and specify the error or defect in your order.
          </p>
          <p>
            Please raise a return request or inform us by sending an email to <a href="mailto:orders@kanikaplayhub.com">orders@kanikaplayhub.com</a> within 48 hours of delivery if you have received a wrong product. Taking a video of opening the package will help in a quick resolution for damaged or defective products.
          </p>
          <p>
            Please inform us by sending an email to <a href="mailto:orders@kanikaplayhub.com">orders@kanikaplayhub.com</a> within 48 hours in case you have not received your order but have received an email or SMS stating that your order is delivered.
          </p>

          <h2>Can I cancel my order before it is Shipped out?</h2>
          <p>
            You can cancel your order from your Orders page if it has not yet been processed at our office. All orders are usually processed by 11 AM every working day. Orders containing certain products cannot be cancelled once manufactured due to printing on demand.
          </p>
          <p>
            If you have any further questions about the return/exchange policy, please contact us at <a href="mailto:orders@kanikaplayhub.com">orders@kanikaplayhub.com</a>.
          </p>

          <h2>Refunds</h2>
          <p>
            We will notify you once we’ve received and inspected your return, and let you know if the refund was approved or not. If approved, you’ll be automatically refunded on your original payment method within 10 business days. Please remember it can take some time for your bank or credit card company to process and post the refund too.
          </p>
          <p>
            If more than 3 business days have passed since we’ve approved your return, please contact us at <a href="mailto:support@kanikaplayhub.com">support@kanikaplayhub.com</a>.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default SoilQualityTester;
