import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

const serviceData = [
  {
    id: 1,
    title: 'Laser Cutting',
    description: 'We offer a fast turnaround laser cutting service, utilizing the latest in laser cutting technology for mild & stainless steels, aluminum, copper, brass and more.',
    image: '/images/laser-cutting-closeup.jpg',
    link: '/services/cnc-laser-cutting'
  },
  {
    id: 2,
    title: 'CNC Punching',
    description: 'Fully automated, subcontract CNC punching with reduced operating and maintenance costs for our customers. We use the latest technology for efficiency and quality.',
    image: '/images/cnc-punching.jpg',
    link: '/services/punching'
  },
  {
    id: 3,
    title: 'CNC Folding',
    description: 'We can fold an extensive range of parts, in varying thickness, length & materials. Our machinery gives us flexibility to handle projects of all sizes efficiently.',
    image: '/images/sheet-metal-bending.jpg',
    link: '/services/forming'
  },
  {
    id: 4,
    title: 'TIG & MIG Welding',
    description: 'Our modernized welding facilities offer quality TIG & MIG, Coded & Spot welding at a competitive rate and fast turnaround for all your project needs.',
    image: '/images/laser-cutting-hero.jpg',
    link: '/services/welding'
  },
  {
    id: 5,
    title: 'CNC Machining',
    description: 'As part of our complete manufacturing solution, we have on-site CNC milling and turning machinery to be a one-stop shop for our customers.',
    image: '/images/cnc-machine.jpg',
    link: '/services/cnc-machining'
  },
  {
    id: 6,
    title: 'Finishing',
    description: 'We offer a large range of finishing options including powder coating and paint spraying in all standard colors, with specialized finishes available on request.',
    image: '/images/laser-cutting-closeup.jpg',
    link: '/services/finishing'
  }
];

const ServicesSection = () => {
  return (
    <section className="py-16 bg-muted">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Services</h2>
          <p className="text-lg text-foreground">Our range of in-house manufacturing capabilities include:</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceData.map((service) => (
            <Link href={service.link} key={service.id}>
              <div className="bg-white h-full shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <ChevronRight className="w-4 h-4 text-secondary mr-2" />
                    <h3 className="font-bold text-primary text-xl">{service.title}</h3>
                  </div>
                  <p className="text-foreground">{service.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
