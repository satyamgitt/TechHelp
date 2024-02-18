import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="services">
      <h2 className={styles.title}> Our Services</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/iot.png")}
          alt="InterNet Of Things"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>Product lifecycle management</h3>
              <ul>
                <li>OTA Firmware update</li>
                <li> Infield updates</li>
                <li> Bug fix</li>
                <li> Value engineering</li>
                <li> Remote monitoring and management</li>
              </ul>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3> Electronics Technologies</h3>
              <ul>
                <li>Data Logger</li>
                <li>IOT Gateways</li>
                <li>camera</li>
                <li>GPS/GPRS</li>
                <li> RFID Based</li>
                <li>Fire Alarm system</li>
                <li> HMI Designing</li>
                <li>Robocatics</li>
                <li>Embedded Board design</li>
                <li>Traffic Light solutions</li>
                <li>Home Automation solutions</li>
                <li>Hardware solutions</li>
                <li>IIOT(industrial IOT Solutions)</li>
                <li>Circuit designing & schematic design</li>
                <li> PCB Design, hardware testing and Reverse engineering</li>
              </ul>
            </div>
          </li>
        </ul>
      </div>

      <div>
        <li className={styles.aboutItem}>
          <div className={styles.aboutItemText}>
            <h3>Industrial Design</h3>
            <ul>
              <li>Sketching</li>
              <li>CAD Modeling</li>
              <li>Prototyping and Modeling</li>
              <li>Conceptualization and Ideation</li>
              <li>Human Factors and Ergonomics</li>
              <li>Material Selection and Specification</li>
              <li>Sustainability and Environmental Considerations</li>
            </ul>
          </div>
        </li>
        <li className={styles.aboutItem}>
          <div className={styles.aboutItemText}>
            <h3>Wirless Technology</h3>
            <ul>
              <li>Bluetooth</li>
              <li>BLE</li>
              <li>nRF</li>
              <li>Zigbee</li>
              <li>GSM</li>
              <li>Material Selection and Specification</li>
              <li>Sustainability and Environmental Considerations</li>
            </ul>
          </div>
        </li>
        <li className={styles.aboutItem}>
          <div className={styles.aboutItemText}>
            <h3>IOT & Embedded Protocol</h3>
            <ul>
              <li>MQTT</li>
              <li>HTTP</li>
              <li>HTTPS</li>
              <li>UDP</li>
              <li>TCP/IP</li>
              <li>M2M</li>
            </ul>
          </div>
        </li>
      </div>
    </section>
  );
};
