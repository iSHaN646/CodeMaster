import React from "react";
import { BsChevronUp } from "react-icons/bs";

const EditorFooter = ({ handleSubmit, handleRun }) => {
  return (
    <div className=" flex  z-10 w-full">
      <div className=" mx-5 my-[10px] flex justify-center w-full">
     
        <div className="  flex items-center space-x-4">
          <button
            className="px-3 py-1.5 text-sm font-medium items-center whitespace-nowrap transition-all focus:outline-none inline-flex bg-dark-fill-3  hover:bg-dark-fill-2 text-dark-label-2 rounded-lg"
            onClick={handleRun}
          >
            Run
          </button>
          <button
            className="px-3 py-1.5 font-medium items-center transition-all focus:outline-none inline-flex text-sm text-white bg-dark-green-s hover:bg-green-3 rounded-lg"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};
export default EditorFooter;
