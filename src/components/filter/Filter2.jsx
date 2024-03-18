import React, { useContext, useEffect, useState } from 'react';
import myContext from '../../context/data/myContext';

function Filter2() {
    const context = useContext(myContext);
    const { mode, filterPrice, setFilterPrice, product } = context;

    // Extract unique prices from the product array and sort them in ascending order
    const uniquePrices = Array.from(new Set(product.map(item => item.price))).sort((a, b) => a - b);

    const handleResetFilter = () => {
        // Reset filterPrice state to empty string
        setFilterPrice('');
    };

    useEffect(() => {
        return () => {
            // Clear the filter when the component unmounts
            setFilterPrice('');
        };
    }, [setFilterPrice]);

    return (
        <div className="flex flex-col justify-between">
            <div className='h-full'>
                <div className="p-5 rounded-lg bg-gray-100 drop-shadow-xl border border-gray-200"
                    style={{
                        backgroundColor: mode === 'dark' ? '#282c34' : '',
                        color: mode === 'dark' ? 'white' : '',
                        height: '100%', // Set height to make it full height
                        width: '250px', // Set width for the sidebar
                    }}>
                   
                    <div className="flex items-center justify-between">
                        <p className="font-medium mb-4">
                            Filters
                        </p>
                        <button 
                            onClick={handleResetFilter}
                            className="px-4 py-2 bg-gray-50 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-md" 
                            style={{ color: mode === 'dark' ? 'white' : '' }}>
                            Reset Filter
                        </button>
                    </div>
                    <div className='mt-6'>
                        <div>
                            <label className='font-bold' htmlFor='filterPrice'>Price</label><br />
                            <select 
                                value={filterPrice} 
                                onChange={(e) => setFilterPrice(e.target.value)} 
                                className="px-4 mt-1 py-3 w-full rounded-md bg-gray-50 border-transparent outline-0  focus:border-gray-500 focus:bg-white focus:ring-0 text-sm mb-4" 
                                style={{ backgroundColor: mode === 'dark' ? 'rgb(64 66 70)' : '', color: mode === 'dark' ? 'white' : '' }}>
                                <option value="">All Prices</option>
                                {uniquePrices.map((price, index) => (
                                    <option key={index} value={price}>{price}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            {/* Add any additional content for the sidebar */}
        </div>
    );
}

export default Filter2;
