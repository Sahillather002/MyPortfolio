"use client";

import React, { useContext } from "react";
import styles from "./navigation.module.css";
import ToggleSwitch from "../ToggleSwitch/toggleSwitch";
import MyThemeContext from "@/hooks/styleContext";
import {
  greeting,
  workExperiences,
  skillsSection,
  openSource,
  blogSection,
  talkSection,
  achievementSection,
} from "@/data/portfolio";

function Header() {
  const { isDarkTheme } = useContext(MyThemeContext);
  const viewExperience = workExperiences.display;
  const viewOpenSource = openSource.display;
  const viewSkills = skillsSection.display;
  const viewAchievement = achievementSection.display;
  const viewBlog = blogSection.display;
  const viewTalks = talkSection.display;

  return (
    <header
      className={
        isDarkTheme ? `${styles.darkMenu} ${styles.header}` : styles.header
      }
    >
      <a href="/" className={styles.logo}>
        <span className={isDarkTheme ? `${styles.darkMenu} ` : styles.logoName}>
          {greeting.username}
        </span>
      </a>
      <ul>
        {viewSkills && (
          <li>
            <a href="#skills">Skills</a>
          </li>
        )}
        {viewExperience && (
          <li>
            <a href="#experience">Work Experiences</a>
          </li>
        )}
        {viewOpenSource && (
          <li>
            <a href="#opensource">Open Source</a>
          </li>
        )}
        {viewAchievement && (
          <li>
            <a href="#achievements">Achievements</a>
          </li>
        )}
        {viewBlog && (
          <li>
            <a href="#blogs">Blogs</a>
          </li>
        )}
        {viewTalks && (
          <li>
            <a href="#talks">Talks</a>
          </li>
        )}
        <li>
          <a href="#contact">Contact Me</a>
        </li>
        <li>
          <a>
            <ToggleSwitch />
          </a>
        </li>
      </ul>
    </header>
  );
}
export default Header;
