import CardPequeno from "../components/CardPequeno";
import styles from "../styles/Home.module.css"

function Home() {
    return ( 
        <>
        <main className={styles["home"]}>
            <div >
                <CardPequeno/>
            </div>
        </main>
        </>
     );
}

export default Home;