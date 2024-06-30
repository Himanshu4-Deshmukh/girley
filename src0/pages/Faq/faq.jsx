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
    window.location.href = buttonUrl;
  };

  return (
    <div className="w-1/3 p-4">
      <div className="bg-white shadow-md rounded overflow-hidden transform transition-transform duration-300 hover:scale-105">
        <div className="p-4">
          <h2><b>{title}</b></h2>
          <p>{content}</p>
          <button
            className="bg-blue-500 text-white p-2 rounded-md mt-4 block w-full text-center"
            onClick={handleClick}
            aria-label={`Go to ${title}`}
          >
            Go to {title}
          </button>
        </div>
      </div>
    </div>
  );
};

const Faq = () => {
  return (
    <Layout>
      <header className="bg-blue-500 text-white py-4">
        <h1 className="text-3xl font-semibold mt-16 mb-16 text-center">Frequently Asked Questions</h1>
      </header>
      <div className="flex flex-wrap justify-around">
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2>T-SHIRTS - PRODUCT AND SIZING INFO</h2>

          <h3>What is the quality of fabric used?</h3>
          <p>
            The fabric will differ depending on the specific product. The description on the product page will mention the material, thickness, and other fabric specifications. Shrinkage, if any, will be within acceptable industry norms.
          </p>

          <h3>What sizes do you have?</h3>
          <p>
            Our sizes run from XXS to 5XL. Please check the size chart on each product page and compare it to our sizes to get the perfect fit.
          </p>

          <h3>What are the washing instructions for Kanika Play Hub T-Shirts?</h3>
          <ul className="list-disc list-inside">
            <li>We recommend hand washing your t-shirts inside-out in cold water to experience the highest durability.</li>
            <li>If machine washing, wash inside-out in cold water on gentle/normal cycles.</li>
            <li>Wash with like colors as garments may experience normal color bleeding.</li>
            <li>Do not iron the print.</li>
            <li>Do not bleach or tumble dry at high temperatures.</li>
          </ul>

          <h2>DISCOUNTS & GIFT VOUCHERS</h2>

          <h3>Can I avail any Discounts?</h3>
          <p>
            Check out our Alpha Membership program to get discounts on all Kanika Play Hub products and accessories. We have discounts and sales often, and we post details on our Facebook and Instagram pages. We also offer discounts to our newsletter subscribers from time to time. You can subscribe by entering your email address at the bottom of this page. We also distribute coupons to our customers occasionally, which you can redeem by entering the coupon code on the Shopping Cart page before checking out with your order.
          </p>

          <h3>Does Kanika Play Hub have Gift Vouchers?</h3>
          <p>
            Yes, we do. You can purchase a Kanika Play Hub Gift Voucher for your friends and loved ones <a href="#">here</a>.
          </p>

          <h2>PRIVACY</h2>

          <h3>What information does Kanika Play Hub store?</h3>
          <p>
            We respect your privacy. The only information we collect is your name, email, contact number, and billing address. This information is only used for internal record-keeping and order delivery. We do not share it with any third party other than our courier/delivery partners. Kanika Play Hub does not store any Credit/Debit card or bank account information. All this information is handled by secure online payment gateway partners like Cashfree, CCAvenue, and PayU.
          </p>
          <p>
            Read our <a href="#">Privacy Policy</a> to learn more.
          </p>
          <p>
            Check out <a href="https://www.cashfree.com">www.cashfree.com</a>, <a href="https://www.ccavenue.com">www.ccavenue.com</a>, <a href="https://www.payumoney.com">www.payumoney.com</a> to learn more about our secure online payment system.
          </p>

          <h2>DESIGN SUBMISSIONS</h2>

          <h3>Can I submit designs?</h3>
          <p>
            We are always on the lookout for new designs. If you have a design, feel free to send it to <a href="mailto:contact@kanikaplayhub.com">contact@kanikaplayhub.com</a> and we will get back to you. The design needs to be original and not taken from the internet.
          </p>

          <h3>How are designs selected for printing?</h3>
          <p>
            The final decision lies with us, and there is no voting system involved. We will contact you via email if we like your design and negotiate the terms and conditions for printing it.
          </p>

          <h3>What is the Kanika Play Hub marketplace?</h3>
          <p>
            Kanika Play Hub Marketplace empowers independent artists, bands, and organizations to sell their designs and merchandise without worrying about the technicalities of printing, accepting payments, or distribution. We will create a mini-shop on our website and take care of the entire supply chain. Mail us at <a href="mailto:contact@kanikaplayhub.com">contact@kanikaplayhub.com</a> for more information.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Faq;
