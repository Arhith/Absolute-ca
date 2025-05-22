import PageHeader from '@/components/layout/PageHeader';
import CTASection from '@/components/home/CTASection';
import ContactSection from '@/components/home/ContactSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Products | Absolute Laser & Manufacturing',
  description: 'Explore our premium stainless steel kitchen units and other precision-fabricated products.',
};

export default function ProductsPage() {
  return (
    <div>
      <PageHeader title="Products" />

      {/* Products Grid */}
      <section className="container-custom py-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="flex flex-col items-center bg-white rounded-lg shadow p-6 text-center"
          >
            <div className="bg-gray-200 flex-grow flex items-center justify-center rounded-md mb-4 min-h-[150px]">
              <p className="text-gray-500">Product Image</p>
            </div>
            <a
              href="#"
              className="mt-auto inline-block bg-primary text-white py-2 px-4 rounded hover:bg-opacity-90 transition"
            >
              Get a Quote
            </a>
          </div>
        ))}
      </section>

      {/* Product Details */}
      <section className="container-custom py-16 bg-white">
        <h2 className="text-3xl font-bold mb-4">Heavy Duty Stainless Steel Kitchen Units</h2>
        <p className="mb-4">Stainless Steel Cupboards And Wall Unit Cabinets Manufactured purely canadian.</p>
        <p className="mb-4">
          Our premium range of commercial stainless steel base units and wall units are manufactured by our factory.
          All our wall cupboards and base units are fully welded and supplied to the highest standards and quality
          and are manufactured to suit all brands of commercial pass through dishwashers. Suitable for both domestic
          and commercial environments.
        </p>
        <p className="mb-4">
          Available in standard sizes & bespoke solutions with various options available. These can be made to measure
          or modular.
        </p>
        <p className="mb-4">
          All our stainless steel commercial catering kitchens are manufactured by us in our Etobicoke based factory.
          Built to Canadian commercial kitchen standards. We can even provide a commercial solution to a domestic kitchen.
        </p>
        <p className="mb-4">
          We boast the highest quality product on the market and we also offer a delivery & installation service too!
        </p>
        <p className="mb-4">
          With all fabrication and customer requirements suitable in commercial kitchens or domestic properties we fabricate
          a range of high quality stainless steel kitchens.
        </p>
        <p className="mb-4">We fabricate stainless steel base units and wall units to various sizes for commercial kitchens.</p>
        <ul className="list-disc list-inside mb-6 space-y-1">
          <li>Modular Solutions with frame work</li>
          <li>Fully Welded</li>
          <li>Heavy Duty Stainless Steel</li>
          <li>Stainless Sinks Units</li>
          <li>Cupboard Units</li>
          <li>Corner Units</li>
          <li>Stainless Kitchens</li>
          <li>Made To Order</li>
          <li>Specialist Fabrication</li>
          <li>Various Heights</li>
          <li>Adjustable Shelves</li>
          <li>Shelf Units</li>
          <li>Cabinet Units</li>
          <li>Stainless Work Tops</li>
        </ul>
        <a
          href="#"
          className="inline-block bg-primary text-white py-3 px-6 rounded hover:bg-opacity-90 transition"
        >
          Get a Quote
        </a>
      </section>

      <CTASection />
      <ContactSection />
    </div>
  );
}