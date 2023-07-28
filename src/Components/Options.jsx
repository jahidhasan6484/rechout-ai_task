import { useEffect, useState } from "react";
import { OptionsList } from "../Data/Data";

const Options = () => {
  const [options, setOptions] = useState([]);
  useEffect(() => {
    setOptions(OptionsList);
  }, []);
  return (
    <div className="px-2.5 py-6">
      {options.length > 0 &&
        options.map((option, index) => {
          return (
            <div
              key={index}
              className="h-16 flex items-center hover:bg-white px-2.5 rounded-t-lg"
            >
              <p>{option}</p>
            </div>
          );
        })}
    </div>
  );
};

export default Options;
