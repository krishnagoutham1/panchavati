import HeadingText from "../Components/HeadingText";
import TestimonialCard from "../Components/TestimonialCard";

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-container">
      <HeadingText
        name="What Our Investors Say"
        description="Don't just take our word for it. Here's what our satisfied plot owners have to say about their experience with Panchavati Farms."
      />
      <div className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </div>

      <div className="rounded-2xl bg-green-600 p-8 text-center text-white">
        <h3 className="mb-4 text-2xl font-bold">Join Our Growing Community</h3>
        <p className="text-md mx-auto mb-6 max-w-2xl opacity-90 md:text-lg">
          Over 500+ satisfied investors have already started their agricultural
          journey with us. Be part of a community that values sustainable
          farming and profitable returns.
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <div className="rounded-lg bg-white/20 p-4">
            <div className="text-2xl font-bold">500+</div>
            <div className="text-sm opacity-90">Happy Investors</div>
          </div>
          <div className="rounded-lg bg-white/20 p-4">
            <div className="text-2xl font-bold">1000+</div>
            <div className="text-sm opacity-90">Acres Developed</div>
          </div>
          <div className="rounded-lg bg-white/20 p-4">
            <div className="text-2xl font-bold">18%</div>
            <div className="text-sm opacity-90">Average Returns</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
