import Container from "../container/Container";
import style from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={style.footer}>
            <Container>

                <div className={style.grid}>

                    <div className={style.footerContent}>
                        <h3 className={style.logo}>Chyta</h3>
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li><a href="/products">Products</a></li>
                                <li><a href="/about">About</a></li>
                                <li><a href="/contact">Contact</a></li>
                            </ul>
                    </div>

                    <div className={style.socialMedia}>
                        <h3>Follow Us</h3>
                        <ul>
                            <li>
                                <a href="https://www.facebook.com/Chyta" target="_blank" rel="noopener noreferrer">Facebook</a>
                            </li>

                            <li>

                                <a href="https://www.twitter.com/Chyta" target="_blank" rel="noopener noreferrer">Twitter</a>
                            </li>

                            <li>

                                <a href="https://www.instagram.com/Chyta" target="_blank" rel="noopener noreferrer">Instagram</a>
                            </li>
                        </ul>
                    </div>

                    <div className={style.bestSellers}>
                        <h3>Best Sellers</h3>
                        <ul>
                            <li><a href="/product/1">puma </a></li>
                            <li><a href="/product/2">Adidas ultraboost</a></li>
                            <li><a href="/product/3">nike air max</a></li>
                        </ul>
                    </div>

                    <div className={style.contactInfo}>
                        <h3>Contact Us</h3>
                        <ul>
                            <li>
                        <p>Email: info@chyta.com</p>
                            </li>
                            <li>
                        <p>Phone: +1 (123) 456-7890</p>
                            </li>
                        </ul>
                    </div>

                    <div className={style.orders}>
                        <h3>Orders & Returns</h3>
                        <ul>
                            <li><a href="/orders">Track Order</a></li>
                            <li><a href="/returns">Return Policy</a></li>
                            <li><a href="/shipping">Shipping Info</a></li>
                            <li><a href="/orders">Order now</a></li>
                        </ul>
                    </div>  
                </div>

                <p className={style.copy}>Copyright &copy; 2024 Chyta. All rights reserved.</p>
            </Container>
        </footer>
    );
}

