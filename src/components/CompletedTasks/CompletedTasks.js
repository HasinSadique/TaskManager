import React from "react";
import CompletedTaskTable from "../CompletedTasks/CompletedTaskTable/CompletedTaskTable";

const CompletedTasks = () => {
  return (
    <div>
      <h1 className="my-10 text-2xl font-semibold">List of Completed Tasks</h1>
      <CompletedTaskTable></CompletedTaskTable>
    </div>
  );
};

export default CompletedTasks;
