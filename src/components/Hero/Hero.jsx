import React from "react";
import { fadeIn, slideIn, staggerContainer } from "../../utils/motion";
import css from "./Hero.module.scss";
import { motion } from "framer-motion";
import cvFile from "/CV.pdf";
const Hero = () => {
  const handleHireButtonClick = () => {
    const email = 'krishnamalviya272@gmail.com';
    const mailtoLink = `mailto:${email}?subject=Hiring Inquiry&body=Hello Krishna, I am interested in hiring you. Let's discuss further.`;
    window.location.href = mailtoLink;
  };

  return (
    <section className={`paddings ${css.wrapper}`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`innerWidth ${css.container}`}
      >
        <div className={css.upperElements}>
          <motion.span className="primaryText" variants={fadeIn("right", "tween", 0.2, 1)}>
            Hey There,
            <br />
            I'm Krishna.
          </motion.span>
          <motion.span className="secondaryText"variants={fadeIn("left", "tween", 0.4, 1)}>
          Translating caffeine into code   
            <br />
           and turning bugs into features <br />
           since 2021.{" "}
          </motion.span>
        </div>

        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className={css.person}
        >
          <motion.img variants={slideIn("up", "tween", 0.5, 1.3)} src="krishnaIcon.png" width = "400 px"alt="" />
        </motion.div>
        
        <motion.button
          variants={fadeIn("up", "tween", 0.6, 1)}
          className={css.hireButton}
          onClick={handleHireButtonClick}
        >
          Hire Me
        </motion.button>

        <div className={css.lowerElements}>
          <motion.div variants={fadeIn("right", "tween", 0.3, 1)} className={css.experience}>
            <div className="primaryText" style={{ fontSize: "4em" }}>2</div>
            <div className="secondaryText" style={{ fontSize: "1.8em" }}>
              <div>Years of</div>
              <div>Coding Experience</div>
            </div>
          </motion.div>

          <motion.div variants={fadeIn("left", "tween", 0.5, 1)} className={css.certificate}>
            <img src="./certificate.png" alt="" />
            <span>SOFTWARE PROGRAMMER</span>
            <span>WEB DEVELOPER</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
