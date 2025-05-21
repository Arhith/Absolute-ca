import Link from "next/link";
import { MapPin, Phone, Mail, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      {/* Call to action banner */}
      <div className="bg-secondary py-12 text-center">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">A ONE STOP SHOP</h2>
          <p className="text-lg mb-6">FOR THE COMPLETE METAL FABRICATION SOLUTION</p>
          <a href="/contact-us" className="bg-primary text-white px-8 py-3 inline-block hover:bg-opacity-90 transition-all">
            CONTACT US
          </a>
        </div>
      </div>

      {/* Contact information */}
      <div className="bg-[#31383e] py-8">
        <div className="container-custom grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white bg-opacity-10 p-6 text-center">
            <h3 className="text-xl font-bold mb-4">FIND US</h3>
            <p className="flex items-center justify-center mb-2">
              <MapPin className="w-5 h-5 mr-2" />
              <span>5 - Racine Road, Etobicoke - ON M9W 2Z2</span>
            </p>
          </div>

          <div className="bg-white bg-opacity-10 p-6 text-center">
            <h3 className="text-xl font-bold mb-4">EMAIL US</h3>
            <p className="flex items-center justify-center mb-2">
              <Mail className="w-5 h-5 mr-2" />
              <a href="mailto:info@absolutelaser.ca" className="hover:text-secondary transition-colors duration-200">
                info@absolutelaser.ca
              </a>
            </p>
          </div>

          <div className="bg-white bg-opacity-10 p-6 text-center">
            <h3 className="text-xl font-bold mb-4">CALL US</h3>
            <p className="flex items-center justify-center mb-2">
              <Phone className="w-5 h-5 mr-2" />
              <a href="tel:(416)7495050" className="hover:text-secondary transition-colors duration-200">
                (416) 749 5050
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="border-t border-gray-700 py-12">
        <div className="container-custom grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-secondary">SERVICES</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/cnc-laser-cutting" className="hover:text-secondary transition-colors duration-200">
                  CNC Laser Cutting
                </Link>
              </li>
              <li>
                <Link href="/services/cnc-machining" className="hover:text-secondary transition-colors duration-200">
                  CNC Machining
                </Link>
              </li>
              <li>
                <Link href="/services/cnc-turning" className="hover:text-secondary transition-colors duration-200">
                  CNC Turning
                </Link>
              </li>
              <li>
                <Link href="/services/punching" className="hover:text-secondary transition-colors duration-200">
                  Punching
                </Link>
              </li>
              <li>
                <Link href="/services/forming" className="hover:text-secondary transition-colors duration-200">
                  Forming (Press Brake)
                </Link>
              </li>
              <li>
                <Link href="/services/finishing" className="hover:text-secondary transition-colors duration-200">
                  Finishing
                </Link>
              </li>
              <li>
                <Link href="/capability/sheet-laser-cutting" className="hover:text-secondary transition-colors duration-200">
                  Sheet Laser Cutting
                </Link>
              </li>
              <li>
                <Link href="/capability/tube-laser-cutting" className="hover:text-secondary transition-colors duration-200">
                  Tube Laser Cutting
                </Link>
              </li>
            </ul>
          </div>

          {/* More Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-secondary">MORE INFO</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-secondary transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="hover:text-secondary transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-secondary transition-colors duration-200">
                  News
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:text-secondary transition-colors duration-200">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-secondary transition-colors duration-200">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-use" className="hover:text-secondary transition-colors duration-200">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link href="/iso-9001" className="hover:text-secondary transition-colors duration-200">
                  ISO 9001:2015
                </Link>
              </li>
              <li>
                <Link href="/iso-45001" className="hover:text-secondary transition-colors duration-200">
                  ISO 45001:2018
                </Link>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-secondary">FOLLOW US</h3>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white bg-opacity-10 flex items-center justify-center rounded-sm hover:bg-secondary transition-colors duration-200"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white bg-opacity-10 flex items-center justify-center rounded-sm hover:bg-secondary transition-colors duration-200"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4 text-secondary">HEADQUARTERS</h3>
              <p className="flex items-center mb-2">
                <MapPin className="w-5 h-5 mr-2 text-secondary" />
                <span>5 - Racine Road, Etobicoke - ON M9W 2Z2</span>
              </p>
              <p className="flex items-center mb-2">
                <Phone className="w-5 h-5 mr-2 text-secondary" />
                <a href="tel:(416)7495050" className="hover:text-secondary transition-colors duration-200">
                  (416) 749 5050
                </a>
              </p>
              <p className="flex items-center mb-2">
                <Mail className="w-5 h-5 mr-2 text-secondary" />
                <a href="mailto:info@absolutelaser.ca" className="hover:text-secondary transition-colors duration-200">
                  info@absolutelaser.ca
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 py-4">
        <div className="container-custom">
          <p className="text-center text-sm">
            © {currentYear} by Absolute Laser & MFG
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
