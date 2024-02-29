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

  const smoothScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

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
          <li onClick={() => smoothScroll("skills")}>
            <a href="#skills">Skills</a>
          </li>
        )}
        {viewExperience && (
          <li onClick={() => smoothScroll("experience")}>
            <a href="#experience">Work Experiences</a>
          </li>
        )}
        {viewOpenSource && (
          <li onClick={() => smoothScroll("opensource")}>
            <a href="#opensource">Open Source</a>
          </li>
        )}
        {viewAchievement && (
          <li onClick={() => smoothScroll("achievements")}>
            <a href="#achievements">Achievements</a>
          </li>
        )}
        {viewBlog && (
          <li onClick={() => smoothScroll("blogs")}>
            <a href="#blogs">Blogs</a>
          </li>
        )}
        {viewTalks && (
          <li onClick={() => smoothScroll("talks")}>
            <a href="#talks">Talks</a>
          </li>
        )}
        <li onClick={() => smoothScroll("contact")}>
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
