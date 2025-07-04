import HeadingText from "../Components/HeadingText";
import ContactDetails from "./ContactDetails";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section id="contact" className="section-container">
      <HeadingText
        name="Get In Touch"
        description="Ready to start your agricultural investment journey? Contact us today for a personalized consultation and site visit."
      />

      <div className="mb-12 grid grid-cols-1 content-center items-center gap-5 space-y-8 text-left lg:grid-cols-2">
        <ContactDetails />
        <ContactForm />
      </div>

      {/* <div className="mb-8 rounded-2xl bg-green-600 p-8 text-center text-white">
        <h4 className="mb-4 text-2xl font-bold">Schedule a Site Visit</h4>
        <p className="text-md mx-auto mb-6 max-w-2xl opacity-90 md:text-lg">
          Experience our plots firsthand with a guided tour. See the crops,
          facilities, and infrastructure up close.
        </p>
        <button className="cursor-pointer rounded-lg bg-white px-6 py-2 font-semibold text-black transition-all duration-400 hover:bg-transparent hover:text-white hover:outline">
          Book Site Visit
        </button>
      </div> */}

      <div className="mb-16">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7626.821452347708!2d78.61763819721848!3d17.101453117223947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcba9b120bf9103%3A0xa0019039f7ccccfe!2sToolekalan%2C%20Telangana%20501509!5e0!3m2!1sen!2sin!4v1751619971958!5m2!1sen!2sin"
          width="600"
          height="450"
          className="mx-auto"
          allowfullscreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
