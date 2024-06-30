import React from 'react';
import Layout from '../../components/layout/Layout';

const Faq = () => {
  return (
    <Layout>
      <header className="bg-blue-500 text-white py-4">
        <h1 className="text-3xl font-semibold mt-16 mb-16 text-center">Frequently Asked Questions</h1>
      </header>
      <div className="flex flex-wrap justify-around">
        <div style={{ color: "gray", padding: "50px", maxWidth: "800px", margin: "0 auto" }}>
          <h2 className="text-2xl font-semibold mb-4">POLICIES</h2>

          <h3 className="text-lg font-bold text-blue-700">What is your Returns Policy?</h3>
          <p className="mb-4">
            Please check out our detailed <a href="#" className="text-blue-500 underline">Returns Policy</a> page for more information.
          </p>

          <h3 className="text-lg font-bold text-blue-700">What should I do if I had an issue with my payment while placing an order?</h3>
          <p className="mb-4">
            Please check out our <a href="#" className="text-blue-500 underline">Payments Information</a> page.
          </p>

          <h3 className="text-lg font-bold text-blue-700">How do I track my order?</h3>
          <p className="mb-4">
            Please check out our detailed <a href="#" className="text-blue-500 underline">Delivery Information</a> page.
          </p>

          <h2 className="text-2xl font-semibold mb-4">T-SHIRTS - PRODUCT AND SIZING INFO</h2>

          <h3 className="text-lg font-bold text-blue-700">What is the quality of fabric used?</h3>
          <p className="mb-4">
            The fabric will differ depending on the specific product. The description on the product page will mention the material, thickness, and other fabric specifications. Shrinkage, if any, will be within acceptable industry norms.
          </p>

          <h3 className="text-lg font-bold text-blue-700">What sizes do you have?</h3>
          <p className="mb-4">
            Our sizes run from XXS to 5XL. Please check the size chart on each product page and compare it to our sizes to get the perfect fit.
          </p>

          <h3 className="text-lg font-bold text-blue-700">What are the washing instructions for KANIKA PLAYHUB T-Shirts?</h3>
          <ul className="list-disc list-inside mb-4">
            <li>We recommend hand washing your t-shirts inside-out in cold water to experience the highest durability.</li>
            <li>If machine washing, wash inside-out in cold water on gentle/normal cycles.</li>
            <li>Wash with like colors as garments may experience normal color bleeding.</li>
            <li>Do not iron the print.</li>
            <li>Do not bleach or tumble dry at high temperatures.</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">DISCOUNTS & GIFT VOUCHERS</h2>

          <h3 className="text-lg font-bold text-blue-700">Can I avail any Discounts?</h3>
          <p className="mb-4">
            Check out our Alpha Membership program to get discounts on all KANIKA PLAYHUB products and accessories. We have discounts and sales often, and we post details on our Facebook and Instagram pages. We also offer discounts to our newsletter subscribers from time to time. You can subscribe by entering your email address at the bottom of this page. We also distribute coupons to our customers occasionally, which you can redeem by entering the coupon code on the Shopping Cart page before checking out with your order.
          </p>

          <h3 className="text-lg font-bold text-blue-700">Does KANIKA PLAYHUB have Gift Vouchers?</h3>
          <p className="mb-4">
            Yes, we do. You can purchase a KANIKA PLAYHUB Gift Voucher for your friends and loved ones <a href="#" className="text-blue-500 underline">here</a>.
          </p>

          <h2 className="text-2xl font-semibold mb-4">PRIVACY</h2>

          <h3 className="text-lg font-bold text-blue-700">What information does KANIKA PLAYHUB store?</h3>
          <p className="mb-4">
            We respect your privacy. The only information we collect is your name, email, contact number, and billing address. This information is only used for internal record-keeping and order delivery. We do not share it with any third party other than our courier/delivery partners. KANIKA PLAYHUB does not store any Credit/Debit card or bank account information. All this information is handled by secure online payment gateway partners like Cashfree, CCAvenue, and PayU.
          </p>
          <p className="mb-4">
            Read our <a href="#" className="text-blue-500 underline">Privacy Policy</a> to learn more.
          </p>
          <p className="mb-4">
            Check out <a href="https://www.cashfree.com" className="text-blue-500 underline">www.cashfree.com</a>, <a href="https://www.ccavenue.com" className="text-blue-500 underline">www.ccavenue.com</a>, <a href="https://www.payumoney.com" className="text-blue-500 underline">www.payumoney.com</a> to learn more about our secure online payment system.
          </p>

          <h2 className="text-2xl font-semibold mb-4">DESIGN SUBMISSIONS</h2>

          <h3 className="text-lg font-bold text-blue-700">Can I submit designs?</h3>
          <p className="mb-4">
            We are always on the lookout for new designs. If you have a design, feel free to send it to <a href="mailto:contact@kanikaplayhub.com" className="text-blue-500 underline">contact@kanikaplayhub.com</a> and we will get back to you. The design needs to be original and not taken from the internet.
          </p>

          <h3 className="text-lg font-bold text-blue-700">How are designs selected for printing?</h3>
          <p className="mb-4">
            The final decision lies with us, and there is no voting system involved. We will contact you via email if we like your design and negotiate the terms and conditions for printing it.
          </p>

          <h3 className="text-lg font-bold text-blue-700">What is the KANIKA PLAYHUB marketplace?</h3>
          <p className="mb-4">
            KANIKA PLAYHUB Marketplace empowers independent artists, bands, and organizations to sell their designs and merchandise without worrying about the technicalities of printing, accepting payments, or distribution. We will create a mini-shop on our website and take care of the entire supply chain. Mail us at <a href="mailto:contact@kanikaplayhub.com" className="text-blue-500 underline">contact@kanikaplayhub.com</a> for more information.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Faq;
