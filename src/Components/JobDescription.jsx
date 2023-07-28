const JobDescription = () => {
  return (
    <div className="px-2.5 space-y-4">
      <h1 className="text-base font-semibold">Job Description</h1>

      <input
        type="text"
        placeholder="Copy/Paste your job description"
        className="w-full h-96 border border-gray rounded-lg px-4 py-2 focus:bg-gray focus:outline-none"
      />
    </div>
  );
};

export default JobDescription;
