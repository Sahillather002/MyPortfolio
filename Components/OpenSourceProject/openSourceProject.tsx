"use client";
import React, { useContext, Suspense, lazy } from "react";

import { socialMediaLinks } from "@/data/portfolio";
import Loading from "../loading/loading";
import MyThemeContext from "@/hooks/styleContext";
import useGitHubData from "@/hooks/useGithubData";
import Button from "../commons/button/buttons";
import styles from "./OpenSourceProjects.module.css";

const GithubRepoCard = lazy(() => import("@/Components/githubCard/githubCard"));

export default function Projects() {
  const { isDarkTheme } = useContext(MyThemeContext);
  const userData: any = useGitHubData();

  // if (!userData) {
  //   return <Loading />;
  // }
  if (!userData) return null;

  const repoData = userData.pinnedItems.edges;

  return (
    <div
      className={
        isDarkTheme ? `darkMode ${styles.main}` : `lightMode ${styles.main}`
      }
      id="opensource"
    >
      <h1 className={styles.projectTitle}>Open Source Projects</h1>
      <div className={styles.repoCardsDivMain}>
        {repoData.map((repo: any) => (
          <Suspense key={repo.node?.id} fallback={<Loading />}>
            {repo.node && (
              <GithubRepoCard repoData={repo} isDarkTheme={isDarkTheme} />
            )}
          </Suspense>
        ))}
      </div>

      <div className={styles.quine}>
        <div>
          <a href="https://quine.sh?utm_source=widgets&utm_campaign=Sahillather002">
            <img
              src="https://stats.quine.sh/Sahillather002/github?theme=dark"
              alt="Sahillather002's GitHub Stats"
            />
          </a>
        </div>
        <div>
          <a href="https://quine.sh?utm_source=widgets&utm_campaign=Sahillather002">
            <img
              src="https://stats.quine.sh/Sahillather002/dependencies?theme=dark"
              alt="Sahillather002's GitHub Dependencies"
            />
          </a>
        </div>
      </div>

      <div className={styles.quine}>
        <div>
          <a href="https://quine.sh?utm_source=widgets&utm_campaign=Sahillather002">
            <img
              src="https://stats.quine.sh/Sahillather002/languages-over-time?theme=dark"
              alt="Sahillather002's GitHub Languages Over Time"
            />
          </a>
        </div>
        <div>
          <a href="https://quine.sh?utm_source=widgets&utm_campaign=Sahillather002">
            <img
              src="https://stats.quine.sh/Sahillather002/topics-over-time?theme=dark"
              alt="Sahillather002's GitHub Topics Over Time"
            />
          </a>
        </div>
      </div>

      <Button
        className={styles.projectButton}
        href={socialMediaLinks.github}
        newTab={true}
      >
        More Projects 👉
      </Button>
    </div>
  );
}
