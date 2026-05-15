import style from "./Home.module.css";
import Button from "../../button/Button";
import { FaArrowTurnDown } from "react-icons/fa6";

export default function Home() {
    return (
        <section className={style.homeSection}>
            <div className={style.overlay}></div>
            <div className={style.content}>
                <h1>Own The Streets</h1>
                <p>Fresh drops. Clean style. Sneakers that speak before you do.</p>
                <Button>
                    Shop Now
                    <span>
                        <FaArrowTurnDown />
                    </span>
                </Button>
            </div>
        </section>
    );
}