// Source: https://github.com/hasura/graphql-engine
// Apache License Version 2.0, January 2004

import React from "react";
import styles from "./CustomTOCList.module.css";

const CustomTOCList = ({ children }) => (
  <div className={styles["toc-list"]}>{children}</div>
);

const CustomTOCListSection = ({ children }) => (
  <div className={styles["toc-list-section"]}>{children}</div>
);

const CustomTOCListHead = ({ children }) => (
  <div className={styles["toc-list-head"]}>{children}</div>
);

const CustomTOCListContent = ({ children }) => (
  <ul className={styles["toc-list-content"]}>
    {children.map((child, index) => (
      <li key={`toc-lc-${index}`}>{child}</li>
    ))}
  </ul>
);

export {
  CustomTOCList,
  CustomTOCListSection,
  CustomTOCListHead,
  CustomTOCListContent,
};
