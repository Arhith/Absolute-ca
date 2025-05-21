import { MapPin, Phone, Mail } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-2">GET IN TOUCH</h2>
              <h3 className="text-3xl font-bold text-secondary mb-4">Ready To Get Started?</h3>
              <p className="text-foreground mb-6">
                Give us a call or drop by anytime, we endeavour to answer all enquiries within 24 hours on business days.
                We will be happy to answer your questions.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-secondary mt-1 mr-4" />
                <div>
                  <h4 className="font-bold text-primary mb-1">Address</h4>
                  <p className="text-foreground">5 - Racine Road, Etobicoke - ON M9W 2Z2</p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="w-6 h-6 text-secondary mt-1 mr-4" />
                <div>
                  <h4 className="font-bold text-primary mb-1">Email</h4>
                  <a href="mailto:info@absolutelaser.ca" className="text-foreground hover:text-secondary transition-colors">
                    info@absolutelaser.ca
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="w-6 h-6 text-secondary mt-1 mr-4" />
                <div>
                  <h4 className="font-bold text-primary mb-1">Phone No</h4>
                  <a href="tel:(416)7495050" className="text-foreground hover:text-secondary transition-colors">
                    (416) 749 5050
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-muted p-8">
            <form>
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-primary mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter Your Name"
                    className="w-full px-4 py-2 border border-gray-300 focus:border-secondary focus:outline-none"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-primary mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter Your Email"
                    className="w-full px-4 py-2 border border-gray-300 focus:border-secondary focus:outline-none"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-primary mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Subject"
                    className="w-full px-4 py-2 border border-gray-300 focus:border-secondary focus:outline-none"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-primary mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    placeholder="Message"
                    className="w-full px-4 py-2 border border-gray-300 focus:border-secondary focus:outline-none"
                    required
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full bg-secondary text-white py-3 px-4 font-medium hover:bg-opacity-90 transition-all duration-200"
                  >
                    Send
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
