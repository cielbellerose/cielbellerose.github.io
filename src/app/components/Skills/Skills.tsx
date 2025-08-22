import React from "react";
import styles from "./skills.module.css";
import Tag from "../Tag/Tag";

interface SkillsProps {
  tags: Array<string | { name: string; url?: string }>;
}

const Skills: React.FC<SkillsProps> = ({ tags }) => {
  if (!tags?.length) return null;

  return (
    <div className={styles["skills-container"]}>
      <div className={styles["skills-tags"]}>
        {tags.map((tag) => {
          if (typeof tag === "string") {
            return <Tag key={tag} name={tag} bgColor={"var(--foreground)"} />;
          } else {
            return (
              <Tag
                key={tag.name}
                name={tag.name}
                bgColor={"var(--foreground)"}
                url={tag.url}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default Skills;
