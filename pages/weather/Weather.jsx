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

const WeatherForecast = () => {
  return (
    <Layout>
      <header className="bg-blue-500 text-white py-4">
        <h1 className="text-3xl font-semibold mt-16 mb-16 text-center">Contact Us</h1>
      </header>
      <div className="flex flex-wrap justify-around">
        {cardData.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </div>
      <div className="flex flex-wrap justify-around mt-8">
        <p className="text-gray-600 p-8 text-center">
          <b>
            <center>
              Support@kanikaplayhub.com
              <br />
              8920427690
              <br />
              KANIKA PLAYHUB PRIVATE LIMITED
              <br />
              111 BLOCK D1 GALI NO 3, BADARPUR SOUTH, Badarpur (South Delhi), New Delhi, South Delhi-110044, Delhi
            </center>
          </b>
        </p>
      </div>
    </Layout>
  );
};

export default WeatherForecast;
