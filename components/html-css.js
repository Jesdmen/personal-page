import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../src/styles/projects.module.css'

const Htmlcss = () => {
  return (
    <>
        <h3>Projects with HTML y CSS</h3>
        <div className={styles.contenido}>
          <div className={styles.boxes}>
            <p>Tienda de audifonos</p>
            <Link href="https://audifonos-techpro.vercel.app/" target="_blank">
              <Image src="img/audifonos.svg" height={200} width={300} alt="imagen audifons"/>
            </Link>
          </div>
          <div className={styles.boxes}>
            <p>Tienda de muebles</p>
            <Link href="https://neon-cassata-d50dd1.netlify.app/" target="_blank">
              <Image src="img/tienda-muebles.svg" height={200} width={300} alt="imagen audifons"/>
            </Link>
          </div>
          <div className={styles.boxes}>
            <p>Buscador de recetas</p>
            <Link href="https://buscador-de-recetas.vercel.app/" target="_blank">
              <Image  src="img/recetas.svg" height={200} width={300} alt="imagen audifons"/>
            </Link>
          </div>
        </div>
    </>
  )
}

export default Htmlcss