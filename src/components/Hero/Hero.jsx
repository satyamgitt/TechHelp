import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}> We are Here To Help Technology </h1>
        <p className={styles.description}>
          We Give Hardware And Software Solutions
        </p>
        <a href="mailto:satyampriyam98@email.com" className={styles.contactBtn}>
          Contact us
        </a>
      </div>
      <img
        src={getImageUrl("hero/pcb.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
