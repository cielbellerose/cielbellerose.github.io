import React from "react";
import styles from "./header.module.css";
import { GitHubIcon, LinkedInIcon } from "../Icons/Icons";

interface HeaderProps {
  linkedinUrl: string;
  githubUrl: string;
  resumeUrl?: string;
}

const Header: React.FC<HeaderProps> = ({
  linkedinUrl,
  githubUrl,
  resumeUrl,
}) => {
  return (
    <div className={styles.rightAlignedGroup}>
      {resumeUrl && (
        <a
          href={resumeUrl}
          download="KinseyBellerose-Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.resumeButton}
        >
          Resume
        </a>
      )}
      <div className={styles.socialContainer}>
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <LinkedInIcon className={styles.linkedinIcon} />
        </a>
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <GitHubIcon className={styles.githubIcon} />
        </a>
      </div>
    </div>
  );
};

export default Header;
