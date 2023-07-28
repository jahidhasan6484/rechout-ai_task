import Buttons from "./Components/Buttons";
import Form from "./Components/Form";
import Header from "./Components/Header";
import JobDescription from "./Components/JobDescription";
import Options from "./Components/Options";
import Status from "./Components/Status";
import Upload from "./Components/Upload";

function App() {
  return (
    <div className="bg-primary py-4">
      <Header />

      <div className="mx-4 ">
        <Status />
        <Options />

        <div className=" bg-white rounded-lg rounded-tl-none space-y-6 pb-4">
          <Form />
          <Upload />
          <JobDescription />
          <Buttons />
        </div>
      </div>
    </div>
  );
}

export default App;
