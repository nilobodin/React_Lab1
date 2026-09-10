import style from './ArticleCard.module.css';

function ArticleCard({ article }) {
    const { title, excerpt, author, date, tag, image } = article;
    return (
        <article className={style.card}>
            <div className={style.body}>
                <span className={style.tag}>{tag}</span>
                <img src={image} alt={tag} className={style.img} />
                <h2 className={style.title}>{title}</h2>
                <p className={style.excerpt}>{excerpt}</p>
                <footer className={style.footer}>
                    <span className={style.author}>{author}</span>
                    <span className={style.date}>{date}</span>
                </footer>
            </div>
        </article>
    )
}

export default ArticleCard;