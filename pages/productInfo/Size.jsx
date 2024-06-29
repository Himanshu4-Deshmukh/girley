import React from "react";
import PropTypes from 'prop-types';

function Size({ handleSize, selectedSize }) {
    const sizes = ["S", "M", "L", "XL"];

    return (
        <div className="flex flex-col gap-5">
            <h1 className="text-4xl font-bold max-cd:text-3xl">Size</h1>
            <div
                className="flex gap-2 flex-wrap"
                onChange={(e) => {
                    handleSize(e);
                }}
            >
                {sizes.map((size, index) => {
                    const isSelected = size === selectedSize;
                    const style = isSelected
                        ? "bg-black text-white text-2xl px-6 py-2 mx-2 max-md:text-xl"
                        : "border text-2xl px-6 bg-gray-200 py-2 mx-2 max-md:text-xl";

                    return (
                        <div key={index} className="my-4">
                            <input
                                type="radio"
                                name="size"
                                id={size}
                                value={size}
                                className="hidden"
                                checked={isSelected}
                                onChange={handleSize}
                            />
                            <label htmlFor={size} className={style}>
                                {size}
                            </label>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

Size.propTypes = {
    handleSize: PropTypes.func.isRequired,
    selectedSize: PropTypes.string.isRequired,
};

export default Size;
