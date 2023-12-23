import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

const Featured = () => {
    const sliders = [
        {
            url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672076/NetflixApp/burger_emxbtv.jpg'
        },
        {
            url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672452/NetflixApp/pizza_osjb4f.jpg'
        },
        {
            url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672612/NetflixApp/ric_a4ewxo.jpg',
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNextSlide = () => {
        const newIndex = (currentIndex + 1) % sliders.length;
        setCurrentIndex(newIndex);
    };

    const goToPrevSlide = () => {
        const newIndex = (currentIndex - 1 + sliders.length) % sliders.length;
        setCurrentIndex(newIndex);
    };

    return (
        <div className='max-w-[1520px] h-[500px] w-full py-4 px-4 relative'>
            <div
                className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
                style={{ backgroundImage: `url(${sliders[currentIndex].url})` }}
            >
                <button onClick={goToPrevSlide} className=" absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-30 rounded-full p-2">
                    <BsChevronCompactLeft className="text-white" />
                </button>
                <button onClick={goToNextSlide} className=" absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-30 rounded-full p-2">
                    <BsChevronCompactRight className="text-white" />
                </button>
            </div>
        </div>
    );
}

export default Featured;
