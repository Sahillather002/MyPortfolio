"use client";
import React, { useContext } from "react";
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";
import styles from "./greeting.module.css";
import landingPerson from "@/assets/lottie/landingPerson.json";
import DisplayLottie from "@/Components/displayLottie";
import SocialMedia from "../socialMedia/socialMedia";
import Button from "@/Components/commons/button/buttons";
import Star from "@/assets/star.gif";

import { illustration, greeting } from "@/data/portfolio";
import MyThemeContext from "@/hooks/styleContext";

export default function Greeting() {
  const { isDarkTheme } = useContext(MyThemeContext);
  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className={isDarkTheme ? `darkMode` : `lightMode`}>
        <div className={styles.greetingMain}>
          <div className={styles.greetingTextDiv}>
            <div>
              <h1 className={styles.greetingText}>
                {greeting.title}{" "}
                <span className={styles.waveEmoji}>{emoji("⭐️")}</span>
              </h1>
              <p className={styles.greetingTextP}>{greeting.subTitle}</p>
              <SocialMedia />
              <div className={styles.buttonGreetingDiv}>
                <Button>Contact me</Button>
                {greeting.resumeLink && <Button>See my resume</Button>}
              </div>
            </div>
          </div>
          <div className={styles.greetingImageDiv}>
            {illustration.animated ? (
              <DisplayLottie animationData={landingPerson} />
            ) : (
              <img
                alt="man sitting on table"
                src={require("@/assets/images/manOnTable.svg")}
              ></img>
            )}
          </div>
        </div>
      </div>
    </Fade>
  );
}
