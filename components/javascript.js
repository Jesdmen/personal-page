import styles from '../src/styles/projects.module.css'
import Image from 'next/image'
import Link from 'next/link'


const Javascript = () => {
  return (
    <>
        <h3>Projects with Javascript</h3>
        <div className={styles.contenido}>
          <div className={styles.boxes}>
            <p>Cotizador de seguros</p>
            <Link href="https://cotizador-seguros-prototypes.netlify.app/" target="_blank">
              <Image className={styles.fotohero}  src="img/cotizador-seguros.svg" height={200} width={300} alt="imagen seguros"/>
            </Link>
          </div>
          <div className={styles.boxes}>
            <p>Administrador de citas</p>
            <Link href="https://administradorcitasjesdmen.netlify.app/" target="_blank">
              <Image className={styles.fotohero}  src="img/administrador-citas.svg" height={200} width={300} alt="imagen administrador de citas"/>
            </Link>
          </div>
          <div className={styles.boxes}>
            <p>Buscador con api de imagenes</p>
            <Link href="https://imagenes-fetch-api-pixabay.netlify.app/" target="_blank">
              <Image className={styles.fotohero}  src="img/imagenes-api.svg" height={200} width={300} alt="imagen apis"/>
            </Link>
          </div>
        </div>
    </>
  )
}

export default Javascript