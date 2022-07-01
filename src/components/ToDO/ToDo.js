import React from "react";
import TaskTable from "../TaskTable/TaskTable";

const ToDo = () => {
  const enterKeyPressed = (e) => {
    if (e.key == "Enter") {
      //   e.preventDefault();
      console.log(e.target.value);

      const task = {
        TaskTitle: e.target.value,
      };

      const url = `http://localhost:5000/add-task`;
      fetch(url, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(task),
      })
        .then((res) => res.json())
        .then((inserted) => {
          //   console.log(inserted);
          if (inserted.success) {
            window.location.reload(true);
            alert("Task added successfully");
          } else {
            alert("Failed to add the task");
          }
        });
    }
  };
  return (
    <div className="lg:mx-20 h-screen ">
      <h1 className="mt-10 mb-20 text-2xl font-semibold">
        Welcome to your daily task manager.
      </h1>
      <section className=" flex ml-5 mb-3">
        <div class="form-control w-full max-w-xs">
          <input
            onKeyPress={enterKeyPressed}
            type="text"
            placeholder="Add a task"
            class="input input-bordered w-full max-w-xs"
          />
        </div>
        {/* <button onClick={} className="btn ml-1 normal-case">Add a task</button> */}
      </section>
      <TaskTable></TaskTable>
    </div>
  );
};
export default ToDo;
