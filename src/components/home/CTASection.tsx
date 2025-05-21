import Link from 'next/link';

const CTASection = () => {
  return (
    <section className="py-20 bg-primary relative">
      <div className="container-custom relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          A ONE STOP SHOP
        </h2>
        <p className="text-xl text-secondary font-medium mb-8">
          FOR THE COMPLETE METAL FABRICATION SOLUTION
        </p>
        <Link
          href="/contact-us"
          className="inline-block bg-secondary text-white py-3 px-8 font-medium hover:bg-opacity-90 transition-all duration-200"
        >
          CONTACT US
        </Link>
      </div>
    </section>
  );
};

export default CTASection;
