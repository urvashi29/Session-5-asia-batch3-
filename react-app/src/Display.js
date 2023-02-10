import React from "react";
import PropTypes from "prop-types";

const Display = ({ firstName, age, arr, emp, isMarried, contact, strOrNum }) => {
  return (
    <>
      <h2>Display</h2>
      <p>{firstName}</p>
      <p>{age}</p>
      <p>
        {emp.map((item) => (
          <p>{item.salary}</p>
        ))}
      </p>
      <p>{isMarried}</p>
      {arr.map((a) => a)}
    </>
  );
};

// expected data type for props
Display.propTypes = {
  firstName: PropTypes.string,
  age: PropTypes.number,
  arr: PropTypes.arrayOf(PropTypes.number),
  isMarried: PropTypes.bool,
  emp: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      salary: PropTypes.number,
    })
  ),
  contact: PropTypes.shape({
    contactNumber: PropTypes.number,
    email: PropTypes.string,
  }),
  strOrNum: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

Display.defaultProps = {
  firstName: 'alex',
  age: 20,
  arr: [90, 10, 30],
  emp: [
    {
      id: 1,
      salary: 90090,
    },
    {
      id: 2,
      salary: 1098290,
    },
  ],
  contact: {
    contactNumber: 999999,
    email: "admin@gmail.com",
  },
  isMarried: true,
  strOrNum: 90,
};

export default Display;
