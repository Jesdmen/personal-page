import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import Layout from '../../components/layout'
import Form from '../../components/Form'
import styles from '../styles/index.module.css'
import ModalComponent from '../../components/modalComponent'


export default function Home() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Layout
        title={'Inicio'}
        description={"Blog de musica, venta de guitarras y más"}
      >
        
          <div className={styles.container}>
            <div className={styles.left}>
              <h1>Hi, I am <span>Jesús Méndez</span>.</h1>
              <h2>Web Developer & Lawyer</h2>
              <p className="h3">Fullstack and legal tech advicer.</p>

              <div className={styles.butongrupo}>
                <button onClick={openModal}  className={styles.btn1}>Contact me</button>

                  <ModalComponent
                    isOpen={isModalOpen} 
                    onRequestClose={closeModal}
                  >
                    <Form
                      closeModal={closeModal}
                    />
                  </ModalComponent>

                <button href="/aboutme" className={styles.btn2}>About Me</button>
              </div>
            </div>

            <div class={styles.right}>

              <div class="pattern-bg"></div>
              <div class="img-box">
                <Image className={styles.fotohero}  src="img/hero.svg" height={700} width={700} alt="imagen logo"/>
                <div className="shape shape-1"></div>
                <div className="shape shape-2"></div>
              </div>

             </div>

          </div>
        
      
      </Layout>
    </>
  )
}
