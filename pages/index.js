import Head from 'next/head';
import Image from 'next/image';
import Script from 'next/script';
import styles from '../styles/Home.module.css'

export default function Home() {
	return (
		<div className={styles.container}>
			<style jsx>
				{`
					h2{
						font-size: 38px;
					}
					h3{
						font-size: 28px;
					}

				`}
			</style>
			<Head>
				<title>Hunting Coder</title>
				<meta name="description" content="Generate by create next app" />
				<meta name='keywords' content='nextjs, hunting coder blog, hunting coder' />
				<link ref='icon' href='/favicon.ico' />
			</Head>
			<nav className={styles.mainnav}>
				<ul>
					<li>Home</li>
					<li>About </li>
					<li>Blog</li>
					<li>Contact</li>
				</ul>
			</nav>
			<main className={styles.main}>
				<h1 className={styles.title}>
					<span className="dummy">
						Hunting Coder
					</span>
				</h1>
				<div className={styles.imageWrap}>
					<Image src='/home.jpg' className={styles.myImage} width={240} height={160}/>
				</div>

				<p className={styles.description}>
					A blog for hunting coders by a hunting coder.
				</p>
				<div className="blogs">
					<h2>Popular Item</h2>
					<div className="blogItem">
						<h3>How to learn Javascript in 2022</h3>
						<p>Javascript is the language used to design logic for the web</p>
					</div>
					<div className="blogItem">
						<h3>How to learn Javascript in 2022</h3>
						<p>Javascript is the language used to design logic for the web</p>
					</div>
					<div className="blogItem">
						<h3>How to learn Javascript in 2022</h3>
						<p>Javascript is the language used to design logic for the web</p>
					</div>
					<div className="blogItem">
						<h3>How to learn Javascript in 2022</h3>
						<p>Javascript is the language used to design logic for the web</p>
					</div>
					<div className="blogItem">
						<h3>How to learn Javascript in 2022</h3>
						<p>Javascript is the language used to design logic for the web</p>
					</div>
				</div>
			</main>
			<footer className={styles.footer}> 
			</footer>
		</div>
	);
}
