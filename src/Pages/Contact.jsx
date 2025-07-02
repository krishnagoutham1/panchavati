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
    <section id="contact" className="bg-blue-100">
      <HeadingText
        name="Get In Touch"
        description="Ready to start your agricultural investment journey? Contact us today for a personalized consultation and site visit."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto max-w-7xl gap-5">
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold text-nature-brown-900 mb-6">
              Contact Information
            </h3>

            <div className="space-y-6 text-left">
              <div className="flex items-start gap-4">
                <div className="bg-nature-green-100 p-3 rounded-lg">
                  <FaPhone className="h-6 w-6 text-nature-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-nature-brown-800 mb-1">
                    Phone
                  </h4>
                  <p className="text-nature-brown-600">+91 98765 43210</p>
                  <p className="text-nature-brown-600">+91 87654 32109</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-nature-green-100 p-3 rounded-lg">
                  <MdMailOutline className="h-6 w-6 text-nature-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-nature-brown-800 mb-1">
                    Email
                  </h4>
                  <p className="text-nature-brown-600">info@Panchavati .com</p>
                  <p className="text-nature-brown-600">sales@Panchavati .com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-nature-green-100 p-3 rounded-lg">
                  <FaLocationDot className="h-6 w-6 text-nature-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-nature-brown-800 mb-1">
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
                <div className="bg-nature-green-100 p-3 rounded-lg">
                  <FaRegClock className="h-6 w-6 text-nature-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-nature-brown-800 mb-1">
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

        <div className="bg-white/80 rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-nature-brown-900 mb-6">
            Send us a Message
          </h3>

          {isSubmitted ? (
            <div className="text-center relative top-1/4">
              <FiCheckCircle className="h-16 w-16 text-nature-green-500 mx-auto mb-4" />
              <h4 className="text-xl font-bold text-nature-green-600 mb-2">
                Thank You!
              </h4>
              <p className="text-nature-brown-600">
                Your message has been sent successfully. We&apos;ll get back to
                you within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-nature-brown-700 mb-2"
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
                    className="w-full px-4 py-3 border border-nature-brown-200 rounded-lg focus:ring-2 focus:ring-nature-green-500 focus:border-transparent transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-nature-brown-700 mb-2"
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
                    className="w-full px-4 py-3 border border-nature-brown-200 rounded-lg focus:ring-2 focus:ring-nature-green-500 focus:border-transparent transition-colors"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-nature-brown-700 mb-2"
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
                    className="w-full px-4 py-3 border border-nature-brown-200 rounded-lg focus:ring-2 focus:ring-nature-green-500 focus:border-transparent transition-colors"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label
                    htmlFor="plotSize"
                    className="block text-sm font-medium text-nature-brown-700 mb-2"
                  >
                    Interested Plot Size
                  </label>
                  <select
                    id="plotSize"
                    name="plotSize"
                    value={formData.plotSize}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-nature-brown-200 rounded-lg focus:ring-2 focus:ring-nature-green-500 focus:border-transparent transition-colors"
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
                  className="block text-sm font-medium text-nature-brown-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-nature-brown-200 rounded-lg focus:ring-2 focus:ring-nature-green-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Tell us about your requirements or any questions you have..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-nature-green-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <BsFillSendFill className="h-5 w-5" />
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>

      <div className="bg-green-600 rounded-2xl p-6 text-white mx-auto max-w-7xl my-8">
        <h4 className="text-xl font-bold mb-4">Schedule a Site Visit</h4>
        <p className="mb-4 opacity-90">
          Experience our plots firsthand with a guided tour. See the crops,
          facilities, and infrastructure up close.
        </p>
        <button className="bg-white text-black text-nature-green-600 px-6 py-2 rounded-lg font-semibold hover:bg-nature-green-50 transition-colors">
          Book Site Visit
        </button>
      </div>
    </section>
  );
};

export default Contact;
