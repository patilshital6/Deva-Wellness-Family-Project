import React from "react";

function Footer({ setPage }) {
  return (
    <>
      {/* CTA STRIP */}
      <div style={styles.ctaBar}>
        <h2 style={styles.ctaText}>
          Get a 3-day Free Membership Trial
        </h2>

       <button
         style={styles.ctaButton}
         onClick={() => setPage("getStarted")}
>        Register Now
         </button>
      </div>

      {/* MAIN FOOTER */}
      <footer style={styles.footer}>
        <div style={styles.topSection}>
          
          {/* BRAND */}
          <div style={styles.column}>
            <h2 style={styles.logo}>
              Deva <span style={{ color: "#ffc107" }}>Wellness</span>
            </h2>
            <p style={styles.description}>
              Transform your body and mind through expert training, functional
              workouts, and high-intensity community sessions designed to push
              your limits.
            </p>

            <div style={styles.socialContainer}>
              <span style={styles.social}>📘</span>
              <span style={styles.social}>📸</span>
              <span style={styles.social}>▶️</span>
              <span style={styles.social}>🐦</span>
            </div>
          </div>

          {/* WHY US */}
          <div style={styles.column}>
            <h3 style={styles.heading}>WHY DEVA WELLNESS?</h3>
            <h2 style={styles.tagline}>Small Steps, Big Changes</h2>
            <p style={styles.description}>
              Scientifically designed functional training programs backed by
              certified coaches to help you achieve your personal best.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div style={styles.column}>
            <h3 style={styles.heading}>QUICK LINKS</h3>
            <ul style={styles.linkList}>
              {[
                { label: "Home", page: "home" },
                { label: "About Us", page: "about" },
                { label: "Programs", page: "programs" },
                { label: "Services", page: "Services" },
                { label: "Contact Us", page: "contact" },
              ].map((item) => (
                <li
                  key={item.page}
                  style={styles.linkItem}
                  onClick={() => setPage(item.page)}
                  onMouseOver={(e) => (e.target.style.color = "#ffc107")}
                  onMouseOut={(e) => (e.target.style.color = "#ddd")}
                >
                  {item.label}
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div style={styles.column}>
            <h3 style={styles.heading}>CONTACT US</h3>
            <p style={styles.contactText}>
              📍 shop no -104  second floor Ideal Avenue/opp Gandharva Excellence phase 1 Moshi 412105
            </p>
            <p style={styles.contactText}>📧 info@fitclub.com</p>
            <p style={styles.contactText}>📞 +91 7387428839</p>
          </div>

        </div>

        {/* BOTTOM */}
        <div style={styles.bottomSection}>
          © 2026 Deva Wellness Family. All Rights Reserved.
        </div>
      </footer>
    </>
  );
}

const styles = {
  ctaBar: {
    backgroundColor: "#000",
    color: "#fff",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "25px 40px",
    flexWrap: "wrap",
    gap: "20px",
  },

  ctaText: {
    fontSize: "26px",
    fontWeight: "700",
  },

  ctaButton: {
    backgroundColor: "#ffc107",
    border: "none",
    padding: "14px 26px",
    fontWeight: "700",
    cursor: "pointer",
  },

  footer: {
    backgroundColor: "#111",
    color: "#eee",
    padding: "60px 40px 20px",
  },

  topSection: {
    display: "flex",
    flexWrap: "wrap",
    gap: "40px",
    justifyContent: "space-between",
  },

  column: {
    flex: 1,
    minWidth: "220px",
  },

  logo: {
    fontSize: "28px",
    fontWeight: "800",
    marginBottom: "10px",
  },

  tagline: {
    color: "#ffc107",
    marginBottom: "10px",
  },

  description: {
    fontSize: "14px",
    lineHeight: "1.7",
    color: "#bbb",
  },

  heading: {
    fontSize: "16px",
    color: "#ffc107",
    marginBottom: "12px",
    fontWeight: "700",
  },

  linkList: {
    listStyle: "none",
    padding: 0,
    lineHeight: "2",
  },

  linkItem: {
    cursor: "pointer",
    color: "#ddd",
    transition: "0.3s",
  },

  contactText: {
    fontSize: "14px",
    color: "#bbb",
    marginBottom: "8px",
  },

  socialContainer: {
    display: "flex",
    gap: "16px",
    fontSize: "22px",
    marginTop: "12px",
  },

  social: {
    cursor: "pointer",
  },

  bottomSection: {
    textAlign: "center",
    marginTop: "40px",
    borderTop: "1px solid #333",
    paddingTop: "16px",
    fontSize: "13px",
    color: "#777",
  },
};

export default Footer;