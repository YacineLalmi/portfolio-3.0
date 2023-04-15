import React from "react";
import styles from "../styles/Header.module.css";
import Image from "next/image";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.right}>
        <div className={styles.logo}>
          <Image width={40} height={40} src="/icons/logo.svg" alt="Logo (BianryHawk)" title="BinaryHawk" />
          Binary<span className={styles.logo_nd_part}>Hawk</span>
        </div>
      </div>
      <div className={styles.left}>
        <div className={styles.navbar}>
          <button>
            <Image width={25} height={25} src="/icons/bars.svg" alt="Setting" />
          </button>
        </div>
        <div className={styles.settings}></div>
        <button>
          <Image width={25} height={25} src="/icons/setting.svg" alt="Setting" />
        </button>
      </div>
    </header>
  );
}

export default Header;
