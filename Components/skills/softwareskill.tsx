import React from "react";
import styles from "./softwareSkill.module.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaJs,
  FaReact,
  FaNode,
  FaSwift,
  FaNpm,
  FaDatabase,
  FaAws,
  FaFire,
  FaPython,
  FaDocker,
} from "react-icons/fa";

const skillsSection = {
  softwareSkills: [
    {
      skillName: "html-5",
      icon: <FaHtml5 />,
    },
    {
      skillName: "css3",
      icon: <FaCss3Alt />,
    },
    {
      skillName: "sass",
      icon: <FaSass />,
    },
    {
      skillName: "JavaScript",
      icon: <FaJs />,
    },
    {
      skillName: "reactjs",
      icon: <FaReact />,
    },
    {
      skillName: "nodejs",
      icon: <FaNode />,
    },
    {
      skillName: "swift",
      icon: <FaSwift />,
    },
    {
      skillName: "npm",
      icon: <FaNpm />,
    },
    {
      skillName: "sql-database",
      icon: <FaDatabase />,
    },
    {
      skillName: "aws",
      icon: <FaAws />,
    },
    {
      skillName: "firebase",
      icon: <FaFire />,
    },
    {
      skillName: "python",
      icon: <FaPython />,
    },
    {
      skillName: "docker",
      icon: <FaDocker />,
    },
  ],
};

export default function SoftwareSkill() {
  return (
    <div className={styles.softwareSkillsMainDiv}>
      <ul className={styles.devIcons}>
        {skillsSection.softwareSkills.map((skills, i) => (
          <li
            key={i}
            className={styles.softwareLine}
            data-skill-name={skills.skillName}
          >
            {skills.icon}
            <p>{skills.skillName}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
