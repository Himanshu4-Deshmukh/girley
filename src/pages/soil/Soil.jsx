import React, { useState } from 'react';
import Layout from '../../components/layout/Layout';

const SoilQualityTester = () => {
  const [ph, setPh] = useState('');
  const [moisture, setMoisture] = useState('');
  const [nutrients, setNutrients] = useState('');
  const [result, setResult] = useState('');

  const handleCalculate = () => {
    const phValue = parseFloat(ph);
    const moistureValue = parseFloat(moisture);
    const nutrientsValue = parseFloat(nutrients);

    let quality = 'Unknown';
    if (phValue >= 6 && moistureValue >= 30 && nutrientsValue >= 200) {
      quality = 'Good';
    } else if (phValue >= 5.5 && moistureValue >= 20 && nutrientsValue >= 150) {
      quality = 'Moderate';
    } else {
      quality = 'Poor';
    }

    setResult(`Soil Quality: ${quality}`);
  };

  return (
    <Layout>
    <div className="container mt-16 mx-auto max-w-md bg-white mb-8 p-8 rounded-lg shadow-md">
      <h1 className="text-3xl font-semibold mb-4">Soil Quality Test</h1>

      <form className="mb-4">
        <div className="mb-4">
          <label htmlFor="ph" className="block text-gray-600">
            pH Level:
          </label>
          <input
            type="number"
            step="0.1"
            id="ph"
            value={ph}
            onChange={(e) => setPh(e.target.value)}
            required
            className="w-full py-2 px-3 border rounded focus:outline-none focus:border-blue-400"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="moisture" className="block text-gray-600">
            Moisture Level (%):
          </label>
          <input
            type="number"
            id="moisture"
            value={moisture}
            onChange={(e) => setMoisture(e.target.value)}
            required
            className="w-full py-2 px-3 border rounded focus:outline-none focus:border-blue-400"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="nutrients" className="block text-gray-600">
            Nutrient Level (ppm):
          </label>
          <input
            type="number"
            id="nutrients"
            value={nutrients}
            onChange={(e) => setNutrients(e.target.value)}
            required
            className="w-full py-2 px-3 border rounded focus:outline-none focus:border-blue-400"
          />
        </div>

        <button
          type="button"
          onClick={handleCalculate}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Calculate
        </button>
      </form>

      <div className="text-xl font-semibold text-center" id="result">
        {result}
      </div>
    </div>
    </Layout>
  );
};

export default SoilQualityTester;
