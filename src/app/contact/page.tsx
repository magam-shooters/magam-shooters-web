import { colors } from "@/config";
import { FaClock, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaPhone, FaQuestionCircle } from "react-icons/fa";
import PageHero from "../components/PageHero";

export default function Contact() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <PageHero
        title="Contact Us"
        description="Get in touch with NSSF Sri Lanka for membership, training, competitions, or any inquiries"
      />

      {/* Quick Contact Info Cards */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid sm:grid-cols-3 gap-6 md:gap-8">
            {/* Email Card */}
            <div className="bg-white p-8 rounded-xl text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: colors.primary.blue }}>
                <FaEnvelope className="text-3xl text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ color: colors.primary.navy }}>Email</h3>
              <p className="font-semibold text-sm sm:text-base mb-2" style={{ color: colors.primary.blue }}>info@nssf.lk</p>
              <p className="text-gray-600 text-sm">www.nssf.lk</p>
            </div>

            {/* Phone Card */}
            <div className="bg-white p-8 rounded-xl text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: colors.primary.red }}>
                <FaPhone className="text-3xl text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ color: colors.primary.navy }}>Phone</h3>
              <p className="font-semibold text-sm sm:text-base mb-2" style={{ color: colors.primary.red }}>+94 11 234 5678</p>
              <p className="text-gray-600 text-sm">+94 77 123 4567</p>
            </div>

            {/* Address Card */}
            <div className="bg-white p-8 rounded-xl text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: colors.primary.yellow }}>
                <FaMapMarkerAlt className="text-3xl text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ color: colors.primary.navy }}>Address</h3>
              <p className="text-gray-600 text-sm leading-relaxed">National Shooting Federation<br />Colombo, Sri Lanka</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-wider mb-2" style={{ color: colors.primary.red }}>
              Get in Touch
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: colors.primary.navy }}>
              Send Us a Message
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Have questions about membership, training programs, or upcoming competitions? We're here to help!
            </p>
          </div>

          <form className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-xl shadow-lg space-y-6">
            {/* Name, Email, Subject Row */}
            <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
              <div>
                <label htmlFor="name" className="block font-semibold mb-2 text-sm" style={{ color: colors.primary.navy }}>
                  Name <span style={{ color: colors.primary.red }}>*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-white text-gray-900 border-2 border-gray-200 rounded-lg focus:outline-none placeholder-gray-400 text-sm transition-all duration-200"
                  style={{ focusBorderColor: colors.primary.blue }}
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block font-semibold mb-2 text-sm" style={{ color: colors.primary.navy }}>
                  Email <span style={{ color: colors.primary.red }}>*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-white text-gray-900 border-2 border-gray-200 rounded-lg focus:outline-none placeholder-gray-400 text-sm transition-all duration-200"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block font-semibold mb-2 text-sm" style={{ color: colors.primary.navy }}>
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 bg-white text-gray-900 border-2 border-gray-200 rounded-lg focus:outline-none placeholder-gray-400 text-sm transition-all duration-200"
                  placeholder="Subject"
                />
              </div>
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block font-semibold mb-2 text-sm" style={{ color: colors.primary.navy }}>
                Message <span style={{ color: colors.primary.red }}>*</span>
              </label>
              <textarea
                id="message"
                rows={8}
                className="w-full px-4 py-3 bg-white text-gray-900 border-2 border-gray-200 rounded-lg focus:outline-none placeholder-gray-400 text-sm resize-none transition-all duration-200"
                placeholder="Tell us how we can help you..."
                required
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="flex items-center gap-2 text-white font-bold py-4 px-10 rounded-lg transition-all duration-300 hover:shadow-lg uppercase text-sm tracking-wider"
                style={{ backgroundColor: colors.primary.navy }}
              >
                <FaPaperPlane className="text-lg" />
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Hours of Operation */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: colors.primary.blue }}>
                  <FaClock className="text-2xl text-white" />
                </div>
                <h3 className="text-2xl font-bold" style={{ color: colors.primary.navy }}>Hours of Operation</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                  <span className="font-semibold" style={{ color: colors.primary.navy }}>Monday - Friday:</span>
                  <span className="text-gray-700">8:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                  <span className="font-semibold" style={{ color: colors.primary.navy }}>Saturday:</span>
                  <span className="text-gray-700">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                  <span className="font-semibold" style={{ color: colors.primary.navy }}>Sunday:</span>
                  <span className="text-gray-700">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold" style={{ color: colors.primary.navy }}>Public Holidays:</span>
                  <span className="text-gray-700">Closed</span>
                </div>
              </div>
            </div>

            {/* FAQs */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: colors.primary.red }}>
                  <FaQuestionCircle className="text-2xl text-white" />
                </div>
                <h3 className="text-2xl font-bold" style={{ color: colors.primary.navy }}>Quick Answers</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold mb-2" style={{ color: colors.primary.navy }}>How do I become a member?</p>
                  <p className="text-gray-600 text-sm">Contact us via phone or email to discuss membership options. Visit our Clubs page for detailed information on membership plans.</p>
                </div>
                <div>
                  <p className="font-semibold mb-2" style={{ color: colors.primary.navy }}>Do you offer trial sessions?</p>
                  <p className="text-gray-600 text-sm">Yes! We offer introductory sessions for new members. Contact us to schedule your first visit to our facilities.</p>
                </div>
                <div>
                  <p className="font-semibold mb-2" style={{ color: colors.primary.navy }}>What coaching levels do you provide?</p>
                  <p className="text-gray-600 text-sm">We provide certified coaching for all skill levels, from beginners to Olympic-level athletes, across all shooting disciplines.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-wider mb-2" style={{ color: colors.primary.red }}>
              Our Location
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: colors.primary.navy }}>
              Visit Us
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find us at our headquarters in Colombo, Sri Lanka
            </p>
          </div>

          <div className="relative h-96 sm:h-[500px] md:h-[600px] overflow-hidden rounded-xl shadow-lg">
            <iframe
              title="NSSF Sri Lanka Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63371.80021177394!2d79.82743987910156!3d6.927078899999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25963120b1509%3A0x2db2c18a68712863!2sColombo%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1234567890"
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
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Have Questions?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Our team at NSSF Sri Lanka is ready to help you. Reach out to us anytime and we'll respond as quickly as possible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+94112345678"
              className="px-8 py-4 rounded-lg font-semibold text-white transition-all duration-200 hover:shadow-lg text-lg"
              style={{ backgroundColor: colors.primary.red }}
            >
              Call Us Now
            </a>
            <a
              href="mailto:info@nssf.lk"
              className="px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg border-2 border-white text-white hover:bg-white hover:text-gray-900 text-lg"
            >
              Send Email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
