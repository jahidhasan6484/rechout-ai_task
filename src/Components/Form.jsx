import arrowDown from "../../public/arrow-down.svg";

const Form = () => {
  return (
    <form className="px-2.5 py-8 space-y-4">
      <div className="flex flex-col gap-3">
        <label>Job Title</label>
        <input
          className="border border-gray rounded-full py-4 px-6 focus:bg-gray focus:outline-none"
          type="text"
          placeholder="Frontend Developer"
        />
      </div>
      <div className="flex flex-col gap-3">
        <label>Hiring Manager</label>
        <input
          className="border border-gray rounded-full py-4 px-6 focus:bg-gray focus:outline-none"
          type="text"
          placeholder="Nail Patel"
        />
      </div>
      <div className="flex flex-col gap-3">
        <label>Department</label>
        <input
          className="border border-gray rounded-full py-4 px-6 focus:bg-gray focus:outline-none"
          type="text"
          placeholder="Tech"
        />
      </div>
      <div className="flex flex-col gap-3">
        <label>Team</label>
        <input
          className="border border-gray rounded-full py-4 px-6 focus:bg-gray focus:outline-none"
          type="text"
          placeholder="Team-A"
        />
      </div>
      <div className="flex flex-col gap-3">
        <label>Client</label>
        <input
          className="border border-gray rounded-full py-4 px-6 focus:bg-gray focus:outline-none"
          type="text"
          placeholder="John Doe"
        />
      </div>
      <div className="flex flex-col gap-3 relative">
        <label className="text-gray-600">Priority</label>
        <div className="relative">
          <input
            className="border border-gray rounded-full py-4 px-6 pr-10 focus:bg-gray focus:outline-none bg-white bg-right bg-no-repeat"
            type="text"
            placeholder="High"
          />
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <img
              src={arrowDown}
              alt="Arrow down"
              className="h-5 w-5 text-gray-400"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 relative">
        <label className="text-gray-600">Status</label>
        <div className="relative">
          <input
            className="border border-gray rounded-full py-4 px-6 pr-10 focus:bg-gray focus:outline-none bg-white bg-right bg-no-repeat"
            type="text"
            placeholder="Open"
          />
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <img
              src={arrowDown}
              alt="Arrow down"
              className="h-5 w-5 text-gray-400"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 relative">
        <label className="text-gray-600">Stage</label>
        <div className="relative">
          <input
            className="border border-gray rounded-full py-4 px-6 pr-10 focus:bg-gray focus:outline-none bg-white bg-right bg-no-repeat"
            type="text"
            placeholder="Initial"
          />
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <img
              src={arrowDown}
              alt="Arrow down"
              className="h-5 w-5 text-gray-400"
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default Form;
