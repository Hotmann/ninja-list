import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Nisi duis deserunt amet nostrud aliqua fugiat minim exercitation
          cupidatat proident sint proident labore. Irure nostrud officia qui
          velit ullamco. Esse reprehenderit eiusmod consectetur culpa minim eu
          veniam. Eiusmod duis ut aliqua incididunt culpa minim enim nulla
          dolore et tempor.
        </p>
        <p className={styles.text}>
          Nisi duis deserunt amet nostrud aliqua fugiat minim exercitation
          cupidatat proident sint proident labore. Irure nostrud officia qui
          velit ullamco. Esse reprehenderit eiusmod consectetur culpa minim eu
          veniam. Eiusmod duis ut aliqua incididunt culpa minim enim nulla
          dolore et tempor.
        </p>
        <Link href="/ninjas" className={styles.btn}>
          See Ninja Listing
        </Link>
      </div>
    </>
  );
}
