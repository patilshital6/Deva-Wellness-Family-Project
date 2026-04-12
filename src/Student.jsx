import React from "react";

function Student({ name, course }) {
  return (
    <div>
      <h2>Student Details</h2>
      <p>Name: {name}</p>
      <p>Course: {course}</p>
    </div>
  );
}

export default Student;