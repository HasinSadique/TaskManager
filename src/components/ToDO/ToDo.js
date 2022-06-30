import React from "react";
import TaskTable from "../TaskTable/TaskTable";

const ToDo = () => {
  const enterKeyPressed = (e) => {
    if (e.key == "Enter") {
      e.preventDefault();
      console.log(e.target.value);
    }
  };
  return (
    <div className="mx-20 ">
      <h1 className="my-10 text-2xl font-semibold">Tasks to complete</h1>
      <section className=" flex ml-5 mb-3">
        <div class="form-control w-full max-w-xs">
          <input
            onKeyPress={enterKeyPressed}
            type="text"
            placeholder="Add a task"
            class="input input-bordered w-full max-w-xs"
          />
        </div>
        <button className="btn ml-1 normal-case">Add a task</button>
      </section>
      <TaskTable></TaskTable>
    </div>
  );
};

export default ToDo;
