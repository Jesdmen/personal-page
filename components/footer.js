import Link from "next/link"
import Image from "next/image"
import styles from "../src/styles/footer.module.css"

const Footer = () => {

    const añoActual = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={`contenedor ${styles.contenido}`}>
        <nav className={styles.navegacion}>
          <Link href="/">
            Home
          </Link>
          <Link  href="/aboutme">
            About Me
          </Link>
          <Link href="/projects">
            Projects
          </Link>
        </nav>
        <nav className={`contenedor ${styles.redes}`}>
          <a href="https://twitter.com/JesdMen" target="_blank">
            <Image className="logo" src="img/twitter-logo.svg" height={50} width={50} alt="Twitter logo"/>
          </a>
          <a href="https://www.instagram.com/jesusdmendez/" target="_blank">
            <Image className="logo" src="img/instagram-logo.svg" height={50} width={50} alt="Instagram logo"/>
          </a>
          <a href="https://www.linkedin.com/in/jesus-mendez-026b4b174/" target="_blank">
            <Image className="logo" src="img/linkedin-logo.svg" height={50} width={50} alt="Linkedin logo"/>
          </a>
          <a href="https://github.com/Jesdmen" target="_blank">
            <Image className="logo" src="img/github-logo.svg" height={50} width={50} alt="Github logo"/>
          </a>
          <a href="https://jesmendez.blogspot.com/" target="_blank">
            <Image className="logo" src="img/blog-logo.svg" height={50} width={50} alt="Blogger logo"/>
          </a>
        </nav>
        <p className={styles.copyrigth}>Todos los derechos reservados {añoActual}</p>
      </div>
    </footer>
  )
}

export default Footer