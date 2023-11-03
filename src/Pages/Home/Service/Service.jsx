import useService from "../../../Hooks/useService";
import ServiceCard from "./ServiceCard";

const Service = () => {
  const cards = useService();

  return (
    <div>
      <div className="text-center space-y-5 mb-12">
        <h3 className="text-orange-600 text-3xl font-semibold">Service</h3>
        <h2 className="text-5xl font-bold">Our Service Area</h2>
        <p className="text-[#737373] max-w-[717px] mx-auto">
          the majority have suffered alteration in some form, by injected
          humour, or randomized words which don't look even slightly believable.
        </p>
      </div>

      <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
        {cards.map((card) => (
          <ServiceCard key={card._id} card={card}></ServiceCard>
        ))}
      </div>
      <div className="flex justify-center">
        <button className="btn btn-outline btn-error mt-12 font-semibold text-base">
          More Servides
        </button>
      </div>
    </div>
  );
};

export default Service;
