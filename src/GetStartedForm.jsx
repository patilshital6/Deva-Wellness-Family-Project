// GetStartedForm.js
import React, { useState } from "react";

function GetStartedForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    batch: "",
    batchType: "",
    birthdate: "",
    password: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registration Data:", formData);
    setSubmitted(true);
    // Send this data to backend if needed
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>🏋️‍♂️ Batch Registration</h2>

      {submitted ? (
        <p style={styles.success}>
          ✅ Registration successful! We will contact you soon.
        </p>
      ) : (
        <form style={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{ ...styles.input, gridColumn: "1 / 2" }}
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ ...styles.input, gridColumn: "2 / 3" }}
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            style={{ ...styles.input, gridColumn: "1 / 2" }}
          />

          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
            style={{ ...styles.input, gridColumn: "2 / 3" }}
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>

          <select
            name="batch"
            value={formData.batch}
            onChange={handleChange}
            required
            style={{ ...styles.input, gridColumn: "1 / 2" }}
          >
            <option value="">Select Batch</option>
            <option value="Morning">Morning (6 AM - 8 AM)</option>
            <option value="Afternoon">Afternoon (12 PM - 2 PM)</option>
            <option value="Evening">Evening (5 PM - 7 PM)</option>
          </select>

          <select
            name="batchType"
            value={formData.batchType}
            onChange={handleChange}
            required
            style={{ ...styles.input, gridColumn: "2 / 3" }}
          >
            <option value="">Select Batch Type</option>
            <option value="Regular">Regular</option>
            <option value="Advanced">Advanced</option>
          </select>

          <input
            type="date"
            name="birthdate"
            value={formData.birthdate}
            onChange={handleChange}
            required
            style={{ ...styles.input, gridColumn: "1 / 3" }}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            style={{ ...styles.input, gridColumn: "1 / 2" }}
          />

          <button type="submit" style={{ ...styles.submitBtn, gridColumn: "1 / 3" }}>
            Register Now
          </button>
        </form>
      )}
    </div>
  );
}

const styles = {
  container: {
    minHeight: "85vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "50px 20px",
    background: "linear-gradient(135deg, #0f0c29, #302b63, #ff9800)",
    borderRadius: "20px",
    color: "#fff",
    boxShadow: "0 20px 60px rgba(0,0,0,0.7)",
    transition: "all 0.5s ease",
  },
  heading: {
    fontSize: "38px",
    marginBottom: "40px",
    color: "#ffa500",
    textShadow: "2px 2px 12px rgba(255,165,0,0.7)",
    fontWeight: "800",
  },
  form: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px",
    width: "100%",
    maxWidth: "550px",
  },
  input: {
    padding: "14px",
    borderRadius: "10px",
    border: "2px solid #ffa500",
    fontSize: "16px",
    outline: "none",
    backgroundColor: "#222",
    color: "#fff",
    boxShadow: "0 5px 15px rgba(255,165,0,0.2)",
    transition: "all 0.3s ease",
  },
  submitBtn: {
    padding: "16px",
    background: "linear-gradient(45deg, #ffa500, #ffb74d)",
    color: "#000",
    fontSize: "18px",
    fontWeight: "bold",
    border: "none",
    borderRadius: "12px",
    cursor: "pointer",
    boxShadow: "0 8px 25px rgba(255,165,0,0.5)",
    transition: "all 0.4s ease",
  },
  success: {
    fontSize: "22px",
    color: "#00ff7f",
    textAlign: "center",
    marginTop: "20px",
    textShadow: "1px 1px 8px rgba(0,255,127,0.7)",
    animation: "fadeIn 1s ease-in-out",
  },
};

// Hover & focus effects
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
  input:focus, select:focus {
    border-color: #7CFC9A;
    box-shadow: 0 0 12px #7CFC9A;
    transform: scale(1.02);
  }
`, styleSheet.cssRules.length);

styleSheet.insertRule(`
  button:hover {
    transform: scale(1.05);
    box-shadow: 0 12px 30px rgba(255,165,0,0.7);
  }
`, styleSheet.cssRules.length);

styleSheet.insertRule(`
  @keyframes fadeIn {
    from {opacity: 0; transform: translateY(-10px);}
    to {opacity: 1; transform: translateY(0);}
  }
`, styleSheet.cssRules.length);

export default GetStartedForm;