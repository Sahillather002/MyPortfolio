"use client";
import React, { useContext, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

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
  const [toggleNavigation, setToggleNavigation] = useState(false);
  const { isDarkTheme } = useContext(MyThemeContext);
  const viewExperience = workExperiences.display;
  const viewOpenSource = openSource.display;
  const viewSkills = skillsSection.display;
  const viewAchievement = achievementSection.display;
  const viewBlog = blogSection.display;
  const viewTalks = talkSection.display;

  const smoothScroll = (id: any) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleClick = () => {
    setToggleNavigation(!toggleNavigation);
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

      <RxHamburgerMenu
        onClick={handleClick}
        className={
          isDarkTheme ? `block md:hidden  ` : `block md:hidden text-black`
        }
      />
      <ul className={`${styles.list} hidden md:block`} id="list">
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
      </ul>
      {toggleNavigation && (
        <div className="backdrop-blur-sm absolute top-16 -left-1  z-10">
          <ul className={`${styles.list}`} id="list">
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
          </ul>
        </div>
      )}
      <a>
        <ToggleSwitch />
      </a>
    </header>
  );
}
export default Header;
