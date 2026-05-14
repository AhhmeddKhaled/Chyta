import style from "./Home.module.css";
import Button from "../../button/Button";
import { FaArrowTurnDown } from "react-icons/fa6";

export default function Home() {
    return (
        <section className={style.homeSection}>
            <div className={style.overlay}></div>
            <div className={style.content}>
                <h1>Welcome to Chyta</h1>
                <p>Your one-stop shop for all your needs. Explore our wide range of products and find the perfect items for you.</p>
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