const Buttons = () => {
  return (
    <div className="px-2.5 flex justify-end gap-x-8">
      <button className="border-2 rounded-full py-5 px-8 border-secondary text-secondary text-sm font-medium">
        Cancel
      </button>
      <button className="border-2 rounded-full py-5 px-8 border-secondary bg-secondary text-white text-sm font-medium">
        Save
      </button>
    </div>
  );
};

export default Buttons;
