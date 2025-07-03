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
