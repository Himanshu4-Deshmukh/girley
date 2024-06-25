
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

const SoilQualityTester = () => {
  return (
    <Layout>
       <header class="bg-blue-500 text-white py-4">
        <h1 class="text-3xl font-semibold mt-16 mb-16 text-center">Refund Policy</h1>
    </header>
    <div className="flex flex-wrap justify-around">
      {/* {cardData.map((card) => (
        <Card key={card.id} {...card} />
      ))} */}

      <p style={{color:"gray", padding:"50px"}}>
     
       <b>

Thanks for being a patron with KANIKA PLAYHUB PRIVATE LIMITED (referred as “ludo khelo yaar”)  . If you are not entirely satisfied with your subscription, we are here to help.

<br />
Refund

Once we receive your Refund request, we will inspect it and notify you on the status of your refund.
<br />
If your refund request is approved, we will initiate a refund to your credit card (or original method of payment) within 7 working days. You will receive the credit within a certain amount of days, depending on your card issuer's policies.
<br />
In case of unforeseen technical glitch, KANIKA PLAYHUB PRIVATE LIMITED would refund subscription upon reviewing the complaint. Final decision lies with the company.
</b>
 </p>
    </div>
    </Layout>
  );
};

export default SoilQualityTester;


 
