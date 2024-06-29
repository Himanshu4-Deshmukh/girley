
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
      <div className="bg-white-1 shadow-md rounded overflow-hidden transform transition-transform duration-300 hover:scale-105">
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

const Info = () => {
  return (
    <Layout>
       <header className="bg-blue-500 text-white py-4">
        <h1 className="text-3xl font-semibold mt-16 mb-16 text-center">DELIVERY INFORMATION</h1>
    </header>
    <div className="flex flex-wrap justify-around">
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <h2>How long will it take for my order to arrive?</h2>

        <p>
          Orders placed before 8:30 AM are usually shipped out from our warehouse on the same day on all working days (Mon-Sat). Orders placed later or on Sundays or Public holidays are processed and shipped out on the next working day.
        </p>

        <p>
          Once shipped out from our warehouse in Mumbai, deliveries usually happen within 5-7 working days depending on your location. Delivery to remote areas may take longer.
        </p>

        <p>
          In case of unforeseen circumstances such as strikes, natural disasters, acts of God, or inter-galactic rioting, the delivery time may increase by a few days.
        </p>

        <h3>What if my order contains a Print on Demand (POD) product?</h3>

        <p>
          Face Masks, Phone cases, Coffee Mugs, DTG T-shirts, Coasters, Posters, and Fridge Magnets are Print-on-demand products and are custom made for you once you place an order. These products usually take 3-6 working days (excluding Sundays and bank holidays) to be manufactured and shipped out from our warehouse. If your order contains a mix of POD and stocked products, the entire order will be shipped together once your POD products are ready.
        </p>

        <p>
          You can read more information about POD products on our Return Policy page.
        </p>

        <h2>How do I track my order?</h2>

        <p>
          You will receive an e-mail with your courier tracking link once your order is shipped out from our warehouse. You can also find the tracking information from your Order History page. Please check your e-mail spam folder if you can't find the e-mail from us.
        </p>

        <h2>Are there any shipping charges?</h2>

        <ul>
          <li>All Prepaid orders above Rs. 499 enjoy Free Shipping all over India!</li>
          <li>Shipping charges of Rs. 60 will apply to all orders below Rs. 499.</li>
          <li>Cash On Delivery (COD) orders incur an additional handling charge of Rs. 50 per 500 grams (approximately 2 t-shirts). This amount is calculated based on your cart weight and displayed on the checkout page before you confirm your order.</li>
        </ul>

        <p>
          For any specific details regarding shipping, please contact us at <a href="mailto:orders@kanikaplayhub.com">orders@kanikaplayhub.com</a>.
        </p>

        <h2>What if a product is currently out of stock in the size I want?</h2>

        <p>
          We usually replenish our stock as soon as possible. You can leave your email address in the dialogue box that pops up when you try to add an item that's out of stock to your cart to receive an email notification as soon as it's back in stock. Drop us an email at <a href="mailto:orders@kanikaplayhub.com">orders@kanikaplayhub.com</a> if you have any questions.
        </p>

        <h2>What if I need an urgent delivery?</h2>

        <p>
          Please get in touch with us at <a href="mailto:orders@kanikaplayhub.com">orders@kanikaplayhub.com</a> and we will be happy to help you out.
        </p>

        <h2>Do you ship internationally?</h2>

        <p>
          Not at the moment.
        </p>

        <h2>What are the charges for a bulk order?</h2>

        <p>
          Please contact us at <a href="mailto:contact@kanikaplayhub.com">contact@kanikaplayhub.com</a> with your queries.
        </p>
      </div>
    </div>
 

    </Layout>
  );
};

export default Info;


 
