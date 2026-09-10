import styles from './Nav.module.css';

function Nav() {
    return (
        <nav className={styles.nav}>
            <a href="#" className={styles.link}>Главная</a>
            <a href="#" className={styles.link}>Статьи</a>
            <a href="#" className={styles.link}>О нас</a>
            <div className={styles.mobileNav}>
                <div className={styles.mobileNavItem}></div>
                <div className={styles.mobileNavItem}></div>
                <div className={styles.mobileNavItem}></div>
            </div>
        </nav>
    )
}

export default Nav