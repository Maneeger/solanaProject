'use client'; // This component uses client-side features (though basic here, good practice for interactive sections)

import React from 'react';
// If you need to use Link for the button, import it like this:
// import Link from 'next/link';

const Hero = () => {
  return (
    // The main container for the hero section.
    // Uses Tailwind classes for padding, background, text color, and centering content.
    // min-h-screen ensures it takes at least the full viewport height.
    // flex and items-center are for vertical centering of content.
    <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20 px-4 min-h-screen flex items-center justify-center">
      {/* Container for the text content, centered and with max width */}
      <div className="container mx-auto text-center max-w-2xl">
        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
         Seamless payments
        </h1>

        {/* Subheading or Description */}
        <p className="text-lg md:text-xl mb-8 opacity-90">
          A brief, compelling description of your product, service, or website.
          Highlight the key benefit or message for your visitors.
        </p>

        {/* Call-to-Action Button */}
        {/* You can replace the <a> tag with Next.js <Link> if navigating to an internal page */}
        {/* Example using Link: <Link href="/signup" className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-full text-lg transition duration-300">Sign Up Now</Link> */}
        <a
          href="#get-started" // Replace with your desired link (e.g., /signup, #contact)
          className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-full text-lg transition duration-300 shadow-lg"
        >
          Call to Action
        </a>
      </div>
    </section>
  );
};

export default Hero;
