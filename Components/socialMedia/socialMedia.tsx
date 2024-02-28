import React from "react";
import styles from "./socialMedia.module.css"; // Import CSS module
import { socialMediaLinks } from "@/data/portfolio";
import {
  FaGithub,
  FaGitlab,
  FaKaggle,
  FaLinkedin,
  FaMailBulk,
  FaMedium,
  FaStackOverflow,
  FaTwitter,
} from "react-icons/fa";

export default function SocialMedia() {
  const renderSocialMediaLinks = () => {
    return (
      <div className={styles.iconButton}>
        {Object.entries(socialMediaLinks).map(([platform, link]) => {
          const Icon = getIconComponent(platform);
          if (link) {
            return (
              <div key={platform}>
                <a
                  href={link}
                  className={`${styles.icon} ${styles[platform.toLowerCase()]}`} // Apply appropriate class names
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className={styles.icon} />
                </a>
              </div>
            );
          }
        })}
      </div>
    );
  };

  const getIconComponent = (platform: any) => {
    switch (platform) {
      case "github":
        return FaGithub;
      case "gitlab":
        return FaGitlab;
      case "kaggle":
        return FaKaggle;
      case "linkedin":
        return FaLinkedin;
      case "gmail":
        return FaMailBulk;
      case "medium":
        return FaMedium;
      case "stackoverflow":
        return FaStackOverflow;
      case "twitter":
        return FaTwitter;
      default:
        return () => <div>Unknown Platform</div>; // Placeholder for unknown platforms
    }
  };

  return <div className={styles.mediaDiv}>{renderSocialMediaLinks()}</div>;
}
