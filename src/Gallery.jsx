import React from "react";
import { motion } from "framer-motion";

import a1 from "./Images/a1.jpg";
import a1c from "./Images/a1c.jpg";
import a2 from "./Images/a2.jpg";
import a2c from "./Images/a2c.jpg";
import a11 from "./Images/a11.jpg";
import a11c from "./Images/a11c.jpg";

import b1 from "./Images/b1.jpeg";
import b1c from "./Images/b1c.jpeg";
import b2 from "./Images/b2.jpeg";
import b2c from "./Images/b2c.jpeg";

import c1 from "./Images/c1.jpeg";
import c1c from "./Images/c1c.jpeg";
import c2 from "./Images/c2.jpeg";
import c2c from "./Images/c2c.jpeg";
import c3c from "./Images/c3c.jpeg";
import c3 from "./Images/c3.jpeg";

const successStories = [
  { id: 1, before: a1c, after: a1, text: "Lost 15 kg in 4 months through disciplined training and clean nutrition. I never thought consistency could make such a huge difference — now I feel more confident, energetic, and healthier than ever before." },
  { id: 2, before: a11c, after: a11, text: "Body recomposition with visible muscle definition and fat loss. Following a structured program, I was able to tone my body while still enjoying a balanced lifestyle. Friends noticed the transformation almost immediately!" },
  { id: 3, before: b1c, after: b1, text: "Built lean muscle and improved strength naturally. With guided workouts and proper nutrition, I gained strength and endurance without any shortcuts, and I finally feel proud of my physique." },
  { id: 4, before: b2c, after: b2, text: "Dropped stubborn fat and improved endurance. The program helped me break through plateaus I couldn’t overcome before. My energy levels are higher, and my body feels stronger every day." },
  { id: 5, before: c2c, after: c2, text: "Lifestyle transformation with sustainable habits. Beyond physical changes, I learned how to maintain healthy routines, eat smarter, and enjoy exercise as a daily habit." },
  { id: 6, before: c1c, after: c1, text: "Beginner to confident with structured fitness guidance. Starting from scratch was intimidating, but step-by-step coaching helped me gain confidence, strength, and self-belief." },
  { id: 7, before: c3c, after: c3, text: "Strength and conditioning improvement in 5 months. The program was tailored to my goals, and now I can lift heavier, run faster, and perform better in daily activities than I ever imagined." },
  { id: 8, before: b2c, after: b2, text: "Consistent fat loss without crash dieting. I learned how to enjoy food, follow a sustainable routine, and still see results. This transformation changed not only my body but my mindset too." },
  { id: 9, before: a11c, after: a11, text: "Busy professional achieved visible results. Despite a hectic schedule, I managed to stick to the plan, and now I feel healthier, more energetic, and confident at work and in social life." },
  { id: 10, before: a2c, after: a2, text: "Total body transformation with discipline and consistency. I overcame mental barriers, stayed consistent, and finally achieved the healthy, strong body I always dreamed of. The journey changed my life." },
];

function Gallery() {
  return (
    <div className="gallery">
      <style>{`
        .gallery {
          background: #000;
          min-height: 100vh;
          padding: 100px 20px;
          font-family: 'Segoe UI', sans-serif;
        }

        .title {
          text-align: center;
          font-size: 52px;
          font-weight: 900;
          margin-bottom: 15px;
          color: #fff;
        }

        .subtitle {
          text-align: center;
          color: #ff7a00;
          margin-bottom: 80px;
          font-size: 18px;
          letter-spacing: 1px;
        }

        .story {
          max-width: 1150px;
          margin: 0 auto 120px auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 60px;
          flex-wrap: wrap;
        }

        .story:nth-child(odd) .storyContent { order: 2; }
        .story:nth-child(odd) .images { order: 1; }
        .story:nth-child(even) .storyContent { order: 1; }
        .story:nth-child(even) .images { order: 2; }

        .count {
          font-size: 14px;
          color: #ff7a00;
          margin-bottom: 15px;
          font-weight: bold;
        }

        .images {
          display: flex;
          gap: 30px;
          flex: 1 1 320px;
        }

        .imageBox {
          position: relative;
          width: 230px;
          height: 310px;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 0 30px rgba(255,255,255,0.4);
        }

        .imageBox img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top;
        }

        .tag {
          position: absolute;
          top: 12px;
          left: 12px;
          font-size: 12px;
          padding: 6px 16px;
          border-radius: 25px;
          font-weight: 700;
        }

        .before {
          background: #111;
          color: #fff;
        }

        .after {
          background: #ff7a00;
          color: #000;
        }

        .storyContent {
          flex: 1 1 450px;
        }

        .storyText {
          font-size: 16px;
          line-height: 1.8;
          background: #fff;
          padding: 30px;
          border-radius: 25px;
          color: #000;
          box-shadow: 0 0 30px rgba(255,122,0,0.3);
          transition: all 0.4s ease;
        }

        .storyText:hover {
          box-shadow: 0 0 50px rgba(255,122,0,0.8), 0 0 30px rgba(255,255,255,0.6);
          transform: translateY(-8px) scale(1.02);
        }

        @media (max-width: 768px) {
          .story {
            flex-direction: column;
            text-align: center;
          }
          .storyContent, .images {
            order: 0 !important;
          }
          .images {
            justify-content: center;
          }
        }
      `}</style>

      <motion.h1
        className="title"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Success Stories
      </motion.h1>

      <motion.p
        className="subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Real People • Real Transformations • Natural Results
      </motion.p>

      {successStories.map((item, index) => (
        <motion.div
          className="story"
          key={item.id}
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="images">
            {/* BEFORE IMAGE */}
            <motion.div
              className="imageBox"
              whileHover={{ scale: 1.05 }}
              animate={{ 
                y: [0, -8, 0], 
                rotate: [0, 2, -2, 0], 
                boxShadow: ["0 0 30px rgba(255,255,255,0.4)", "0 0 50px rgba(255,122,0,0.5)", "0 0 30px rgba(255,255,255,0.4)"] 
              }}
              transition={{ duration: 4, repeat: Infinity, repeatType: "loop", delay: index * 0.1 }}
            >
              <span className="tag before">Before</span>
              <img src={item.before} alt="Before" />
            </motion.div>

            {/* AFTER IMAGE */}
            <motion.div
              className="imageBox"
              whileHover={{ scale: 1.05 }}
              animate={{ 
                y: [0, -8, 0], 
                rotate: [0, -2, 2, 0], 
                boxShadow: ["0 0 30px rgba(255,255,255,0.4)", "0 0 50px rgba(255,122,0,0.5)", "0 0 30px rgba(255,255,255,0.4)"] 
              }}
              transition={{ duration: 4, repeat: Infinity, repeatType: "loop", delay: 0.2 + index * 0.1 }}
            >
              <span className="tag after">After</span>
              <img src={item.after} alt="After" />
            </motion.div>
          </div>

          {/* STORY TEXT */}
          <div className="storyContent">
            <span className="count">Story {index + 1}</span>
            <motion.p
              className="storyText"
              animate={{ y: [0, -3, 0], boxShadow: ["0 0 30px rgba(255,122,0,0.3)", "0 0 50px rgba(255,122,0,0.6)", "0 0 30px rgba(255,122,0,0.3)"] }}
              transition={{ duration: 4, repeat: Infinity, delay: index * 0.2 }}
              whileHover={{ scale: 1.02, y: -8, boxShadow: "0 0 60px rgba(255,122,0,0.8), 0 0 30px rgba(255,255,255,0.6)" }}
            >
              {item.text}
            </motion.p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default Gallery;