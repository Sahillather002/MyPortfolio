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

  if (!userData) {
    return <Loading />;
  }

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

      <Button
        className={styles.projectButton}
        href={socialMediaLinks.github}
        newTab={true}
      >
        More Projects
      </Button>
    </div>
  );
}
