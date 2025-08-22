import React from "react";
import styles from "./education.module.css";

interface Degree {
  college: string;
  degree: string;
  graduation: Date;
}

export interface EducationProps {
  degrees: Degree[];
}

const Education: React.FC<EducationProps> = ({ degrees }) => {
  const colleges: { [key: string]: Degree[] } = {};

  degrees.forEach((degree) => {
    if (!colleges[degree.college]) {
      colleges[degree.college] = [];
    }
    colleges[degree.college].push(degree);
  });

  const sortedColleges = Object.keys(colleges).sort();

  const formatGradDate = (date: Date) => {
    const now = new Date();
    const isFuture = date > now;
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
    };
    const formattedDate = date.toLocaleDateString("en-US", options);
    return isFuture ? `Expected: ${formattedDate}` : formattedDate;
  };

  return (
    <div className={styles.education}>
      {sortedColleges.map((college) => (
        <div key={college} className={styles["college-group"]}>
          <h3 className={styles["college-name"]}>{college}</h3>
          <div className={styles.degrees}>
            {colleges[college]
              .sort((a, b) => a.graduation.getTime() - b.graduation.getTime())
              .map((degree, i) => (
                <div key={i} className={styles.degree}>
                  <p className={styles["degree-title"]}>{degree.degree}</p>
                  <p className={styles.graduation}>
                    {formatGradDate(degree.graduation)}
                  </p>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Education;
