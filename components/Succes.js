import styles from '../src/styles/succes.module.css'

const Succes = ({children}) => {
    return (
        <div className={styles.succes}>
            {children}
        </div>
    )
}

export default Succes