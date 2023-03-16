import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/router"
import styles from "../src/styles/header.module.css"

const Header = () => {

    const router = useRouter();

  return (
    <header>
        <div className={styles.container}>
            <nav className={styles.navbar}>
                <Link href='/'>
                    <Image className="logo" src="img/Logo.svg" height={70} width={70} alt="imagen logo"/>
                </Link>

                <div className="titulo">
                    <h2>Jesús Méndez Devs Blog</h2>
                </div>

                <div className={styles.navegacion}>
                    <ul>
                        <Link className={router.pathname === "/" ? styles.active : ""} href='/'>Home</Link>
                        <Link className={router.pathname === "/aboutme" ? styles.active : ""} href='/aboutme'>About Me</Link>
                        <Link className={router.pathname === "/projects" ? styles.active : ""} href='/projects'>Projects</Link>
                    </ul>

                </div>
            </nav>
        </div>
    </header>
  )
}

export default Header