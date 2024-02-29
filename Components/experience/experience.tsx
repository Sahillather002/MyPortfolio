"use client";

import { Fade } from "react-reveal";
import React, { useContext } from "react";

import ExperienceCard from "../experienceCard/experienceCard";
import { workExperiences } from "@/data/portfolio";
import styles from "./experience.module.css"; // Import the CSS module
import MyThemeContext from "@/hooks/styleContext";

export default function WorkExperience() {
  const { isDarkTheme } = useContext(MyThemeContext);
  if (workExperiences.display) {
    return (
      <div className={isDarkTheme ? `darkMode` : `lightMode`} id="experience">
        {" "}
        <Fade bottom duration={1000} distance="20px">
          <div
            className={styles.experienceContainer}
            id={styles.workExperience}
          >
            {" "}
            {/* Update the classNames with the CSS module */}
            <div>
              <h1 className={styles.experienceHeading}>Experiences</h1>{" "}
              {/* Update the classNames with the CSS module */}
              <div className={styles.experienceCardsDiv}>
                {" "}
                {/* Update the classNames with the CSS module */}
                {workExperiences.experience.map((card, i) => {
                  return (
                    <ExperienceCard
                      key={i}
                      isDark={isDarkTheme}
                      cardInfo={{
                        company: card.company,
                        desc: card.desc,
                        date: card.date,
                        companylogo: card.companylogo,
                        role: card.role,
                        descBullets: card.descBullets,
                      }}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </Fade>
      </div>
    );
  }
  return null;
}
