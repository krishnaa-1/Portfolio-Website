import React from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3, FaReact, FaGit } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { FaCodeBranch } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import css from "./Skills.module.scss";
import { staggerChildren, fadeIn, scaleIn } from "../../utils/motion";

const Skills = () => {
    const skillsData = [
      { icon: <TbBrandCpp style={{ color: "#68A063" }} />, label: "C++" },
      { icon: <FaHtml5 style={{ color: "#E44D26" }} />, label: "HTML" },
      { icon: <FaCss3 style={{ color: "#264DE4" }} />, label: "CSS" },
      { icon: <FaReact style={{ color: "#61DAFB" }} />, label: "React JS" },
      { icon: <TbBrandJavascript style={{ color: "#e707e0" }} />, label: "Javascript" },
      { icon: <FaCodeBranch style={{ color: "#F05032" }} />, label: "Data Structures and Algorithms" },
    ];
  
    return (
      <motion.section
        variants={staggerChildren}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`paddings ${css.wrapper}`}
      >
        <a className="anchor" id="Skills"></a>
  
        <div className={`innerWidth flexCenter ${css.container}`}>
          {/* heading */}
          <span className="primaryText yPaddings">My Skills</span>
  
          <motion.div variants={fadeIn("up", "tween", 0.6, 0.4)} className={`flexCenter ${css.skills}`}>
            {skillsData.map((skill, i) => (
              <motion.div
                key={i}
                variants={scaleIn}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={css.skillContainer}
              >
                {skill.icon}
                <span className={css.skillLabel}>{skill.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    );
  };
  
  export default Skills;