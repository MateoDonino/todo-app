"use client";
import React, { FormEventHandler } from "react";
import { FaPlus } from "react-icons/fa6";
import Modal from "./Modal";
import { useState } from "react";
import { addTodo } from "../../api";

const AddTask = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const [newTaskValue, setNewTaskValue] = useState<string>("");
  const handleSumbitNewTodo: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await addTodo({ id: "3", text: newTaskValue });
    setNewTaskValue("");
    setModalOpen(false);
  };

  return (
    <div>
      <button
        onClick={() => setModalOpen(true)}
        className="btn btn-primary w-full text-lg"
      >
        Add New Task
        <FaPlus size={16} />
      </button>
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <form onSubmit={handleSumbitNewTodo}>
          <h3 className="text-lg font-bold">Add New Task</h3>{" "}
          <div className="modal-action">
            <input
              value={newTaskValue}
              onChange={(e) => setNewTaskValue(e.target.value)}
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
            <button className="btn" type="submit">
              Sumbit
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AddTask;
