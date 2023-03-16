import styles from '../src/styles/error.module.css'

const Error = ({children}) => {
    return (
        <div className={styles.error}>
            {children}
        </div>
    )
}

export default Error