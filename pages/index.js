import Head from "next/head";
import Image from "next/image";
import pegawaiJSON from "../pegawai_12_10_2022.json";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Datanes</title>
        <meta name="description" content="data unnes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}></main>
    </div>
  );
}
