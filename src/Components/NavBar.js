import Link from "next/link";
import React, { useEffect } from "react";
import styles from "../styles/NavBar.module.css";
import { social_medias } from "../data.json";
import Image from "next/image";

function NavBar() {
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.links}>
          <Link href="/">
            <Image width={25} height={25} src="icons/home.svg" alt="Home" title="Home" />
          </Link>
          <Link href="/about">
            <Image width={25} height={25} src="icons/info.svg" alt="About" title="About" />
          </Link>
          <Link href="/resume">
            <Image width={25} height={25} src="icons/resume.svg" alt="Resume" title="Resume" />
          </Link>
          <Link href="/works">
            {" "}
            <Image width={25} height={25} src="icons/code.svg" alt="Works" title="Works" />
          </Link>
          <Link href="/contact">
            <Image width={25} height={25} src="icons/mail.svg" alt="Contact" title="Contact" />
          </Link>
        </div>
        <div className={styles.social_media}>
          {social_medias.map((social_media, key) => (
            <a key={social_media.id} href={social_media.link} target="_blank">
              <Image width={18} height={18} src={`/icons/${social_media.icon}`} alt={social_media.label} title={social_media.label} />
            </a>
          ))}
        </div>
      </nav>
    </>
  );
}

export default NavBar;
