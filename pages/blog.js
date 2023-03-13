import Link from 'next/link'
import React, {useEffect, useState} from 'react'
import styles from '../styles/Blog.module.css'
import { Message_Value } from '../context/context'
import Head from 'next/head'

// Step 1: collect all the files from blog data directory
// step 2: Iterate through the and display them

const Blog = (props) => {
  const { message, apiData} = Message_Value();
  console.log(apiData);
  const [blogs, setBlogs] = useState(props.allBlogs);

  // useEffect(() => {
  //   console.log('Use Effect is runing');
  //   fetch("http://localhost:3000/api/blogs")
  //   .then((data) => data.json())
  //   .then((data) => {
  //     setBlogs(data);
  //   });
  // }, [])
  
  return (
    <div className={styles.container}>
      <Head>
        <title>{message } - {blogs.length} </title>
      </Head>
      <main className={styles.main}>
        { blogs.length > 0 && blogs.map((blog, index) => (
          <div className="blogItem" key={index}>
            <Link href={`/blogpost/${blog.slug}`}>
              <h3 className={styles.blogItemH3}>{blog.title}</h3>
            </Link>
              <p>{ blog.content.substring(0, 100) }...</p>
						<button className={styles.btn}> Read More</button>
          </div>
        ))}
      </main>
    </div>
  )
}


export async function getServerSideProps(context){
    // Fetch data from external API
    const res = await fetch(`http://localhost:3000/api/blogs`)
    const allBlogs = await res.json()

    // Pass data to the page via props
    return { props: { allBlogs } }
}

export default Blog