import { useRouter } from 'next/router'
import React from 'react'
import styles from '../../styles/BlogPost.module.css'

// step1: find the file corresponding to the slug
// step2: Populate them inside the page
// step3: 
const Slug = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Title of the page : {slug} </h1>
        <hr />
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Ea voluptate incidunt dolore inventore obcaecati harum nisi
          dignissimos, expedita rem earum recusandae nesciunt quo
          assumenda corporis amet voluptatibus? Assumenda
          blanditiis nesciunt iste et molestias incidunt accusamus
          quibusdam explicabo, autem alias aspernatur obcaecati veniam aliquam
          perferendis quaerat. Maxime et obcaecati,
          nulla quisquam exercitationem omnis non illo.
        </div>
      </main>
    </div>
  )
}

export default Slug