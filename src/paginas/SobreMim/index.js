import styles from './SobreMim.module.css';
import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png"
import fotoSobreMim from 'assets/sobre_mim_foto.png'

export default function SobreMim(){
    return(
            <PostModelo 
                fotoCapa={fotoCapa}
                titulo="Sobre Mim"

            >
                <h3 className={styles.subtitulo}>
                    Olá, eu sou o Kahuan!
                </h3>

                <img 
                    src={fotoSobreMim}
                    alt='Foto sorrindo'
                    className={styles.fotoSobreMim}
                />

                <p className={styles.paragrafo}>
                    Olá, está funcionando!
                </p>
                <p className={styles.paragrafo}>
                    Olá, está funcionando!
                </p>
                <p className={styles.paragrafo}>
                    Olá, está funcionando!
                </p>
                <p className={styles.paragrafo}>
                    Olá, está funcionando!
                </p>
                <p className={styles.paragrafo}>
                    Olá, está funcionando!
                </p>
                <p className={styles.paragrafo}>
                    Olá, está funcionando!
                </p>
                <p className={styles.paragrafo}>
                    Olá, está funcionando!
                </p>
            </PostModelo>
    )
}