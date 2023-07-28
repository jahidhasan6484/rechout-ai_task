import { useEffect, useState } from "react";
import Buttons from "./Components/Buttons";
import Form from "./Components/Form";
import Header from "./Components/Header";
import JobDescription from "./Components/JobDescription";
import Options from "./Components/Options";
import Status from "./Components/Status";
import Upload from "./Components/Upload";

function App() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="bg-primary py-4">
      <Header screenWidth={screenWidth} />

      <div className="mx-4 ">
        <Status />
        <Options />

        <div className=" bg-white rounded-lg rounded-tl-none space-y-6 pb-4">
          <div className="md:grid grid-rows-3 grid-flow-col">
            <div className="md:row-span-3">
              {" "}
              <Form />{" "}
            </div>
            <div className="md:col-span-2">
              {" "}
              <Upload />
            </div>
            <div className="md:row-span-2 md:col-span-2">
              <JobDescription />
            </div>
          </div>
          <Buttons />
        </div>
      </div>
    </div>
  );
}

export default App;
