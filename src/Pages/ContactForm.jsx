import { useState } from "react";
import { FiCheckCircle } from "react-icons/fi";
import { BsFillSendFill } from "react-icons/bs";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const {
  VITE_SERVICE_ID,
  VITE_TEMPLATE_ID,
  VITE_PUBLIC_ID,
  VITE_EMAIL_BASE_URL,
} = import.meta.env;

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    plotSize: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      service_id: VITE_SERVICE_ID,
      template_id: VITE_TEMPLATE_ID,
      user_id: VITE_PUBLIC_ID,
      template_params: {
        user_name: formData.name,
        user_mobile: formData.phone,
        user_email: formData.email,
        message: formData.message,
      },
    };
    try {
      const { status } = await axios.post(VITE_EMAIL_BASE_URL, data);
      status === 200 && setIsSubmitted(true);
      toast.success("Response Received !", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        type: "success",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        plotSize: "",
        message: "",
      });
    } catch (err) {
      console.log(err);
      toast.error("Failed, Please try after Sometime !", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        type: "error",
      });
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="h-full rounded-xl border-2 border-green-500 px-4 py-8 md:px-8 lg:px-16">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {isSubmitted && (
        <div className="relative h-full py-16 text-center lg:pt-24">
          <p
            className="absolute top-5 left-5 text-xl font-semibold text-blue-500"
            onClick={() => setIsSubmitted(false)}
          >
            &#8592; Return
          </p>
          <FiCheckCircle className="mx-auto mb-4 h-16 w-16 text-green-500" />
          <h4 className="mb-2 text-xl font-bold text-green-600">Thank You!</h4>
          <p>
            Your message has been sent successfully. We&apos;ll get back to you
            within 24 hours.
          </p>
        </div>
      )}

      {!isSubmitted && (
        <form onSubmit={handleSubmit} className="space-y-6">
          <h3 className="mb-4 text-center text-lg font-bold text-green-500 md:mb-6 md:text-2xl">
            Send us a Message
          </h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-lg border-2 border-green-500 px-4 py-3 outline-0 focus:ring-2 focus:ring-green-500"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-lg border-2 border-green-500 px-4 py-3 outline-0 focus:ring-2 focus:ring-green-500"
                placeholder="Enter your email"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="phone" className="mb-2 block text-sm font-medium">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full rounded-lg border-2 border-green-500 px-4 py-3 outline-0 focus:ring-2 focus:ring-green-500"
                placeholder="Enter your phone number"
              />
            </div>

            <div>
              <label
                htmlFor="plotSize"
                className="mb-2 block text-sm font-medium"
              >
                Interested Plot Size
              </label>
              <select
                id="plotSize"
                name="plotSize"
                value={formData.plotSize}
                onChange={handleChange}
                className="w-full rounded-lg border-2 border-green-500 px-4 py-3 outline-0 focus:ring-2 focus:ring-green-500"
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
            <label htmlFor="message" className="mb-2 block text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full rounded-lg border-2 border-green-500 px-4 py-3 outline-0 focus:ring-2 focus:ring-green-500"
              placeholder="Tell us about your requirements or any questions you have..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-green-600 px-6 py-3 font-semibold text-white duration-300 hover:bg-green-700"
          >
            <BsFillSendFill className="h-5 w-5" />
            Send Message
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
