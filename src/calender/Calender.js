import React, { useState } from "react";
import PropTypes from "prop-types";

const Calender = (props) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <div className="calender">
      <div className="header">Header</div>
      <div className="days">Days</div>
      <div className="body">Cells</div>
    </div>
  );
};

Calender.propTypes = {};

export default Calender;
