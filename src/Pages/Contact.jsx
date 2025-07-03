import { useState } from "react";
import HeadingText from "../Components/HeadingText";
import { FiCheckCircle } from "react-icons/fi";
import { BsFillSendFill } from "react-icons/bs";
import { FaPhone } from "react-icons/fa6";
import { MdMailOutline } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa";
import SocialLinks from "../Components/SocialLinks";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    plotSize: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    setIsSubmitted(true);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <section id="contact" className="section-container">
      <HeadingText
        name="Get In Touch"
        description="Ready to start your agricultural investment journey? Contact us today for a personalized consultation and site visit."
      />

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        <div className="space-y-8">
          <div>
            <h3 className="text-nature-brown-900 mb-6 text-2xl font-bold">
              Contact Information
            </h3>

            <div className="space-y-6 text-left">
              <div className="flex items-start gap-4">
                <div className="bg-nature-green-100 rounded-lg p-3">
                  <FaPhone className="text-nature-green-600 h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-nature-brown-800 mb-1 font-semibold">
                    Phone
                  </h4>
                  <p className="text-nature-brown-600">+91 98765 43210</p>
                  <p className="text-nature-brown-600">+91 87654 32109</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-nature-green-100 rounded-lg p-3">
                  <MdMailOutline className="text-nature-green-600 h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-nature-brown-800 mb-1 font-semibold">
                    Email
                  </h4>
                  <p className="text-nature-brown-600">info@Panchavati .com</p>
                  <p className="text-nature-brown-600">sales@Panchavati .com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-nature-green-100 rounded-lg p-3">
                  <FaLocationDot className="text-nature-green-600 h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-nature-brown-800 mb-1 font-semibold">
                    Address
                  </h4>
                  <p className="text-nature-brown-600">
                    GreenAcres Agricultural Plots
                    <br />
                    Kanakapura Road, Bangalore
                    <br />
                    Karnataka 560062
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-nature-green-100 rounded-lg p-3">
                  <FaRegClock className="text-nature-green-600 h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-nature-brown-800 mb-1 font-semibold">
                    Office Hours
                  </h4>
                  <p className="text-nature-brown-600">
                    Monday - Saturday: 9:00 AM - 6:00 PM
                    <br />
                    Sunday: 10:00 AM - 4:00 PM
                  </p>
                </div>
              </div>

              <div className="flex justify-center py-3">
                <SocialLinks />
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-white/80 p-8 shadow-lg">
          <h3 className="text-nature-brown-900 mb-6 text-2xl font-bold">
            Send us a Message
          </h3>

          {isSubmitted ? (
            <div className="relative top-1/4 text-center">
              <FiCheckCircle className="text-nature-green-500 mx-auto mb-4 h-16 w-16" />
              <h4 className="text-nature-green-600 mb-2 text-xl font-bold">
                Thank You!
              </h4>
              <p className="text-nature-brown-600">
                Your message has been sent successfully. We&apos;ll get back to
                you within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="text-nature-brown-700 mb-2 block text-sm font-medium"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="border-nature-brown-200 focus:ring-nature-green-500 w-full rounded-lg border px-4 py-3 transition-colors focus:border-transparent focus:ring-2"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="text-nature-brown-700 mb-2 block text-sm font-medium"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="border-nature-brown-200 focus:ring-nature-green-500 w-full rounded-lg border px-4 py-3 transition-colors focus:border-transparent focus:ring-2"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="phone"
                    className="text-nature-brown-700 mb-2 block text-sm font-medium"
                  >
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="border-nature-brown-200 focus:ring-nature-green-500 w-full rounded-lg border px-4 py-3 transition-colors focus:border-transparent focus:ring-2"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label
                    htmlFor="plotSize"
                    className="text-nature-brown-700 mb-2 block text-sm font-medium"
                  >
                    Interested Plot Size
                  </label>
                  <select
                    id="plotSize"
                    name="plotSize"
                    value={formData.plotSize}
                    onChange={handleChange}
                    className="border-nature-brown-200 focus:ring-nature-green-500 w-full rounded-lg border px-4 py-3 transition-colors focus:border-transparent focus:ring-2"
                  >
                    <option value="">Select plot size</option>
                    <option value="1-acre">1 Acre - Starter Plot</option>
                    <option value="2.5-acres">2.5 Acres - Premium Plot</option>
                    <option value="5-acres">5 Acres - Estate Plot</option>
                    <option value="custom">Custom Size</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="text-nature-brown-700 mb-2 block text-sm font-medium"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="border-nature-brown-200 focus:ring-nature-green-500 w-full resize-none rounded-lg border px-4 py-3 transition-colors focus:border-transparent focus:ring-2"
                  placeholder="Tell us about your requirements or any questions you have..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="hover:bg-nature-green-700 flex w-full items-center justify-center gap-2 rounded-lg bg-green-600 px-6 py-3 font-semibold text-white transition-colors duration-300"
              >
                <BsFillSendFill className="h-5 w-5" />
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>

      <div className="rounded-2xl bg-green-600 p-8 text-center text-white">
        <h4 className="mb-4 text-2xl font-bold">Schedule a Site Visit</h4>
        <p className="text-md mx-auto mb-6 max-w-2xl opacity-90 md:text-lg">
          Experience our plots firsthand with a guided tour. See the crops,
          facilities, and infrastructure up close.
        </p>
        <button className="cursor-pointer rounded-lg bg-white px-6 py-2 font-semibold text-black transition-all duration-400 hover:bg-transparent hover:text-white hover:outline">
          Book Site Visit
        </button>
      </div>
    </section>
  );
};

export default Contact;
