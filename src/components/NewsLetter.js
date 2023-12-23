import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can implement the logic to send the email to your backend or handle it as required.
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <section className="newsletter-section bg-gray-100 py-16">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">Subscribe to Yum Eats Newsletter</h2>
        <p className="text-center text-gray-600 mb-8">Stay updated with our latest dishes, offers, and events.</p>
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-center justify-center">
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="w-full md:w-2/3 px-4 py-2 rounded-l-md border border-gray-300 focus:border-blue-500 focus:outline-none mb-4 md:mb-0 md:mr-2" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button 
            type="submit" 
            className="bg-blue-600 text-white px-6 py-2 rounded-r-md hover:bg-blue-700 transition duration-300 ease-in-out"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
