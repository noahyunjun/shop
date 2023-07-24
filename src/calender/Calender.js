import React, { useState } from "react";
import PropTypes from "prop-types";
import { subMonths, addMonths } from "date-fns";
import RenderHeader from "./RenderHeader";
import RenderDays from "./RenderDays";
import RendrCells from "./RendrCells";

const Calender = (props) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };
  const onDateClick = (day) => {
    setSelectedDate(day);
  };
  return (
    <div className="calender">
      <RenderHeader
        currentMonth={currentMonth}
        prevMonth={prevMonth}
        nextMonth={nextMonth}
      />

      <RenderDays />

      <RendrCells
        currentMonth={currentMonth}
        selectedDate={selectedDate}
        onDateClick={onDateClick}
      />
    </div>
  );
};

Calender.propTypes = {};

export default Calender;
