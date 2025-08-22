import React from "react";
import styles from "./card.module.css";
import Image from "next/image";
import Tag from "../Tag/Tag";
import { GitHubIcon } from "../Icons/Icons";

export interface CardProps {
  title?: string;
  subtitle?: string;
  dates?: string;
  description?: string | React.ReactNode;
  tags?: string[];
  githubUrl?: string;
  imageUrl?: string;
  imageAlt?: string;
  logoUrl?: string;
  logoAlt?: string;
}

const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  dates,
  description,
  tags,
  githubUrl,
  imageUrl,
  imageAlt = "",
  logoUrl,
  logoAlt = "",
}) => {
  const CardHeader = () => (
    <div className={styles["title-container"]}>
      <div className={styles["title-row"]}>
        {logoUrl && (
          <div className={styles["title-image-container"]}>
            <Image
              src={`/assets/${logoUrl}`}
              alt={logoAlt}
              className={styles["title-image"]}
              width={50}
              height={50}
            />
          </div>
        )}
        <div className={styles["title-content"]}>
          <div className={styles["header-title-wrapper"]}>
            <div className={styles["card-header"]}>{title}</div>
          </div>
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
          {dates && <p className={styles.dates}>{dates}</p>}
        </div>
      </div>
    </div>
  );

  return (
    <div className={styles["card"]}>
      <div className={styles["card-content"]}>
        {imageUrl && (
          <div className={styles["card-image-container"]}>
            <Image
              src={`/assets/${imageUrl}`}
              alt={imageAlt}
              className={styles["card-image"]}
              width={400}
              height={500}
            />
          </div>
        )}
        <CardHeader />

        {description && (
          <div className={styles["description"]}>
            {typeof description === "string" ? (
              <p>{description}</p>
            ) : (
              description
            )}
          </div>
        )}

        <div className={styles["footer-container"]}>
          {tags && (
            <div className={styles["card-tags"]}>
              {tags.map((tag) => (
                <Tag key={tag} name={tag} />
              ))}
            </div>
          )}

          {githubUrl && (
            <div className={styles["github-icon"]}>
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <GitHubIcon className={styles.githubIcon} />
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
