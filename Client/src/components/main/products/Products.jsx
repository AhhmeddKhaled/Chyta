import { useEffect, useState } from "react";
import style from "./Products.module.css";
import Container from "../../container/Container";
import { FaCartPlus} from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { Link } from "react-router-dom";

function App() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/api/products")
            .then((res) => res.json())
            .then((data) => setProducts(data))
            .catch((err) => console.log(err));
    }, []);

    console.log(products);
    return (
        <section className={style.productsSection}>
            <Container>

                <header className={style.sectionHeader}>
                <h2 className={style.sectionTitle}>
                    Our Products    
                </h2>

                <select className={style.categoryFilter}>
                    <option value="default">all</option>
                    <option value="men">men</option>
                    <option value="women">women</option>
                    <option value="kids">kids</option>
                    <option value="offers">offers</option>
                </select>
                </header>
                <div className={style.productsGrid}>

                    {products.map((product) => (

                        <Link
                            key={product._id}
                            to={`/product/${product._id}`}
                            className={style.productLink}>

                        <div key={product._id} className={style.productCard}>
                            <span className={style.favoriteIcon}>
                                <FaHeart />
                            </span>
                            {product.image && (
                                <img
                                    src={`http://localhost:5000${product.image}`}
                                    alt={product.name}
                                />
                            )}

                            <div className={style.productInfo}>
                                <h2>{product.name}</h2>

                                <p className={style.rating}>
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    </p>
                                <p>{product.description}</p>

                                <h3 className={style.price}>
                                    {product.price} EGP
                                    <span>
                                        <FaCartPlus />
                                    </span>
                                </h3>
                            </div>
                        </div>
                            </Link>
                    ))}
                </div>
            </Container>
        </section>
    );
}

export default App;