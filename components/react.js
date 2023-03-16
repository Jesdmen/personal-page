import styles from '../src/styles/projects.module.css'
import Link from 'next/link'
import Image from 'next/image'

const Reactd = () => {
  return (
    <>
        <h3>Projects with React</h3>
        <div className={styles.contenido}>
            <div className={styles.boxes}>
                <p>Tienda de guitarra</p>
                <Link href="https://guitar-la-remix-five.vercel.app/" target="_blank">
                    <Image className={styles.fotohero}  src="img/guitar.svg" height={200} width={300} alt="imagen tienda de guitarras"/>
                </Link>
            </div>
            
            <div className={styles.boxes}>
                <p>Cotizador de criptomonedas</p>
                <Link href="https://cotizador-criptos-react-gray.vercel.app/" target="_blank">
                    <Image className={styles.fotohero}  src="img/criptos.svg" height={200} width={300} alt="imagen cotizador de criptomonedas"/>
                </Link>
            </div>
            
            <div className={styles.boxes}>
                <p>Planificador de gastos</p>
                <Link href="https://control-de-presupuesto-57j5ni24n-jesdmen.vercel.app/" target="_blank">
                    <Image className={styles.fotohero}  src="img/planificador-de-gastos.svg" height={200} width={300} alt="imagen planificador de gastos"/>
                </Link>
            </div>
        </div>
    </>
  )
}

export default Reactd