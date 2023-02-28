import { useRouter } from 'next/router'
import React, {useState, useEffect} from 'react'
import styles from '../../styles/BlogPost.module.css'

// step1: find the file corresponding to the slug
// step2: Populate them inside the page
// step3: 

const Blog = () => {
  const [blog, setBlog] = useState({});
  const router = useRouter();
  const { slug } = router.query;
  useEffect(() => {
    if(!slug) return ;
    fetch(`http://localhost:3000/api/getBlog?slug=${slug}`)
    .then((data) => data.json())
    .then((data) => setBlog(data));
  }, [router.isReady, slug])
  
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {Object.entries(blog).length > 0 && (
          <>
            <h1>Title of the page : { blog.slug } </h1>
            <hr />
            <div> { blog.content }  </div>
          </>
        )}

      </main>
    </div>
  )
}

export default Blog