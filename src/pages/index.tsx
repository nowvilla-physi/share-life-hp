import Image from 'next/image'
import Link from 'next/link';
import styles from '../styles/Home.module.scss'
import React from "react";
import icon from '../../public/images/icon.svg';
import appleStoreBadge from '../../public/images/apple-store-badge-black.svg';
import playStoreBadge from '../../public/images/google-play-badge.png';

const Home = () => {
    return (
        <div className={styles.home}>
            <h1 className={styles.home__title}>Share Life</h1>
            <p className={styles.home__subtitle}>家族 / 恋人間で共有できるアプリ</p>
            <div className={styles.home__icon}>
                <Image src={icon} />
            </div>
            <div className={styles.home__badges}>
                <Link href="#">
                    <a><Image src={appleStoreBadge} width={160} height={80} /></a>
                </Link>
                <Link href="#">
                    <a><Image src={playStoreBadge} width={200} height={88} /></a>
                </Link>
            </div>
            <p className={styles.home__function}>このアプリでは家族や恋人とこんなことができます。</p>
            <ol className={styles.home__list}>
                <li className={styles.home__item}>1. タスクの共有</li>
                <li className={styles.home__item}>2. 予定の共有　</li>
                <li className={styles.home__item}>3. 掲示板の閲覧</li>
            </ol>
        </div>
    );
};

export default Home;
