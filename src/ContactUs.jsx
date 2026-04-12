import React from "react";
import { motion } from "framer-motion";

function ContactUs() {
  return (
    <div style={styles.page}>
      {/* HEADER */}
      <div style={styles.header}>
        <motion.h1
          style={styles.title}
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Contact Us
        </motion.h1>
        <motion.p
          style={styles.subtitle}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Get in touch and start your fitness journey 💪
        </motion.p>
      </div>

      {/* CONTENT */}
      <div style={styles.container}>
        {/* CONTACT INFO */}
        <motion.div
          style={styles.card}
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.03, boxShadow: "0 25px 60px rgba(255,255,255,0.2)" }}
          transition={{ type: "spring", stiffness: 120 }}
        >
          <h2 style={styles.heading}>📍 Reach Us</h2>

          {[
            { icon: "🏠", text: "Shop no -104  second floor Ideal Avenue/opp Gandharva Excellence phase 1 Moshi 412105" },
            { icon: "📧", text: <a href="mailto:info@fitclub.com" style={styles.link}>info@fitclub.com</a> },
            { icon: "📞", text: <a href="tel:+917387428839" style={styles.link}>+91 7387428839</a> },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              style={styles.infoItem}
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + idx * 0.1, duration: 0.5 }}
              whileHover={{ x: 5 }}
            >
              <span style={styles.icon}>{item.icon}</span>
              <p>{item.text}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CONTACT FORM */}
        <motion.div
          style={styles.card}
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.03, boxShadow: "0 25px 60px rgba(255,255,255,0.2)" }}
          transition={{ type: "spring", stiffness: 120 }}
        >
          <h2 style={styles.heading}>💬 Send a Message</h2>

          <form style={styles.form}>
            {["Your Name", "Your Email", "Your Phone Number"].map((placeholder, idx) => (
              <motion.input
                key={idx}
                type={idx === 1 ? "email" : idx === 2 ? "tel" : "text"}
                placeholder={placeholder}
                style={styles.input}
                whileFocus={{ scale: 1.02, boxShadow: "0 0 15px rgba(255,255,255,0.4)" }}
                required
              />
            ))}

            <motion.textarea
              placeholder="Your Message"
              rows="4"
              style={styles.textarea}
              whileFocus={{ scale: 1.02, boxShadow: "0 0 15px rgba(255,255,255,0.4)" }}
              required
            />

            <motion.button
              type="submit"
              style={styles.button}
              whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(255,255,255,0.6)" }}
              whileTap={{ scale: 0.98 }}
              animate={{ boxShadow: ["0 0 25px rgba(255,255,255,0.4)", "0 0 40px rgba(255,255,255,0.6)", "0 0 25px rgba(255,255,255,0.4)"] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              SEND MESSAGE 🚀
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    backgroundColor: "#0a0a0a",
    fontFamily: "'Segoe UI', sans-serif",
    paddingBottom: "30px",
  },

  header: {
    textAlign: "center",
    padding: "50px 20px",
    background: "linear-gradient(135deg, #111, #222)",
  },

  title: {
    fontSize: "40px",
    fontWeight: "800",
    color: "#fff",
    marginBottom: "8px",
  },

  subtitle: {
    fontSize: "16px",
    color: "#ddd",
    maxWidth: "500px",
    margin: "0 auto",
  },

  container: {
    display: "flex",
    gap: "20px",
    padding: "40px 20px",
    flexWrap: "wrap",
    justifyContent: "center",
  },

  card: {
    flex: 1,
    minWidth: "280px",
    maxWidth: "450px",
    backgroundColor: "#1a1a1a",
    padding: "25px",
    borderRadius: "20px",
    boxShadow: "0 15px 35px rgba(255,255,255,0.1)",
    transition: "all 0.3s ease",
  },

  heading: {
    color: "#fff",
    marginBottom: "20px",
    fontSize: "22px",
    fontWeight: "700",
  },

  infoItem: {
    display: "flex",
    alignItems: "flex-start",
    gap: "10px",
    marginBottom: "12px",
    fontSize: "14px",
    color: "#fff",
    lineHeight: "1.5",
  },

  icon: {
    fontSize: "18px",
  },

  link: {
    color: "#ff9800",
    fontWeight: "600",
    textDecoration: "none",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },

  input: {
    padding: "12px",
    borderRadius: "10px",
    border: "none",
    outline: "none",
    fontSize: "14px",
    backgroundColor: "#222",
    color: "#fff",
    transition: "all 0.3s ease",
  },

  textarea: {
    padding: "12px",
    borderRadius: "10px",
    border: "none",
    outline: "none",
    fontSize: "14px",
    backgroundColor: "#222",
    color: "#fff",
    transition: "all 0.3s ease",
  },

  button: {
    marginTop: "12px",
    padding: "14px",
    background: "linear-gradient(135deg, #fff, #ddd)",
    color: "#000",
    fontWeight: "700",
    border: "none",
    borderRadius: "25px",
    cursor: "pointer",
    letterSpacing: "1px",
    boxShadow: "0 10px 25px rgba(255,255,255,0.2)",
    transition: "all 0.3s ease",
  },
};

export default ContactUs;