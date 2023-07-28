import arrow from "../../assets/arrow.png";

const Buttons = () => {
  return (
    <div className="flex justify-between">
      <div>
        <button className="border rounded-full px-8 py-2 font-medium">
          Back
        </button>
      </div>
      <div className="flex gap-8">
        <button className="border border-secondary text-secondary rounded-full px-8 py-2 font-medium">
          Skip
        </button>
        <button className="border border-secondary bg-secondary text-white rounded-full px-12 py-2 flex items-center gap-6 font-medium">
          Get Started <img src={arrow} alt="Arrow" />
        </button>
      </div>
    </div>
  );
};

export default Buttons;
