import React from "react";
import { FaPlus } from "react-icons/fa6";

const AddTask = () => {
  return (
    <div>
      <button className="btn btn-primary w-full text-lg">
        Add New Task
        <FaPlus size={16} />
      </button>
    </div>
  );
};

export default AddTask;
