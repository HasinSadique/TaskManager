import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Calendar = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="my-20 h-screen">
      <h1 className="mb-10 text-2xl font-semibold">Set a Date</h1>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        inline
      />
    </div>
  );
};

export default Calendar;
