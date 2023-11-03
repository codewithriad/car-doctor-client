import about from "../../../assets/images/about_us/person.jpg";
import about_part from "../../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="hero mt-[130px] mb-32">
      <div className="hero-content flex-col lg:flex-row">
        <div className="lg:w-1/2 relative">
          <img src={about} className="w-3/4 rounded-lg shadow-2xl" />
          <img
            src={about_part}
            className="w-1/2 absolute border-8 border-white right-5 top-1/2 rounded-lg shadow-2xl"
          />
        </div>
        <div className="lg:w-1/2">
          <h3 className="text-3xl font-bold text-orange-400 mb-5">About Us</h3>
          <h1 className="text-5xl font-bold mb-7 max-w-[376px]">
            We are qualified & of experience in this field
          </h1>
          <p className="py-6 mb-5 text-[#737373]">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <p className="py-6 mb-7 text-[#737373]">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <button className="btn bg-[#FF3811] text-white">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
