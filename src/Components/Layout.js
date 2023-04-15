import React from "react";
import NavBar from "./NavBar";
import styles from "../styles/Layout.module.css";
import Header from "./Header";

function Layout({ children }) {
  return (
    <>
      <div className={styles.view}>
        <Header />
        <div className={styles.page}>
          <NavBar />
          <div className={styles.content}>{children}</div>
        </div>
      </div>
    </>
  );
}

export default Layout;
