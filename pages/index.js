import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import styles from '../styles/Home.module.css'

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Hunting Coder</title>
				<meta name="description" content="Generate by create next app" />
				<meta name='keywords' content='nextjs, hunting coder blog, hunting coder' />
				<link ref='icon' href='/favicon.ico' />
			</Head>
					
			<main className={styles.main}>
				
				<div className={styles.imageWrap}>
					<Image src='/home.jpg' className={styles.myImage} width={240} height={160} alt="Home Page Image"/>
				</div>
				<h1 className={styles.title}>
					<span className="dummy">&lt;Hunting Coder/&gt;</span>
				</h1>

				{/* <p className={styles.description}>
					A blog for hunting coders by a hunting coder.
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, architecto similique corrupti cum quasi minus quis hic voluptate, nemo et doloribus vero dolorum, officia ducimus.

				</p> */}
				<div>
					<h2 className={styles.h2}>Lates Blogs</h2>
					<div>
						<h3 className={styles.h3}>How to learn Javascript in 2022</h3>
						<p className={styles.p}>Javascript is the language used to design logic for the web. Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, consequatur!</p>
						<button className={styles.btn}> Read More</button>
					</div>
					<div>
						<h3 className={styles.h3}>How to learn Javascript in 2022</h3>
						<p className={styles.p}>Javascript is the language used to design logic for the web</p>
						<button className={styles.btn}> Read More</button>
					</div>
					<div>
						<h3 className={styles.h3}>How to learn Javascript in 2022</h3>
						<p className={styles.p}>Javascript is the language used to design logic for the web</p>
						<button className={styles.btn}> Read More</button>
					</div>
					<div>
						<h3 className={styles.h3}>How to learn Javascript in 2022</h3>
						<p className={styles.p}>Javascript is the language used to design logic for the web</p>
						<button className={styles.btn}> Read More</button>
					</div>
					<div>
						<h3 className={styles.h3}>How to learn Javascript in 2022</h3>
						<p className={styles.p}>Javascript is the language used to design logic for the web</p>
						<button className={styles.btn}> Read More</button>
					</div>
				</div>
			</main>
			<footer className={styles.footer}> 
			</footer>
		</div>
	);
}
