import arrowDown from "../../public/arrow-down.svg";
import setting from "../../public/setting.svg";

const Status = () => {
  return (
    <div className="mt-6 px-2.5 py-6 bg-white rounded-lg grid grid-cols-4 md:grid-cols-8 gap-4">
      <div className="col-span-2">
        <h1 className="font-semibold break-words">Job Title</h1>
        <div className="flex font-bold items-center justify-between">
          {" "}
          <p className="overflow-hidden">Frontend Developer</p>
          <div className="flex">
            <img src={arrowDown} alt="setting" />
            <img src={setting} alt="setting" />
          </div>
        </div>
      </div>

      <div>
        <h1 className="font-semibold break-words">Hiring Manager</h1>
        <p className="font-bold overflow-hidden">Nail Patel</p>
      </div>
      <div>
        <h1 className="font-semibold break-words">Department</h1>
        <p className="font-bold overflow-hidden">Technology</p>
      </div>
      <div>
        <h1 className="font-semibold break-words">Team</h1>
        <p className="font-bold overflow-hidden">Team-A</p>
      </div>
      <div>
        <h1 className="font-semibold break-words">Client</h1>
        <p className="font-bold overflow-hidden">John Doe</p>
      </div>
      <div>
        <h1 className="font-semibold break-words">Status</h1>
        <p className="font-bold overflow-hidden text-secondary">Open</p>
      </div>
      <div>
        <h1 className="font-semibold break-words">Priority</h1>
        <p className="font-bold overflow-hidden text-danger">High</p>
      </div>
    </div>
  );
};

export default Status;
