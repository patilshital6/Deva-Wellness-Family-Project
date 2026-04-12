import React, { useState } from "react";
import weightImg from "./Images/weight.jpg";
import muscleImg from "./Images/muscle.jpg";
import fullbodyImg from "./Images/fullbody.jpg";
import yogaImg from "./Images/yoga.jpg";
import strengthImg from "./Images/strength.jpg";

function Programs() {
  const [showForm, setShowForm] = useState(false);

  const programList = [
    { name: "Weight Loss Program", duration: "12 Weeks", image: weightImg },
    { name: "Muscle Building Program", duration: "16 Weeks", image: muscleImg },
    { name: "Full Body Transformation", duration: "20 Weeks", image: fullbodyImg },
    { name: "Yoga & Flexibility", duration: "Ongoing", image: yogaImg },
    { name: "Strength & Conditioning", duration: "14 Weeks", image: strengthImg }
  ];

  const handleSubmit = (e) => {
    e.preventDefault(); // 🔥 Prevent page reload
    alert("Form Submitted Successfully!");
    setShowForm(false); // Close form after submit
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Our Programs</h1>

      <div style={styles.programs}>
        {programList.map((program, index) => (
          <div key={index} style={styles.programCard}>
            <div style={styles.imageWrapper}>
              <img
                src={program.image}
                alt={program.name}
                style={styles.programImage}
              />
            </div>
            <h2 style={styles.programName}>{program.name}</h2>
            <p style={styles.programDuration}>
              Duration: {program.duration}
            </p>

            <button
              type="button"
              style={styles.joinBtn}
              onClick={() => setShowForm(true)}
            >
              Join Now
            </button>
          </div>
        ))}
      </div>

      {/* Registration Form */}
      {showForm && (
        <div style={styles.formOverlay}>
          <div style={styles.formBox}>
            <h2 style={{ color: "#ff9800" }}>Registration Form</h2>

            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Full Name" style={styles.input} required />
              <input type="email" placeholder="Email" style={styles.input} required />
              <input type="tel" placeholder="Phone Number" style={styles.input} required />

              <button type="submit" style={styles.submitBtn}>
                Submit
              </button>
            </form>

            <button
              type="button"
              style={styles.closeBtn}
              onClick={() => setShowForm(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    padding: "80px 20px",
    textAlign: "center",
    backgroundColor: "#000",
    color: "#fff",
    minHeight: "100vh",
  },
  title: {
    fontSize: "48px",
    color: "#ff9800",
    marginBottom: "50px",
    fontWeight: "700",
  },
  programs: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "30px",
  },
  programCard: {
    backgroundColor: "#111",
    borderRadius: "16px",
    width: "260px",
    padding: "20px",
    boxShadow: "0 8px 25px rgba(255,165,0,0.3)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  imageWrapper: {
    width: "100%",
    height: "160px",
    overflow: "hidden",
    borderRadius: "12px",
    marginBottom: "15px",
  },
  programImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  programName: {
    fontSize: "20px",
    marginBottom: "10px",
    color: "#ffa500",
    fontWeight: "700",
  },
  programDuration: {
    fontSize: "16px",
    marginBottom: "15px",
  },
  joinBtn: {
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#ff9800",
    color: "#000",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "700",
  },
  formOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.8)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  formBox: {
    backgroundColor: "#111",
    padding: "30px",
    borderRadius: "12px",
    width: "300px",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  input: {
    width: "100%",
    padding: "10px",
    borderRadius: "6px",
    border: "none",
    outline: "none",
    marginBottom: "10px",
  },
  submitBtn: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#ff9800",
    border: "none",
    fontWeight: "700",
    cursor: "pointer",
    marginTop: "10px",
  },
  closeBtn: {
    padding: "8px",
    backgroundColor: "gray",
    border: "none",
    cursor: "pointer",
    color: "#fff",
  },
};

export default Programs;