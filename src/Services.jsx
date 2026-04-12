import React from "react";
import { motion } from "framer-motion";

import MG from "./Images/MG.jpg";
import p1 from "./Images/p1.png";
import days from "./Images/days.png";
import diet from "./Images/diet.jpg";
import trail from "./Images/trail.jpg";
import w1 from "./Images/w1.jpg"; // <-- Add your weight gain image here

function Services() {
  const services = [
    {
      title: "21 Days Weight Loss Challenge",
      text: "A structured fat-loss program designed to transform your body and boost confidence.",
      image: days,
    },
    {
      title: "Morning Workout Program",
      text: "Start your day with energy and motivation through guided workouts.",
      image: MG,
    },
    {
      title: "Diet & Nutrition Guidance",
      text: "Simple, practical diet plans that support sustainable fitness.",
      image: diet,
    },
    {
      title: "3 Days Free Trial",
      text: "Experience our workouts, trainers, and environment before joining.",
      image: trail,
    },
    {
      title: "Personal Training",
      text: "One-on-one coaching sessions focused on strength, weight loss, and personalized fitness goals.",
      image: p1,
    },
    {
      title: "Weight Gain",
      text: "Structured program for healthy muscle and weight gain with diet and strength training.",
      image: w1,
    },
  ];

  return (
    <div style={styles.page}>
      {/* HERO */}
      <section style={styles.hero}>
        <motion.h1
          style={styles.heroTitle}
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Services
        </motion.h1>

        <motion.p
          style={styles.heroText}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Fitness programs designed for real people and real results.
        </motion.p>
      </section>

      {/* SERVICES */}
      <section style={styles.services}>
        {services.map((service, index) => (
          <motion.div
            key={index}
            style={styles.card}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
          >
            <motion.img
              src={service.image}
              alt={service.title}
              style={styles.image}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            />

            <h3 style={styles.cardTitle}>{service.title}</h3>
            <p style={styles.cardText}>{service.text}</p>
          </motion.div>
        ))}
      </section>

      {/* CTA */}
      <section style={styles.cta}>
        <motion.h2
          style={styles.ctaTitle}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Start Your Fitness Journey Today
        </motion.h2>

        <motion.p
          style={styles.ctaText}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          Join DEVA WELLNESS FAMILY and transform your lifestyle.
        </motion.p>

        <motion.button
          style={styles.button}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
        >
          Register Now
        </motion.button>
      </section>
    </div>
  );
}

const styles = {
  page: {
    fontFamily: "Segoe UI, sans-serif",
    backgroundColor: "#ffffff",
  },

  hero: {
    padding: "60px 20px",
    textAlign: "center",
    background: "linear-gradient(180deg, #000000, #111111)",
    color: "#ffffff",
  },

  heroTitle: {
    fontSize: "46px",
    marginBottom: "15px",
    color: "#ff7a00",
  },

  heroText: {
    fontSize: "18px",
    maxWidth: "700px",
    margin: "0 auto",
    opacity: 0.9,
  },

  services: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "80px 20px",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "30px",
  },

  card: {
    backgroundColor: "#f9f9f9",
    borderRadius: "18px",
    overflow: "hidden",
    cursor: "pointer",
    boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
    transition: "0.3s ease",
  },

  image: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
  },

  cardTitle: {
    fontSize: "22px",
    margin: "18px 20px 10px",
    color: "#000000",
  },

  cardText: {
    fontSize: "16px",
    color: "#555",
    lineHeight: 1.6,
    margin: "0 20px 25px",
  },

  cta: {
    padding: "80px 20px",
    textAlign: "center",
    backgroundColor: "#fff3e0",
  },

  ctaTitle: {
    fontSize: "34px",
    marginBottom: "10px",
    color: "#000000",
  },

  ctaText: {
    fontSize: "18px",
    marginBottom: "25px",
    color: "#444",
  },

  button: {
    padding: "14px 36px",
    fontSize: "16px",
    border: "none",
    borderRadius: "30px",
    backgroundColor: "#ff7a00",
    color: "#fff",
    cursor: "pointer",
  },
};

export default Services;