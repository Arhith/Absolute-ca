import Link from "next/link";
import PageHeader from "@/components/layout/PageHeader";
import { ChevronRight } from "lucide-react";
import CTASection from "@/components/home/CTASection";

export const metadata = {
  title: "Services | Absolute Laser & Manufacturing",
  description: "Explore our comprehensive range of metal fabrication services including laser cutting, CNC machining, punching, and more.",
};

const serviceData = [
  {
    id: 1,
    title: 'Laser Cutting',
    description: 'We offer a fast turnaround laser cutting service, utilizing the latest in laser cutting technology for mild & stainless steels, aluminum, copper, brass and more.',
    link: '/services/cnc-laser-cutting'
  },
  {
    id: 2,
    title: 'CNC Punching',
    description: 'Fully automated, subcontract CNC punching with reduced operating and maintenance costs for our customers. We use the latest technology for efficiency and quality.',
    link: '/services/punching'
  },
  {
    id: 3,
    title: 'CNC Folding',
    description: 'We can fold an extensive range of parts, in varying thickness, length & materials. Our machinery gives us flexibility to handle projects of all sizes efficiently.',
    link: '/services/forming'
  },
  {
    id: 4,
    title: 'TIG & MIG Welding',
    description: 'Our modernized welding facilities offer quality TIG & MIG, Coded & Spot welding at a competitive rate and fast turnaround for all your project needs.',
    link: '/services/welding'
  },
  {
    id: 5,
    title: 'CNC Machining',
    description: 'As part of our complete manufacturing solution, we have on-site CNC milling and turning machinery to be a one-stop shop for our customers.',
    link: '/services/cnc-machining'
  },
  {
    id: 6,
    title: 'Finishing',
    description: 'We offer a large range of finishing options including powder coating and paint spraying in all standard colors, with specialized finishes available on request.',
    link: '/services/finishing'
  },
  {
    id: 7,
    title: 'Sheet Laser Cutting',
    description: 'Precise cutting of sheet metal materials with our advanced laser technology, ensuring accuracy and efficiency for your projects.',
    link: '/services/sheet-laser-cutting'
  },
  {
    id: 8,
    title: 'Tube Laser Cutting',
    description: 'Specialized laser cutting for tubes and pipes, allowing for precision cutting of complex shapes and openings in various materials.',
    link: '/services/tube-laser-cutting'
  },
  {
    id: 9,
    title: 'CNC Turning',
    description: 'High-precision CNC turning services for producing cylindrical parts to exact specifications with excellent surface finishes.',
    link: '/services/cnc-turning'
  }
];

export default function ServicesPage() {
  return (
    <div>
      <PageHeader
        title="Our Services"
        subtitle="Comprehensive metal fabrication solutions"
      />

      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl font-bold text-primary mb-4">
              Complete Metal Fabrication Services
            </h2>
            <p className="text-foreground mb-4">
              Absolute Laser offers a comprehensive range of metal fabrication services under one roof.
              From raw material processing to finishing and assembly, we provide end-to-end solutions
              for all your metal fabrication needs.
            </p>
            <p className="text-foreground">
              Our state-of-the-art facility is equipped with the latest technology and operated by skilled
              technicians to ensure the highest quality results for every project. Whether you need a single
              prototype or large-scale production, we have the capabilities to deliver.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceData.map((service) => (
              <Link href={service.link} key={service.id}>
                <div className="bg-muted h-full hover:shadow-md transition-shadow duration-300">
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <ChevronRight className="w-5 h-5 text-secondary mr-2" />
                      <h3 className="font-bold text-primary text-xl">{service.title}</h3>
                    </div>
                    <p className="text-foreground">{service.description}</p>
                    <div className="mt-4 pt-4 border-t border-gray-300">
                      <span className="text-secondary font-medium">Learn More</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">
                Quality Assurance
              </h2>
              <p className="text-foreground mb-4">
                At Absolute Laser, quality is our top priority. We maintain ISO 9001:2015 certification
                and adhere to strict quality control procedures throughout the production process.
              </p>
              <p className="text-foreground mb-4">
                Our quality management system ensures consistent results and reliable delivery. We perform
                regular inspections and testing to verify that all parts meet the required specifications.
              </p>
              <ul className="list-disc pl-5 text-foreground space-y-2">
                <li>ISO 9001:2015 certified quality management system</li>
                <li>Advanced quality control equipment</li>
                <li>Comprehensive inspection processes</li>
                <li>Material traceability</li>
                <li>Detailed quality documentation</li>
              </ul>
            </div>

            <div className="bg-gray-200 min-h-[300px] flex items-center justify-center">
              <p className="text-primary font-bold">Quality Assurance Image</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
