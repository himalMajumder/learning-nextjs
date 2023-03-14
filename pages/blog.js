import Link from 'next/link'
import React, {useEffect, useState} from 'react'
import styles from '../styles/Blog.module.css'
import { Message_Value } from '../context/context'
import Head from 'next/head'
import InfiniteScroll from 'react-infinite-scroll-component';


// Step 1: collect all the files from blog data directory
// step 2: Iterate through the and display them

const Blog = (props) => {
    const { message, apiData} = Message_Value();
    const [count, setCount] = useState(2);
    const [blogs, setBlogs] = useState(props.allBlogs);

    const fetchData = async () => {
      // console.log(props.allCount);
      let d = await fetch(`http://localhost:3000/api/blogs/?count=${count + 2}`);
      setCount(count + 2);
      const {allBlogs} = await d.json();
      setBlogs(allBlogs);
    };


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
        <title>This is Blog </title>
      </Head>
      <main className={styles.main}>
        <InfiniteScroll
          // dataLength={props.allCount !== blogs.length} //This is important field to render the next data
          dataLength={props.allCount}
          next={fetchData}
          hasMore={props.allCount != blogs.length}
          loader={<h4>Loading...</h4>} 
          endMessage={
            <p style={{textAlign: 'center'}}>
              <b>Yay! You have seem it all</b>
            </p>
          }
        >
          { blogs.length > 0 && blogs.map((blog, index) => {
            console.log(props.allCount,  blogs.length, props.allCount != blogs.length, count);

            return (
            <div className="blogItem" key={index}>
              <Link href={`/blogpost/${blog.slug}`}>
                <h3 className={styles.blogItemH3}>{blog.title}</h3>
              </Link>
                <p>s ss { blog.content.substring(0, 100) }...</p>
              <button className={styles.btn}> Read More</button>
            </div>
          )})}
        </InfiniteScroll>
      </main>
    </div>
  )
}


export async function getServerSideProps(context){
    // let data = await fs.promises.readdir('./blogData');
    // let allCount = data.length;

    // Fetch data from external API
    const res = await fetch(`http://localhost:3000/api/blogs?count=2`)
    const {allBlogs, allCount} = await res.json()

    // Pass data to the page via props
    return { props: { allBlogs, allCount }}
}

export default Blog