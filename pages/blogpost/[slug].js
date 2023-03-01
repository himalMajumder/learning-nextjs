import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import styles from "../../styles/BlogPost.module.css";

// step1: find the file corresponding to the slug
// step2: Populate them inside the page
// step3:

const Blog = (props) => {
	const [blog, setBlog] = useState(props.blogData);
	// const router = useRouter();
	// const { slug } = router.query;
	// useEffect(() => {
	// 	if (!slug) return;
	// 	fetch(`http://localhost:3000/api/getBlog?slug=${slug}`)
	// 		.then((data) => data.json())
	// 		.then((data) => setBlog(data));
	// }, [router.isReady, slug]);

	return (
		<div className={styles.container}>
			{Object.entries(blog).length > 0 && (
				<>
        <Head>
          <title>{blog.title}</title>
        </Head>
					<main className={styles.main}>
						<h1>Title of the page : {blog.title} </h1>
						<hr />
						<div> {blog.content} </div>
					</main>
				</>
			)}
		</div>
	);
};

export async function getServerSideProps(context){
  const { slug } = context.query;
  
  const data = await 	fetch(`http://localhost:3000/api/getBlog?slug=${slug}`);
  const blogData = await data.json();

  return {
    props : {blogData}
  }

}

export default Blog;
