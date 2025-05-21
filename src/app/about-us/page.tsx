import PageHeader from "@/components/layout/PageHeader";
import CTASection from "@/components/home/CTASection";

export const metadata = {
  title: "About Us | Absolute Laser & Manufacturing",
  description: "Learn about Absolute Laser & Manufacturing - our history, expertise, and commitment to quality in metal fabrication and laser cutting.",
};

export default function AboutPage() {
  return (
    <div>
      <PageHeader
        title="About Us"
        subtitle="The story behind Absolute Laser"
      />

      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">
                20+ Years Of Engineering Excellence
              </h2>

              <p className="text-foreground mb-6">
                Absolute Laser specializes in metal fabrication, CNC metal cutting, laser cutting,
                metal punching, metal formation, and metal manufacturing. With expertise in laser
                cutting and custom metal fabrication, we deliver precision-crafted steel and aluminum
                products tailored to your exact needs.
              </p>

              <p className="text-foreground mb-6">
                From design to production, our skilled team ensures exceptional quality and attention
                to detail. Whatever your requirements, we provide innovative metal solutions for every
                project. Contact us today to bring your vision to life!
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-muted p-4">
                  <h3 className="font-bold text-primary mb-2">ISO 9001:2015</h3>
                  <p className="text-sm text-foreground">
                    Certified quality management system ensuring consistent quality products.
                  </p>
                </div>

                <div className="bg-muted p-4">
                  <h3 className="font-bold text-primary mb-2">ISO 45001:2018</h3>
                  <p className="text-sm text-foreground">
                    Occupational Health and Safety Management Systems Certified.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-200 min-h-[400px] flex items-center justify-center">
              <p className="text-primary font-bold">Company Image</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            Our Approach
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 shadow-sm">
              <div className="w-16 h-16 bg-secondary flex items-center justify-center text-white font-bold text-2xl mb-4">
                01
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Specialists in Metal Fabrication</h3>
              <p className="text-foreground">
                We have specialized expertise in all aspects of metal fabrication, from CNC laser cutting to
                complete assembly.
              </p>
            </div>

            <div className="bg-white p-6 shadow-sm">
              <div className="w-16 h-16 bg-secondary flex items-center justify-center text-white font-bold text-2xl mb-4">
                02
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Quality Components</h3>
              <p className="text-foreground">
                Quality is at the heart of everything we do. We maintain stringent quality control throughout
                the entire manufacturing process.
              </p>
            </div>

            <div className="bg-white p-6 shadow-sm">
              <div className="w-16 h-16 bg-secondary flex items-center justify-center text-white font-bold text-2xl mb-4">
                03
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">On-time Delivery</h3>
              <p className="text-foreground">
                We understand the importance of timely delivery. Our efficient processes ensure your
                projects are completed on schedule, every time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            Factory Description and Services
          </h2>

          <div className="bg-muted p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border-b border-gray-200 py-3">
                <div className="font-semibold text-primary mb-1">PRODUCTION LINE</div>
                <div className="text-foreground">Metal stamping, Laser cutting, Sheet metal, Welding, Spraying, Electrophoresis, Assembly.</div>
              </div>

              <div className="border-b border-gray-200 py-3">
                <div className="font-semibold text-primary mb-1">MATERIAL</div>
                <div className="text-foreground">Carbon steel, Stainless steel, Aluminum, Copper, Brass, Bronze, Customized.</div>
              </div>

              <div className="border-b border-gray-200 py-3">
                <div className="font-semibold text-primary mb-1">PROCEDURES</div>
                <div className="text-foreground">Blanking, Punching, Bending, Cutting, Milling, Dilling, Tapping, Riveting, Welding, Assembling, Packing.</div>
              </div>

              <div className="border-b border-gray-200 py-3">
                <div className="font-semibold text-primary mb-1">TOLERANCE</div>
                <div className="text-foreground">+/- 0.01mm</div>
              </div>

              <div className="border-b border-gray-200 py-3">
                <div className="font-semibold text-primary mb-1">FINISH</div>
                <div className="text-foreground">Powder, Spraying, Sand Blasting, Electroplating, Electrophoresis, Anodizing, Passivating, Customized.</div>
              </div>

              <div className="border-b border-gray-200 py-3">
                <div className="font-semibold text-primary mb-1">COLOR</div>
                <div className="text-foreground">Natural, Conversonial, Silver, Grey, Black, White, Red, Blue, Green, Yellow, Matte, Glossy, Customized.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
