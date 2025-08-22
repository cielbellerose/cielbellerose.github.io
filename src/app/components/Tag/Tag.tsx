import React from "react";
import styles from "./tag.module.css";

export interface TagProps {
  name: string;
  bgColor?: string;
  textColor?: string;
  glowColor?: string;
  url?: string;
}

const Tag: React.FC<TagProps> = ({
  name,
  bgColor = "var(--content-bg)",
  textColor = "white",
  glowColor = "var(--tag-glow)",
  url,
}) => {
  const tagContent = (
    <div
      className={styles.tag}
      style={
        {
          "--text-color": textColor,
          "--bg-color": bgColor,
          "--glow-color": glowColor,
        } as React.CSSProperties
      }
    >
      {name}
    </div>
  );

  if (url) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.tagLink}
      >
        {tagContent}
      </a>
    );
  }
  return tagContent;
};

export default Tag;
