import { COLORS } from "@/config/designTokens";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";
import CTASection from "../components/CTASection";
import PageHero from "../components/PageHero";
import SectionHeader from "../components/SectionHeader";

export default function Contact() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <PageHero
        title="Contact Us"
        description="Get in touch with our team to discuss membership, coaching, or any inquiries"
      />

      {/* Quick Contact Info Cards */}
      <section className={`bg-gradient-to-b from-${COLORS.BG_LIGHT} to-white py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8`}>
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-6 md:gap-8">
            {/* Email Card */}
            <div className="bg-white p-8 sm:p-10 text-center hover:shadow-lg transition duration-300">
              <MdEmail className="mx-auto mb-4 text-6xl text-[#00AEEF]" />
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Email</h3>
              <p className="text-[#00AEEF] font-semibold text-sm sm:text-base mb-2">info@magamshooters.com</p>
              <p className="text-gray-600 text-sm">www.magamshooters.com</p>
            </div>

            {/* Phone Card */}
            <div className="bg-white p-8 sm:p-10 text-center hover:shadow-lg transition duration-300">
              <MdPhone className="mx-auto mb-4 text-6xl text-[#00AEEF]" />
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Phone</h3>
              <p className="text-[#00AEEF] font-semibold text-sm sm:text-base mb-2">+1 (800) 123-4567</p>
              <p className="text-gray-600 text-sm">+1 (800) 123-4566</p>
            </div>

            {/* Address Card */}
            <div className="bg-white p-8 sm:p-10 text-center hover:shadow-lg transition duration-300">
              <MdLocationOn className="mx-auto mb-4 text-6xl text-[#00AEEF]" />
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Address</h3>
              <p className="text-gray-600 text-sm leading-relaxed">176 W street name,<br />New York, NY 10014</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <SectionHeader
            title="Contact Us"
            subtitle="Get in Touch"
            description="We are very excited to go over this exceptional tournament that literally left the players and the crowd breathless!"
          />

          <form className="space-y-6 sm:space-y-8">
            {/* Name, Email, Subject Row */}
            <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
              <div>
                <label htmlFor="name" className="block text-gray-900 font-semibold mb-2 text-sm">
                  Name <span className={`text-${COLORS.PRIMARY_MAIN}`}>*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-gray-50 text-gray-900 border border-gray-300 focus:border-blue-500 focus:outline-none placeholder-gray-500 text-sm"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-900 font-semibold mb-2 text-sm">
                  Email <span className={`text-${COLORS.PRIMARY_MAIN}`}>*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-gray-50 text-gray-900 border border-gray-300 focus:border-blue-500 focus:outline-none placeholder-gray-500 text-sm"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-900 font-semibold mb-2 text-sm">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 bg-gray-50 text-gray-900 border border-gray-300 focus:border-blue-500 focus:outline-none placeholder-gray-500 text-sm"
                  placeholder="Subject"
                />
              </div>
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-gray-900 font-semibold mb-2 text-sm">
                Message <span className={`text-${COLORS.PRIMARY_MAIN}`}>*</span>
              </label>
              <textarea
                id="message"
                rows={8}
                className="w-full px-4 py-3 bg-gray-50 text-gray-900 border border-gray-300 focus:border-blue-500 focus:outline-none placeholder-gray-500 text-sm resize-none"
                placeholder="Your message..."
                required
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-[#00AEEF] hover:bg-[#0096C7] text-white font-bold py-3 px-12 transition duration-300 uppercase text-sm tracking-wider"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className={`bg-gradient-to-b from-${COLORS.BG_LIGHT} to-white py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8`}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Hours of Operation */}
            <div>
              <h3 className={`text-2xl sm:text-3xl font-bold text-${COLORS.PRIMARY_MAIN} mb-6`}>Hours of Operation</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-900 font-semibold">Monday - Friday:</span>
                  <span className="text-gray-600">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-900 font-semibold">Saturday:</span>
                  <span className="text-gray-600">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-900 font-semibold">Sunday:</span>
                  <span className="text-gray-600">Closed</span>
                </div>
              </div>
            </div>

            {/* FAQs */}
            <div>
              <h3 className={`text-2xl sm:text-3xl font-bold text-${COLORS.PRIMARY_MAIN} mb-6`}>Quick Answers</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-900 font-semibold mb-2">How do I become a member?</p>
                  <p className="text-gray-600 text-sm">Contact us via phone or email to discuss membership options that suit your goals.</p>
                </div>
                <div>
                  <p className="text-gray-900 font-semibold mb-2">Do you offer trial sessions?</p>
                  <p className="text-gray-600 text-sm">Yes! We offer complimentary trial sessions for new members. Reach out to schedule yours.</p>
                </div>
                <div>
                  <p className="text-gray-900 font-semibold mb-2">What coaching levels do you provide?</p>
                  <p className="text-gray-600 text-sm">We offer coaching for all skill levels, from beginners to professional athletes.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="Visit Us"
            subtitle="Our Location"
          />

          <div className="relative h-96 sm:h-[500px] md:h-[600px] overflow-hidden shadow-lg">
            <iframe
              title="Magam Shooters Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.1234567890123!2d-74.00601!3d40.71278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Have Questions?"
        description="Our team is ready to help you. Reach out to us anytime and we'll respond as quickly as possible."
        primaryButton={{ text: "Schedule a Call", href: "/contact" }}
      />
    </div>
  );
}
