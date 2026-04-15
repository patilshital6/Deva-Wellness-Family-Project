import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import a12 from "./Images/a12.jpg";
import h1 from "./Images/h1.jpeg";
import g11 from "./Images/g11.jpeg";
import v1 from "./Images/v1.mp4";
import shiv from "./Images/shiv.mp4";
import shiv1 from "./Images/shiv1.mp4";
import newVideo from "./Images/new.mp4";
import Gallery from "./Gallery";
import About from "./About";
import Programs from "./Programs";
import GetStartedForm from "./GetStartedForm";
import Services from "./Services";
import ContactUs from "./ContactUs";
import logo from "./Images/logo.jpg";
import Footer from "./Footer";

function App() {
  const [page, setPage] = useState("home");
  const [hovered, setHovered] = useState(null);
  const [showVideo, setShowVideo] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  const slideImages = [a12, h1, g11];
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto slide every 6s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === slideImages.length - 1 ? 0 : prev + 1
      );
    }, 6000);
    return () => clearInterval(interval);
  }, [slideImages.length]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScroll) setShowNav(false);
      else setShowNav(true);
      setLastScroll(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  const menuItems = [
    { name: "Home", key: "home" },
    { name: "About Us", key: "about" },
    { name: "Programs", key: "programs" },
    { name: "Services", key: "Services" },
    { name: "Contact Us", key: "contact" },
  ];

  const handleMenuClick = (key) => {
    setPage(key);
  };

  const videos = [shiv, shiv1, newVideo];

  return (
    <div style={styles.app}>
      {/* NAVBAR */}
      <nav style={{ ...styles.navbar, top: showNav ? "0" : "-65px" }}>
        <img
          src={logo}
          alt="Logo"
          style={styles.logoImage}
          onClick={() => handleMenuClick("home")}
        />
        <ul style={styles.menuDesktop}>
          {menuItems.map((item) => (
            <li key={item.key}>
              <button
                style={{
                  ...styles.linkBtn,
                  color: page === item.key ? "#000" : "#fff",
                  backgroundColor:
                    page === item.key
                      ? "#ff9800"
                      : hovered === item.key
                      ? "rgba(255,152,0,0.2)"
                      : "transparent",
                }}
                onMouseEnter={() => setHovered(item.key)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => handleMenuClick(item.key)}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* HOME PAGE */}
      {page === "home" && (
        <>
          {/* HERO SECTION WITH SLIDESHOW */}
          <section style={styles.hero}>
            {/* SLIDESHOW BACKGROUND */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, scale: 1.08 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 2.5, ease: "easeInOut" }}
                style={{
                  ...styles.slideBackground,
                  backgroundImage: `url(${slideImages[currentSlide]})`,
                }}
              />
            </AnimatePresence>

            {/* HERO CONTENT */}
            <div style={styles.heroContent}>
              <div style={styles.heroTextWrapper}>
                <h1>
                  <div style={styles.marqueeText}>
                    <span style={{ color: "#fff" }}>Build Your </span>
                    <span style={{ color: "#ffa500" }}>Best Body</span>
                  </div>
                </h1>
              </div>
              <p style={styles.highlightText}>
                Workout • Nutrition • Results
              </p>
              <div style={styles.heroButtons}>
                <motion.button
                  style={styles.heroBtn}
                  whileHover={{
                    scale: 1.1,
                    textShadow: "0 0 8px #fff, 0 0 16px #ff9800",
                    boxShadow: "0 0 20px #ff9800, 0 0 40px #ffa500",
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleMenuClick("getStarted")}
                >
                  Get Started
                </motion.button>

                <motion.button
                  style={styles.freeDemoBtn}
                  whileHover={{
                    scale: 1.1,
                    textShadow: "0 0 8px #000, 0 0 16px #fff",
                    boxShadow: "0 0 20px #fff, 0 0 40px #ffa500",
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowVideo(true)}
                >
                  Free Demo
                </motion.button>
              </div>
            </div>
          </section>

          {/* WHY CHOOSE US / SUCCESS STORIES */}
          <motion.section
            style={styles.whySection}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 style={styles.whyTitle}>WHY CHOOSE US</h2>
            <div style={styles.whyGrid}>
              {[
                {
                  icon: "💪",
                  title: "Expert Trainers",
                  desc: "Certified professionals dedicated to transforming your fitness journey.",
                },
                {
                  icon: "🏋️",
                  title: "Modern Equipment",
                  desc: "Train with world-class machines in a premium workout environment.",
                },
                {
                  icon: "🥗",
                  title: "Personalized Plans",
                  desc: "Customized diet & workout programs designed for real results.",
                },
                {
                  icon: "🔥",
                  title: "Proven Results",
                  desc: "Join hundreds of success stories who transformed with us.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  style={styles.successCard}
                  whileHover={{ y: -10, scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <div style={styles.successIcon}>{item.icon}</div>
                  <h3 style={styles.successTitle}>{item.title}</h3>
                  <p style={styles.successDesc}>{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* VIDEO SECTION */}
          <motion.section
            style={styles.videoSection}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 style={styles.videoTitle}>WORKOUT VIDEOS</h2>
            <div style={styles.videoGrid}>
              {videos.map((vid, index) => (
                <motion.div
                  key={index}
                  style={styles.videoCard}
                  whileHover={{ scale: 1.05 }}
                >
                  <video
                    src={vid}
                    autoPlay
                    muted
                    loop
                    controls
                    style={styles.homeVideo}
                  />
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* GALLERY */}
          <Gallery />
        </>
      )}

      {page === "about" && <About />}
      {page === "programs" && <Programs />}
      {page === "Services" && <Services />}
      {page === "getStarted" && <GetStartedForm />}
      {page === "contact" && <ContactUs />}

      {/* FREE DEMO VIDEO POPUP */}
      {showVideo && (
        <div style={styles.videoOverlay} onClick={() => setShowVideo(false)}>
          <div style={styles.videoBox} onClick={(e) => e.stopPropagation()}>
            <video src={v1} controls autoPlay style={styles.popupVideo} />
            <button
              style={styles.closeBtn}
              onClick={() => setShowVideo(false)}
            >
              ✕
            </button>
          </div>
        </div>
      )}

      <Footer setPage={setPage} />
    </div>
  );
}

const styles = {
  app: { fontFamily: "Segoe UI, sans-serif", backgroundColor: "#000" },
  navbar: {
    background: "rgba(0,0,0,0.9)",
    backdropFilter: "blur(10px)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "6px 35px",
    position: "sticky",
    transition: "top 0.4s ease",
    zIndex: 1000,
  },
  logoImage: { height: "45px", cursor: "pointer" },
  menuDesktop: { listStyle: "none", display: "flex", gap: "10px", alignItems: "center" },
  linkBtn: {
    border: "none",
    background: "transparent",
    padding: "6px 12px",
    borderRadius: "18px",
    cursor: "pointer",
    fontWeight: "600",
    fontSize: "14px",
  },

  hero: {
    position: "relative",
    minHeight: "90vh",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  slideBackground: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
    top: 0,
    left: 0,
  },

  heroContent: {
    position: "relative",
    zIndex: 2,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
    textAlign: "center",
  },

  heroTextWrapper: {
    backgroundColor: "rgba(0,0,0,0.6)",
    padding: "16px 35px",
    borderRadius: "12px",
  },

  marqueeText: {
    display: "inline-block",
    fontSize: "2rem",
    fontWeight: "700",
    letterSpacing: "1px",
    textTransform: "uppercase",
  },

  highlightText: {
    backgroundColor: "rgba(0,0,0,0.7)",
    color: "#ff9800",
    padding: "12px 30px",
    borderRadius: "25px",
  },

  heroButtons: { display: "flex", gap: "22px", marginTop: "30px" },
  heroBtn: {
    padding: "14px 40px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    fontWeight: "600",
    fontSize: "16px",
    background: "linear-gradient(90deg, #ff9800, #ffa500)",
    color: "#fff",
  },
  freeDemoBtn: {
    padding: "14px 40px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    fontWeight: "600",
    fontSize: "16px",
    background: "linear-gradient(90deg, #fff, #ddd)",
    color: "#000",
  },

  whySection: { padding: "100px 20px", background: "linear-gradient(180deg, #000, #111)", textAlign: "center" },
  whyTitle: { color: "#ff9800", fontSize: "40px", marginBottom: "70px", letterSpacing: "2px" },
  whyGrid: { display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "50px" },

  successCard: {
    backgroundColor: "#fff",
    padding: "35px 25px",
    borderRadius: "20px",
    width: "280px",
    textAlign: "center",
    boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
  successIcon: {
    width: "70px",
    height: "70px",
    background: "linear-gradient(45deg, #ff9800, #ffb347)",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "30px",
    margin: "0 auto 15px auto",
    color: "#fff",
    boxShadow: "0 10px 20px rgba(255,152,0,0.4)",
  },
  successTitle: { color: "#ff9800", fontSize: "22px", marginBottom: "10px", fontWeight: "600" },
  successDesc: { color: "#333", fontSize: "16px", lineHeight: "1.7" },

  videoSection: { padding: "70px 20px", textAlign: "center", backgroundColor: "#111" },
  videoTitle: { color: "#ff9800", fontSize: "34px", marginBottom: "50px" },
  videoGrid: { display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "35px" },
  videoCard: { borderRadius: "15px", overflow: "hidden", boxShadow: "0 10px 25px rgba(0,0,0,0.5)" },
  homeVideo: { width: "320px", height: "500px", objectFit: "cover" },

  videoOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.7)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2000,
  },

  videoBox: { position: "relative" },
  popupVideo: { width: "600px", borderRadius: "10px" },
  closeBtn: {
    position: "absolute",
    top: "-15px",
    right: "-15px",
    backgroundColor: "#ff9800",
    border: "none",
    borderRadius: "50%",
    width: "35px",
    height: "35px",
    cursor: "pointer",
    color: "#fff",
    fontWeight: "bold",
  },
};

export default App;