import Htmlcss from '../../components/html-css'
import Javascript from '../../components/javascript'
import Reactd from '../../components/react'
import Layout from '../../components/layout'
import styles from '../styles/projects.module.css'

const Projects = () => {
  return (
    <Layout
        title={'Projects'}
        description={"All of my projects"}
    >
      <main className={`contenedor ${styles.projects}`}>
        <Htmlcss/>

        <Javascript/>
       
        <Reactd/>

      </main>
    </Layout>
  )
}

export default Projects