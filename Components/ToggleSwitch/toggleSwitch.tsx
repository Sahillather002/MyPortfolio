import React, { useState, useContext } from "react";
import emoji from "react-easy-emoji";
import styles from "./toggle.module.css"; // Import CSS module
import MyThemeContext from "@/hooks/styleContext";

const ToggleSwitch = () => {
  const { isDarkTheme, toggleThemeHandler } = useContext(MyThemeContext);
  const [isChecked, setChecked] = useState(isDarkTheme);

  return (
    <label className={styles.switch}>
      <input
        type="checkbox"
        checked={isDarkTheme}
        className={styles.input}
        onChange={() => {
          toggleThemeHandler(), setChecked(!isChecked);
        }}
      />
      <span className={`${styles.slider} ${styles.round}`}>
        <span className={styles.emoji}>
          {isChecked ? emoji("🌜") : emoji("☀️")}
        </span>
      </span>
    </label>
  );
};

export default ToggleSwitch;
