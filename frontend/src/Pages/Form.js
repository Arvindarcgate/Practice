
import React, { useState } from "react";
import "../Style/Form.css";

const Form = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, age }),
      });
      const data = await res.json();
      console.log(data);
      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Form Page</h2>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          className="form-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter Your Age"
          className="form-input"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />

       
       
        <button className="form-button">Submit</button>
      </form>
    </div>
  );
};

export default Form;
