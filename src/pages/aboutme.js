import Layout from '../../components/layout'
import Image from 'next/image'
import styles from '../styles/aboutme.module.css'

const Aboutme = () => {
  return (
    <Layout 
        title={'About me'}
        description={"Everything About me "}
    >
        <main className="contenedor">
          <h2 className={styles.heading}>ABOUT ME</h2>

          <div className={styles.contenido}>
            <div className={styles.imagen}>
              <Image src="/img/hero-2.svg" width={1500} height={1200} alt="Imagen sobre nosotros" />
            </div>
  
            <div>
                <p>My name is Jesús Méndez, I am 27 years old, I am from Colombia, I was born in a small city called Sincelejo, currently I am living in Medellín. I am a lawyer by profession, with more than 4 years of experience in the public and private sector, now I work as an independent in the real estate sector.</p>

                <p>You may wonder: ¿How I ended up being a web developer? Well, more than a year ago I lost my job, although I continued working as an independent, I decided to learn a new skill and something different from what other professionals in my sector usually do.</p>

                <p>It all started with some investments in cryptocurrencies that I made, I realized that it is a sector that has a lot of potential and in which there are few developers, I began to investigate what application development consisted of, and I realized that there are many programming languages , among the most common I saw javascript and python.</p>

                <p>Javascript caught my attention, because it is currently the most widely used programming language, especially for web development. This is where it all started, I began my studies in a bootcamp, then I realized that the internet had many free tools to learn. Although it has been difficult, many days of frustration and not feeling progress, the truth is that I have learned a lot, but I am aware that I still have a lot to learn, and I am just beginning a new career.</p>

                <p>I am passionate about improving and giving my best, that is why every day I strive to improve myself, I love the technology industry, that is why I want to find an opportunity to continue growing.</p>
            </div>
          </div>
        </main> 
    </Layout>
  )
}

export default Aboutme