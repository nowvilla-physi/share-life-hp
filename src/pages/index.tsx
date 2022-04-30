import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import React from "react";

const Home = () => {
  return (
      <div className={styles.home}>
        <h1>
        </h1>
        <h2 className={styles.home__title}><span>古代エジプト</span>からの挑戦状</h2>
        <div className={styles.home__badges}>
        </div>
      </div>
  );
};

export default Home;
