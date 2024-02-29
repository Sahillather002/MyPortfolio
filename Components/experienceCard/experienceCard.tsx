import React, { useState, createRef } from "react";
import ColorThief from "colorthief";
import styles from "./experienceCard.module.css";

type Props = {
  cardInfo: {
    company: string;
    desc: string;
    date: string;
    companylogo: string;
    role: string;
    descBullets?: string[];
  };
  isDark: boolean; // Define the type explicitly
};

export default function ExperienceCard({ cardInfo, isDark }: Props) {
  // Use Props instead of props
  const [colorArrays, setColorArrays] = useState<number[]>([]); // Specify the type of colorArrays
  const imgRef = createRef<HTMLImageElement>(); // Specify the type of imgRef

  function getColorArrays() {
    const colorThief = new ColorThief();
    setColorArrays(colorThief.getColor(imgRef.current as HTMLImageElement));
  }

  function rgb(values: (string | number)[] | null) {
    if (!values) {
      return undefined; // Skip setting the background if values is null
    }
    return "rgb(" + values.join(", ") + ")";
  }

  type DescBulletsProps = {
    descBullets?: string[];
    isDark: boolean;
  };

  const GetDescBullets = ({ descBullets, isDark }: DescBulletsProps) => {
    // Specify the type of DescBulletsProps
    return descBullets
      ? descBullets.map((item, i) => (
          <li
            key={i}
            className={isDark ? styles.subTitleDark : styles.subTitle}
          >
            {item}
          </li>
        ))
      : null;
  };

  return (
    <div className={isDark ? styles.experienceCardDark : styles.experienceCard}>
      <div
        style={{ background: rgb(colorArrays) }}
        className={styles.experienceBanner}
      >
        <div className={styles.experienceBlurredDiv}></div>
        <div className={styles.experienceDivCompany}>
          <h5 className={styles.experienceTextCompany}>{cardInfo.company}</h5>
        </div>

        <img
          crossOrigin={"anonymous"}
          ref={imgRef}
          className={styles.experienceRoundedimg}
          src={cardInfo.companylogo}
          alt={cardInfo.company}
          onLoad={getColorArrays}
        />
      </div>
      <div className={styles.experienceTextDetails}>
        <h5
          className={
            isDark
              ? `darkMode ${styles.experienceTextRole}`
              : styles.experienceTextRole
          }
        >
          {cardInfo.role}
        </h5>
        <h5
          className={
            isDark
              ? `darkMode ${styles.experienceTextDate}`
              : styles.experienceTextDate
          }
        >
          {cardInfo.date}
        </h5>
        <p
          className={
            isDark
              ? `${styles.subTitle} ${styles.experienceTextDesc} ${styles.darkModeText}`
              : `${styles.subTitle} ${styles.experienceTextDesc}`
          }
        >
          {cardInfo.desc}
        </p>
        <ul>
          <GetDescBullets descBullets={cardInfo.descBullets} isDark={isDark} />
        </ul>
      </div>
    </div>
  );
}
