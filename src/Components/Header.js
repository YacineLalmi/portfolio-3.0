import React from "react";
import styles from "../styles/Header.module.css";
import Image from "next/image";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image width={40} height={40} src="/icons/logo.svg" alt="Logo (BianryHawk)" title="BinaryHawk" />
        Binary<span className={styles.logo_nd_part}>Hawk</span>
      </div>
    </header>
  );
}

export default Header;
