import Link from 'next/link'
import React from 'react'
import styles from '../styles/Blog.module.css'

// Step 1: collect all the files from blog data directory
// step 2: Iterate through the and display them

const Blog = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className="blogItem">
          <Link href={`/blogpost/learn-javascript`}>
            <h3 className={styles.blogItemH3}>How to learn Javascript in 2022</h3>
          </Link>
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
      </main>
    </div>
  )
}

export default Blog