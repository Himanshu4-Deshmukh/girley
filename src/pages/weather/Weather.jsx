import React from 'react';
import Layout from '../../components/layout/Layout';

const ContactUs = () => {
  return (
    <Layout>
      <header className="bg-blue-500 text-white py-4">
        <h1 className="text-3xl font-semibold mt-16 mb-16 text-center">Contact Us</h1>
      </header>
      <div className="flex flex-wrap justify-around">
        <div className="max-w-3xl bg-white shadow-md rounded p-8">
          <p className="text-gray-800 text-center text-xl mb-4">
            <b>GOT QUESTIONS OR COMMENTS? GET IN TOUCH!</b>
          </p>
          <p className="text-gray-600 mb-4">
            Need to get in touch? The best way to contact us is over e-mail - we assure you that we are very prompt with our replies (unless it is a Sunday or a holiday - in that case, please have a heart, some patience and we’ll get back to you on the very next business day).
          </p>
          <p className="text-gray-600 mb-4">
            For any issues related to orders, addresses, payments and deliveries - please mail us at <a href="mailto:orders@kanikaplayhub.com" className="text-blue-500 underline">orders@kanikaplayhub.com</a>.
          </p>
          <p className="text-gray-600 mb-4">
            For any enquiries regarding social media collaborations, college festivals and sponsorships - please mail us at <a href="mailto:social@kanikaplayhub.com" className="text-blue-500 underline">social@kanikaplayhub.com</a>.
          </p>
          <p className="text-gray-600 mb-4">
            For business and marketing enquiries only - please mail us at <a href="mailto:marketing@kanikaplayhub.com" className="text-blue-500 underline">marketing@kanikaplayhub.com</a>.
          </p>
          <p className="text-gray-600 mb-4">
            You can also call us on <span className="text-blue-500 font-bold">+91-89204 27690</span> (Monday - Friday) between 10 AM and 5 PM for order related queries.
          </p>
          <p className="text-gray-600 mb-4">
            We've addressed some commonly asked questions on our <a href="/delivery-info" className="text-blue-500 underline">Delivery Information</a>, <a href="/return-policy" className="text-blue-500 underline">Return Policy</a> and <a href="/faq" className="text-blue-500 underline">FAQs</a> pages.
          </p>
          <p className="text-gray-600 mb-4">
            For just about anything else (including bulk orders and kind comments) - please mail us at <a href="mailto:contact@kanikaplayhub.com" className="text-blue-500 underline">contact@kanikaplayhub.com</a> and someone will get back to you for sure. You can also use this nifty little form below:
          </p>
          <div className="mt-8">
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Your Name</label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Enter your name"/>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">E-Mail Address</label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Enter your email"/>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="enquiry">Enquiry</label>
                <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="enquiry" placeholder="Enter your enquiry" rows="4"></textarea>
              </div>
              <div className="flex items-center justify-between">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">Submit</button>
              </div>
            </form>
          </div>
          <p className="text-gray-600 mt-8 text-center">
            <b>OUR LOCATION</b>
          </p>
          <p className="text-gray-600 text-center">
            <b>Kanika Playhub Private Limited</b><br />
            111 BLOCK D1 GALI NO 3, BADARPUR SOUTH, Badarpur (South Delhi), New Delhi, South Delhi-110044, Delhi
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default ContactUs;
