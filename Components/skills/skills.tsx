"use client";
import React, { useContext } from "react";
import { Fade } from "react-reveal";
import styles from "./skills.module.css";
import SoftwareSkill from "./softwareskill";
import { illustration, skillsSection } from "@/data/portfolio";
import CodingPerson from "@/assets/lottie/codingPerson.json";
import MyThemeContext from "@/hooks/styleContext";
import DisplayLottie from "../displayLottie";
export default function Skills() {
  const { isDarkTheme } = useContext(MyThemeContext);
  if (!skillsSection.display) {
    return null;
  }
  return (
    <div className={isDarkTheme ? "darkMode" : "lightMode"} id="skills">
      <div className={styles.skillsMain}>
        <Fade left duration={1000}>
          <div className={styles.skillsImage}>
            {illustration.animated ? (
              <DisplayLottie animationData={CodingPerson} />
            ) : (
              <img
                alt="Man Working"
                src={require("@/assets/images/developerActivity.svg")}
              ></img>
            )}
          </div>
        </Fade>
        <Fade right duration={1000}>
          <div className={styles.skillsText}>
            <h1
              className={
                isDarkTheme
                  ? `darkMode ${styles.skillsHeading}`
                  : `${styles.skillsHeading}`
              }
            >
              {skillsSection.title}{" "}
            </h1>
            <p className={styles.subTitle}>{skillsSection.subTitle}</p>
            <SoftwareSkill />
            <div>
              {skillsSection.skills.map((skills, i) => {
                return (
                  <p key={i} className={styles.subTitle}>
                    ⚡{skills}
                  </p>
                );
              })}
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}
