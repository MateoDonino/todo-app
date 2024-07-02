"use client";
import React from "react";
import { FaPlus } from "react-icons/fa6";
import Modal from "./Modal";
import { useState } from "react";

const AddTask = () => {
  const [modalOpen, setModalOopen] = useState<boolean>(false);

  return (
    <div>
      <button
        onClick={() => setModalOopen(true)}
        className="btn btn-primary w-full text-lg"
      >
        Add New Task
        <FaPlus size={16} />
      </button>
      <Modal modalOpen={modalOpen} setModalOpen={setModalOopen}>
        modal for add todo
      </Modal>
    </div>
  );
};

export default AddTask;
