import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="relative">
      {/* Hero image with dark overlay */}
      <div className="relative h-[60vh] min-h-[400px] w-full">
        <Image
          src="/images/laser-cutting-hero.jpg"
          alt="Precision Sheet Metal Fabrication"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-60">
          <div className="container-custom h-full flex flex-col justify-center">
            <div className="max-w-2xl">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                PRECISION SHEET METAL FABRICATION & MANUFACTURING
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Gold banner */}
      <div className="bg-secondary text-white py-4">
        <div className="container-custom">
          <h2 className="text-lg md:text-xl font-medium text-center">
            ON-SITE MANUFACTURING SOLUTIONS FROM START TO FINISH
          </h2>
        </div>
      </div>

      {/* Quick service links */}
      <div className="container-custom py-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4 text-center">
        <div className="flex flex-col items-center">
          <div className="h-24 w-full relative mb-3 overflow-hidden">
            <Image
              src="/images/laser-cutting-closeup.jpg"
              alt="Sheet Laser Cutting"
              fill
              className="object-cover"
            />
          </div>
          <h3 className="text-sm font-medium text-primary">Sheet Laser Cutting</h3>
        </div>

        <div className="flex flex-col items-center">
          <div className="h-24 w-full relative mb-3 overflow-hidden">
            <Image
              src="/images/laser-cutting-hero.jpg"
              alt="Tube Laser Cutting"
              fill
              className="object-cover"
            />
          </div>
          <h3 className="text-sm font-medium text-primary">Tube Laser Cutting</h3>
        </div>

        <div className="flex flex-col items-center">
          <div className="h-24 w-full relative mb-3 overflow-hidden">
            <Image
              src="/images/cnc-machine.jpg"
              alt="CNC Machining"
              fill
              className="object-cover"
            />
          </div>
          <h3 className="text-sm font-medium text-primary">CNC Machining</h3>
        </div>

        <div className="flex flex-col items-center">
          <div className="h-24 w-full relative mb-3 overflow-hidden">
            <Image
              src="/images/cnc-machine.jpg"
              alt="CNC Turning"
              fill
              className="object-cover"
            />
          </div>
          <h3 className="text-sm font-medium text-primary">CNC Turning</h3>
        </div>

        <div className="flex flex-col items-center">
          <div className="h-24 w-full relative mb-3 overflow-hidden">
            <Image
              src="/images/cnc-punching.jpg"
              alt="Punching"
              fill
              className="object-cover"
            />
          </div>
          <h3 className="text-sm font-medium text-primary">Punching</h3>
        </div>

        <div className="flex flex-col items-center">
          <div className="h-24 w-full relative mb-3 overflow-hidden">
            <Image
              src="/images/sheet-metal-bending.jpg"
              alt="Forming (Press Brake)"
              fill
              className="object-cover"
            />
          </div>
          <h3 className="text-sm font-medium text-primary">Forming (Press Brake)</h3>
        </div>

        <div className="flex flex-col items-center">
          <div className="h-24 w-full relative mb-3 overflow-hidden">
            <Image
              src="/images/laser-cutting-closeup.jpg"
              alt="Finishing"
              fill
              className="object-cover"
            />
          </div>
          <h3 className="text-sm font-medium text-primary">Finishing</h3>
        </div>
      </div>

      {/* Intro section with 20+ years */}
      <div className="bg-primary text-white py-12">
        <div className="container-custom grid md:grid-cols-5 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              20+ Years Of <br />Engineering Excellence
            </h2>
          </div>
          <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 flex-shrink-0 bg-secondary flex items-center justify-center rounded-full">
                <span className="text-white font-bold">S</span>
              </div>
              <div>
                <p className="text-sm">Specialists in metal fabrication</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 flex-shrink-0 bg-secondary flex items-center justify-center rounded-full">
                <span className="text-white font-bold">Q</span>
              </div>
              <div>
                <p className="text-sm">Overall component quality</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 flex-shrink-0 bg-secondary flex items-center justify-center rounded-full">
                <span className="text-white font-bold">D</span>
              </div>
              <div>
                <p className="text-sm">On-time delivery is assured every time</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
