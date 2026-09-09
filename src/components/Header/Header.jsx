import styles from './Header.module.css';
import Nav from '../Nav/Nav';

function Header({ count }) {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.titleBlock}>
                    <h1 className={styles.title}>React Blog</h1>
                    <p className={styles.counterText}>Статей на сайте <span className={styles.counter}>{count}</span></p>
                </div>
                <Nav />
            </div>
        </header>
    )
}

export default Header;