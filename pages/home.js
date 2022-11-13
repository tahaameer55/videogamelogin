import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useEffect } from 'react';
import {app } from '../firebaseConfig'
import { useRouter } from 'next/router';

export default function Home() {
//   let router = useRouter()
//   useEffect(() => {
//     let token = sessionStorage.getItem('Token')

//     if(!token){
//         router.push('/register')
//     }
// }, [])
  return (
    <div className={styles.container}>
      <Head>
        <title>Video game Auth</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Home</h1>
      </main>



      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
