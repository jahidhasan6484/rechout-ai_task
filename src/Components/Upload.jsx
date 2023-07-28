import upload from "../../public/export.svg";

const Upload = () => {
  return (
    <div className="px-2.5 space-y-4">
      <h1 className="text-base font-semibold">Upload your Job Description</h1>

      <div className="border-dotted border-secondary rounded-lg border-2 ">
        <div className="h-28 flex items-center justify-center mt-4 mb-2 space-x-2.5">
          <img src={upload} alt="Export" />

          <label className="block text-secondary font-bold">
            Drop or upload your file
          </label>
        </div>
        <input type="file" className="hidden" />
      </div>
    </div>
  );
};

export default Upload;
