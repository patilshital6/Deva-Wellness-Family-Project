import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import aboutImage from "./Images/a5.jpg";
import a13 from "./Images/a13.jpg";
import a14 from "./Images/a14.jpg";

function About() {
  const [hovered, setHovered] = useState(null);
  const [activeSection, setActiveSection] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [a13, a14, aboutImage];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div style={styles.container}>
      {/* HERO SECTION */}
      <motion.section
        style={styles.hero}
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div style={styles.heroContent}>
          <h1 style={styles.title}>About DEVA WELLNESS FAMILY</h1>
          <p style={styles.text}>
            Deva Wellness & Fitness Family is a premier fitness center dedicated
            to helping individuals transform their lives through effective,
            science-backed fitness and wellness programs. Located in the heart
            of Chinchwad, Pune, we empower people of all ages and fitness levels
            to reach their full potential. With a strong focus on holistic
            health, we blend physical training, nutrition coaching, mindset
            support, and community motivation to create lasting results — not
            just quick fixes.
          </p>
        </div>

        <motion.div style={styles.heroImage} whileHover={{ scale: 1.05 }}>
          <img src={images[currentIndex]} alt="About Us" style={styles.image} />
        </motion.div>
      </motion.section>

      {/* MISSION & VISION */}
      <section style={styles.missionVisionSection}>
        {["mission", "vision"].map((item, index) => (
          <motion.div
            key={item}
            style={{
              ...styles.card,
              backgroundColor:
                hovered === item || activeSection === item
                  ? "#ff9800"
                  : "#fff",
              color:
                hovered === item || activeSection === item
                  ? "#fff"
                  : "#000",
            }}
            initial={{ opacity: 0, x: index === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.08 }}
            onMouseEnter={() => setHovered(item)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => setActiveSection(item)}
          >
            <h2 style={{ fontSize: "24px", marginBottom: "12px" }}>
              {item === "mission" ? "Our Mission" : "Our Vision"}
            </h2>
            <p style={{ fontSize: "16px", lineHeight: 1.5 }}>
              {item === "mission"
                ? "To empower people to lead healthier lives through personalized fitness programs."
                : "To be the most trusted fitness club that inspires transformation and confidence."}
            </p>
          </motion.div>
        ))}
      </section>

      {/* TRAINER SECTION */}
      <motion.section
        style={styles.trainerSection}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 style={styles.sectionTitle}>Meet Our Expert Trainer</h2>

        <div style={styles.trainerWrapper}>
          {/* IMAGE LEFT */}
          <motion.div
            style={styles.trainerImageContainer}
            whileHover={{ scale: 1.03 }}
          >
            <img src={a14} alt="Vidya Abhang" style={styles.trainerImage} />
          </motion.div>

          {/* CONTENT RIGHT */}
          <div style={styles.trainerContent}>
            <h3 style={styles.trainerName}>Vidya Abhang</h3>

            <p style={styles.trainerRole}>
              Certified Fitness & Transformation Coach
            </p>

            <p style={styles.trainerText}>
              With years of hands-on experience in strength training,
              fat loss transformation, and personalized nutrition planning,
              Coach Vidya has helped numerous members achieve sustainable,
              long-term results.
            </p>

            <p style={styles.trainerText}>
              Her training philosophy focuses on discipline, consistency,
              mindset development, and structured programming —
              ensuring real transformation, not temporary changes.
            </p>

            <div style={styles.trainerHighlight}>
              💪 5+ Years Experience | 🥗 Nutrition Expert | 🏆 Transformation Specialist
            </div>
          </div>
        </div>
      </motion.section>

      {/* CONTACT SECTION */}
      <motion.section
        style={styles.contactSection}
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 style={styles.sectionTitle}>Get In Touch</h2>

        <div style={styles.contactRow}>
          {[
            {
              icon: <FaPhoneAlt />,
              link: "tel:+917387428839",
              color: "#4CAF50",
            },
            {
              icon: <FaWhatsapp />,
              link: "https://wa.me/917387428839",
              color: "#25D366",
            },
            {
              icon: <FaEnvelope />,
              link: "mailto:info@fitclub.com",
              color: "#D44638",
            },
            {
              icon: <FaFacebookF />,
              link: "https://www.facebook.com/share/1CxMjJbKMd/",
              color: "#1877F2",
            },
            {
              icon: <FaInstagram />,
              link: "https://www.instagram.com/fitness_coach.vidya123",
              gradient:
                "linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)",
            },
          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              style={{
                ...styles.iconButton,
                background: item.gradient ? item.gradient : item.color,
              }}
              whileHover={{
                scale: 1.2,
                boxShadow: "0 0 20px rgba(255,152,0,0.7)",
              }}
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.2,
              }}
            >
              {item.icon}
            </motion.a>
          ))}
        </div>

        <motion.div
          style={styles.mapContainer}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h3 style={styles.mapTitle}>Visit Our Location</h3>
          <iframe
            title="Gym Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3779.692378039905!2d73.8347780800731!3d18.67779531911371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b7e4cb77202b%3A0x3279889708e021f!2sIDEAL%20AVENUE!5e0!3m2!1sen!2sin!4v1771950994692!5m2!1sen!2sin"
            width="100%"
            height="350"
            style={styles.map}
            loading="lazy"
          ></iframe>
        </motion.div>
      </motion.section>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "Segoe UI, sans-serif",
    backgroundColor: "#fff",
    minHeight: "100vh",
  },
  hero: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    padding: "60px 20px",
    backgroundColor: "#000",
    color: "#fff",
  },
  heroContent: { flex: 1, minWidth: "300px", maxWidth: "600px" },
  title: { fontSize: "42px", marginBottom: "20px", color: "#ff9800" },
  text: { fontSize: "18px", lineHeight: "1.6" },
  heroImage: { flex: 1, minWidth: "300px", maxWidth: "500px" },
  image: { width: "100%", borderRadius: "12px" },
  missionVisionSection: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
    padding: "40px 20px",
    backgroundColor: "#000",
  },
  card: {
    flex: 1,
    minWidth: "250px",
    maxWidth: "400px",
    padding: "25px",
    borderRadius: "12px",
    textAlign: "center",
  },
  trainerSection: {
    padding: "80px 20px",
    backgroundColor: "#111",
    color: "#fff",
  },
  trainerWrapper: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    gap: "60px",
    marginTop: "50px",
  },
  trainerImageContainer: {
    flex: "1",
    minWidth: "280px",
    maxWidth: "400px",
  },
  trainerImage: {
    width: "100%",
    borderRadius: "20px",
    boxShadow: "0 15px 40px rgba(255,152,0,0.4)",
    objectFit: "cover",
  },
  trainerContent: {
    flex: "1",
    minWidth: "280px",
    maxWidth: "600px",
  },
  trainerName: {
    fontSize: "30px",
    color: "#f3efea",
    marginBottom: "10px",
  },
  trainerRole: {
    fontSize: "18px",
    marginBottom: "20px",
    color: "#ccc",
  },
  trainerText: {
    fontSize: "16px",
    lineHeight: "1.8",
    marginBottom: "15px",
  },
  trainerHighlight: {
    marginTop: "20px",
    padding: "12px 18px",
    backgroundColor: "#1c1c1c",
    borderLeft: "4px solid #ff9800",
    borderRadius: "8px",
    fontSize: "15px",
  },
  contactSection: {
    padding: "50px 20px",
    backgroundColor: "#fff",
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: "38px",
    marginBottom: "25px",
    color: "#ff9800",
    textAlign: "center",
  },
  contactRow: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "25px",
  },
  iconButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    color: "#fff",
    fontSize: "22px",
    textDecoration: "none",
    cursor: "pointer",
  },
  mapContainer: {
    marginTop: "50px",
  },
  mapTitle: {
    fontSize: "24px",
    marginBottom: "20px",
    color: "#ff9800",
  },
  map: {
    border: "0",
    borderRadius: "12px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
  },
};

export default About;