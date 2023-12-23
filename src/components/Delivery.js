import React from 'react';

const Delivery = () => {
    return (
        <div className="w-full bg-white py-16 px-4">
            <h3 className="text-orange-500 font-bold text-2xl text-center mb-8">Quick Delivery App</h3>

            <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <img
                    className="w-full md:w-[550px] mx-auto my-4"
                    src="https://res.cloudinary.com/ehizeex-shop/image/upload/v1672676822/NetflixApp/FC_two_phones.6ec9a842f905769677f9_m91off.webp"
                    alt="Two phones displaying the Quick Delivery App interface."
                />

                <div className="flex flex-col justify-center">
                    <p className="text-[#00df9a] font-bold mb-2">Get the App</p>
                    <h1 className="text-4xl md:text-3xl text-2xl font-bold py-2">Limitless Convenience on-demand</h1>
                    <p>

                        "Introducing Yum Eats Delivery: Your gateway to gourmet delights delivered straight to your doorstep. Dive into a world of flavors, from sizzling grills to exotic delicacies, all curated for the discerning palate. With our swift and seamless service, savor restaurant-quality meals from the comfort of your home. Every dish is crafted with passion, ensuring freshness and authenticity in every bite. Whether it's a cozy dinner, a festive feast, or a quick snack, Yum Eats Delivery promises culinary excellence with every order. Experience the joy of dining in, without stepping out. Bon appétit!"</p>
                    <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
                </div>
            </div>
        </div>
    );
}

export default Delivery;
