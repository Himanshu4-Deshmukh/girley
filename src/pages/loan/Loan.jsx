
import React from 'react';
import Layout from '../../components/layout/Layout';

const cardData = [
  {
    id: 1,
    title: 'Bank Of Maharastra Loan Schemes',
    content: 'The Loan offers direct income support to small and marginal farmers in India',
    buttonUrl: 'https://bankofmaharashtra.in/agricultures'
  },

  {
    id: 2,
    title: '1. Pradhan Mantri Krishi Sinchai Yojana (PMKSY)',
    content: 'The Loan offers direct income support to small and marginal farmers in India.',
    buttonUrl: 'https://pmksy.gov.in/'
  },

  {
    id: 3,
    title: 'Paramparagat Krishi Vikas Yojana (PKVY)',
    content: 'The Loan offers direct income support to small and marginal farmers in India.',
    buttonUrl: 'https://dmsouthwest.delhi.gov.in/scheme/paramparagat-krishi-vikas-yojana/'
  },
  {
    id: 4,
    title: 'Pradhan Mantri Fasal Bima Yojana (PMFBY)',
    content: 'The Loan offers direct income support to small and marginal farmers in India.',
    buttonUrl: 'https://pmfby.gov.in/'
  },
  {
    id: 5,
    title: 'Gramin Bhandaran Yojana',
    content: 'The Loan offers direct income support to small and marginal farmers in India.',
    buttonUrl: 'https://www.sarkariyojnaa.com/warehouse-subsidy-scheme/'
  },
  {
    id: 6,
    title: 'Pradhan Mantri Kisan Maan-Dhan Yojana (PM-KMY)',
    content: 'The Loan offers direct income support to small and marginal farmers in India.',
    buttonUrl: 'https://www.myscheme.gov.in/schemes/pmkmy'
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

const Loan = () => {
  return (
    <Layout>
       <header class="bg-blue-500 text-white py-4">
        <h1 class="text-3xl font-semibold mt-16 mb-16 text-center">Indian Government Loan</h1>
    </header>
    <div className="flex flex-wrap justify-around">
      {cardData.map((card) => (
        <Card key={card.id} {...card} />
      ))}
    </div>
    </Layout>
  );
};

export default Loan;

