import styles from './Post.module.css'

export default function Post({ post }){
    return(
        <div className={styles.post}>
            <img 
                className={styles.capa}
                src={`/assets/posts/${post.id}/capa.png`}
                alt="Imagem de capa do Post"
            />

            <h2 className={styles.titulo}>{post.titulo}</h2>

            <button className={styles.botaoLer}>Saber Mais</button>
            
        </div>
    )
}