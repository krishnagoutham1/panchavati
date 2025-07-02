import HeadingText from "../Components/HeadingText";
import TestimonialCard from "../Components/TestimonialCard";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <HeadingText
        name="What Our Investors Say"
        description="Don't just take our word for it. Here's what our satisfied plot owners have to say about their experience with GreenAcres."
      />
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </div>

      <div className="mt-16 max-w-7xl mx-auto bg-green-600 rounded-2xl p-8 text-white text-center">
        <h3 className="text-2xl font-bold mb-4">Join Our Growing Community</h3>
        <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
          Over 500+ satisfied investors have already started their agricultural
          journey with us. Be part of a community that values sustainable
          farming and profitable returns.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <div className="bg-white/20 rounded-lg p-4">
            <div className="text-2xl font-bold">500+</div>
            <div className="text-sm opacity-90">Happy Investors</div>
          </div>
          <div className="bg-white/20 rounded-lg p-4">
            <div className="text-2xl font-bold">1000+</div>
            <div className="text-sm opacity-90">Acres Developed</div>
          </div>
          <div className="bg-white/20 rounded-lg p-4">
            <div className="text-2xl font-bold">18%</div>
            <div className="text-sm opacity-90">Average Returns</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
